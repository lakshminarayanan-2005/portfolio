"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { about, education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-base-900 border-y border-base-700 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="01 — About" title="A bit about how I got here" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p) => (
              <p key={p} className="text-ink-300 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {about.traits.map((trait) => (
                <div key={trait.label} className="rounded-lg border border-base-700 bg-base-800/50 p-4">
                  <p className="text-ink-100 font-medium text-sm">{trait.label}</p>
                  <p className="text-ink-500 text-sm mt-1">{trait.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-base-700 bg-base-800/50 p-6 h-fit"
          >
            <div className="flex items-center gap-2 text-ink-100 mb-4">
              <GraduationCap size={18} className="text-signal" />
              <p className="font-medium text-sm">Education</p>
            </div>
            <p className="font-display text-lg text-ink-100">{education.degree}</p>
            <p className="text-ink-300 text-sm mt-1">{education.institution}</p>
            <p className="text-ink-500 text-sm mt-1">Expected {education.graduationYear}</p>

            <p className="text-ink-500 text-xs uppercase section-label mt-6 mb-2">Relevant coursework</p>
            <ul className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="text-xs text-ink-300 border border-base-700 rounded-full px-3 py-1"
                >
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
