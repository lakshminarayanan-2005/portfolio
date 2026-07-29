"use client";

import { motion } from "framer-motion";
import { whyHireMe } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function WhyHireMe() {
  return (
    <section className="bg-base-900 border-y border-base-700 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="07 — Why hire me"
          title="What I bring to a team"
          description="I don't have professional experience yet — here's what I do have."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyHireMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="rounded-xl border border-base-700 bg-base-800/40 p-5"
            >
              <p className="font-display text-ink-100 text-sm mb-2">{item.title}</p>
              <p className="text-ink-500 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
