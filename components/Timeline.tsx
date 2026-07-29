"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  return (
    <section id="journey" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="04 — Journey"
          title="How I got from HTML to full stack"
          description="Learning in public, one step at a time — this is the actual order I picked things up in."
        />

        <ol className="relative border-l border-base-700 pl-8 space-y-9">
          {timeline.map((step, i) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full border-2 ${
                  i === timeline.length - 1
                    ? "bg-signal border-signal"
                    : "bg-base-950 border-base-700"
                }`}
              />
              <p className="font-display text-ink-100">{step.label}</p>
              <p className="text-sm text-ink-500 mt-1">{step.note}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
