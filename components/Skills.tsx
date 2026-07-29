"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="02 — Stack"
          title="Technologies I work with"
          description="Grouped by where they sit in the stack — from what renders in the browser to where the data lives."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map(([category, items], groupIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              className="rounded-xl border border-base-700 bg-base-800/40 p-5"
            >
              <p className="section-label text-xs uppercase text-ink-500 mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-ink-300 border border-base-700 bg-base-900/60 rounded-md px-2.5 py-1.5 hover:border-signal hover:text-signal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
