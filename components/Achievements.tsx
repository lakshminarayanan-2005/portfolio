"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="06 — Achievements" title="Milestones along the way" />

        <ul className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-sm text-ink-300"
            >
              <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
