"use client";

import { useState } from "react";
import { sendContactEmail } from "../actions";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type of Project</label>
        <select
          name="projectType"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option>Kitchen Renovation</option>
          <option>Bathroom Renovation</option>
          <option>Basement Finishing</option>
          <option>Addition</option>
          <option>General Contracting</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Details</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project..."
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#15933a] hover:bg-[#1fd655] text-slate-950 font-semibold py-3 rounded-lg transition disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Request Free Estimate"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium text-center mt-3">
          Thank you! Your estimate request has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium text-center mt-3">
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}