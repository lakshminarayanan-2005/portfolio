"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section className="bg-base-900 border-y border-base-700 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="05 — Certifications" title="Courses I've completed" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-base-700 bg-base-800/40 p-5 flex gap-3"
            >
              <Award size={18} className="text-signal shrink-0 mt-0.5" />
              <div>
                <p className="text-ink-100 font-medium text-sm">{cert.title}</p>
                <p className="text-ink-500 text-xs mt-1">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
