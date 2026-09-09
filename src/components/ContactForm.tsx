"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services, site } from "@/content/site";

export function ContactForm() {
  const params = useSearchParams();
  const region = params.get("region");
  const [sent, setSent] = useState(false);

  const regionNote = useMemo(() => {
    if (region === "usa") return "Enquiry from USA / North America desk.";
    if (region === "eu") return "Enquiry from Europe / PPWR desk.";
    return "";
  }, [region]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Service interest: ${service}`,
      regionNote ? `Region: ${regionNote}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry — ${service || "MONOFIX"}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl bg-mist p-6 text-navy">
        Thank you. Your mail client should open with the message for {site.email}. We respond within 24 hours.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      {regionNote ? (
        <p className="rounded-xl bg-lime/40 px-3 py-2 text-sm font-medium text-ink">{regionNote}</p>
      ) : null}
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input
          name="name"
          required
          className="rounded-xl border border-slate/20 bg-white px-4 py-4 text-base font-normal outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="rounded-xl border border-slate/20 bg-white px-4 py-4 text-base font-normal outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Company
        <input
          name="company"
          className="rounded-xl border border-slate/20 bg-white px-4 py-4 text-base font-normal outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Service interest
        <select
          name="service"
          required
          defaultValue=""
          className="rounded-xl border border-slate/20 bg-white px-4 py-4 text-base font-normal outline-none focus:border-blue"
        >
          <option value="" disabled>
            Select a vertical
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-slate/20 bg-white px-4 py-4 text-base font-normal outline-none focus:border-blue"
        />
      </label>
      <button
        type="submit"
        className="mt-2 cursor-pointer rounded-full bg-ink px-8 py-4 text-base font-bold text-white hover:bg-navy"
      >
        Send message
      </button>
    </form>
  );
}
