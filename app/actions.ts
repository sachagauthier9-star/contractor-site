"use server";

import { Resend } from "resend";

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return { success: false, error: "Server configuration error." };
  }

  const resend = new Resend(apiKey);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "White Pine Construction <sacha@whitepineconstruction.ca>",
      to: ["Sacha@whitepineconstruction.ca"],
      subject: `New Estimate Request: ${projectType} (${name})`,
      replyTo: email,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send message." };
  }
}