"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

const PROJECT_TYPES = [
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Basement Finishing",
  "Accent Walls",
  "General Contracting",
  "Painting Services",
  "Questions",
  "Other",
];

const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// Simple per-IP limit: at most 5 submissions every 10 minutes.
// This lives in server memory, so it resets on redeploy and is per-instance.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (recentSubmissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT) {
    recentSubmissions.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  recentSubmissions.set(ip, timestamps);
  return false;
}

function getField(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

// Escape user input so it shows as plain text in the email, never as HTML.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(formData: FormData) {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  // Pretend it worked so bots don't learn they were caught.
  if (getField(formData, "website", 200)) {
    return { success: true };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  const name = getField(formData, "name", 100);
  const email = getField(formData, "email", 254);
  const phone = getField(formData, "phone", 30);
  const projectType = getField(formData, "projectType", 50);
  const message = getField(formData, "message", 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!PROJECT_TYPES.includes(projectType)) {
    return { success: false, error: "Please choose a project type." };
  }

  if (phone && !/^[0-9+()\-.\s]+$/.test(phone)) {
    return { success: false, error: "Please enter a valid phone number." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return { success: false, error: "Server configuration error." };
  }

  const resend = new Resend(apiKey);

  // Line breaks are removed from the subject so it stays a single line.
  const subjectName = name.replace(/[\r\n]+/g, " ");

  try {
    await resend.emails.send({
      from: "White Pine Construction <sacha@whitepineconstruction.ca>",
      to: ["Sacha@whitepineconstruction.ca"],
      subject: `New Estimate Request: ${projectType} (${subjectName})`,
      replyTo: email,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message." };
  }
}
