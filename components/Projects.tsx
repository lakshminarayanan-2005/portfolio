"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Lightbulb } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-base-900 border-y border-base-700 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built"
          description="Full stack apps built end to end — from the data model to the interface. Replace the screenshots and links with your own."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="group rounded-xl border border-base-700 bg-base-800/40 overflow-hidden hover:border-accent/60 transition-colors"
            >
              {/* Screenshot placeholder */}
              <div className="aspect-video bg-gradient-to-br from-base-700 to-base-900 flex items-center justify-center">
                <span className="text-ink-500 text-xs font-mono">[ project screenshot ]</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl text-ink-100">{project.title}</h3>
                <p className="mt-2 text-sm text-ink-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-accent border border-accent/30 rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-ink-500 flex gap-2">
                      <span className="text-signal">›</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2 rounded-lg bg-base-900/60 border border-base-700 p-3">
                  <Lightbulb size={15} className="text-signal shrink-0 mt-0.5" />
                  <p className="text-xs text-ink-500 leading-relaxed">
                    <span className="text-ink-300 font-medium">Key learning: </span>
                    {project.learnings}
                  </p>
                </div>

                <div className="mt-5 flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-100 transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-100 transition-colors"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
