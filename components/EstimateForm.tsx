"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const projectTypes = [
  "Dock (new or DOCKSrx repair)",
  "Golf cart bridge",
  "Dune walkover / beach access",
  "Boardwalk",
  "Trail bridge",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-pine-200 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-pine-400 focus:outline-none focus:ring-2 focus:ring-pine-200";

const labelClass =
  "block text-sm font-semibold text-pine-800";

type Status = "idle" | "submitting" | "sent" | "error";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      location: data.get("location"),
      projectType: data.get("projectType"),
      details: data.get("details"),
      company: data.get("company"), // honeypot
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-pine-100 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pine-100 text-pine-600">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display mt-5 text-2xl font-semibold text-pine-800">
          Thanks — we&apos;ve got your request
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          We&apos;ll review your project and get back to you shortly. Prefer to
          talk now? Email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-pine-700 hover:underline"
          >
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-pine-100 bg-white p-7 shadow-sm sm:p-9"
    >
      {/* Honeypot — hidden from people, irresistible to bots. If filled, the
          server silently drops the submission. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave this blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={`mt-2 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${inputClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className={`mt-2 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="location">
            Project location
          </label>
          <input
            id="location"
            name="location"
            placeholder="City, State"
            className={`mt-2 ${inputClass}`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="projectType">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className={`mt-2 ${inputClass}`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="details">
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Tell us about your project — dimensions, current condition, timeline, anything helpful."
          className={`mt-2 ${inputClass}`}
        />
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong sending your request. Please email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      )}

      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-700 px-7 py-3 text-sm font-semibold text-sand-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-pine-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending…" : "Send Request"}
        </button>
      </div>
    </form>
  );
}
