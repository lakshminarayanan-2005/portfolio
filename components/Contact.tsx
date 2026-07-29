"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-base-900 border-t border-base-700 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's talk"
          description={profile.availability}
        />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink-300 hover:text-ink-100 transition-colors text-sm"
            >
              <Mail size={18} className="text-signal" /> {profile.email}
            </a>
            <a
              href={profile.github}
              className="flex items-center gap-3 text-ink-300 hover:text-ink-100 transition-colors text-sm"
            >
              <Github size={18} className="text-signal" /> GitHub profile
            </a>
            <a
              href={profile.linkedin}
              className="flex items-center gap-3 text-ink-300 hover:text-ink-100 transition-colors text-sm"
            >
              <Linkedin size={18} className="text-signal" /> LinkedIn profile
            </a>
            <a
              href={profile.resumeUrl}
              className="flex items-center gap-3 text-ink-300 hover:text-ink-100 transition-colors text-sm"
            >
              <FileDown size={18} className="text-signal" /> Download resume
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-xs text-ink-500 uppercase section-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 focus:border-signal outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-ink-500 uppercase section-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 focus:border-signal outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-ink-500 uppercase section-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1.5 w-full rounded-lg border border-base-700 bg-base-800/60 px-4 py-2.5 text-sm text-ink-100 focus:border-signal outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-signal text-base-950 px-5 py-2.5 text-sm font-semibold hover:bg-signal/90 transition-colors disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} /> Sent
                </>
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                "Send message"
              )}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong — please email me directly at {profile.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
