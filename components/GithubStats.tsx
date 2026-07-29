"use client";

import { motion } from "framer-motion";
import { GitBranch, GitCommitHorizontal, Star } from "lucide-react";
import { githubStats, profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function GithubStats() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="08 — GitHub"
          title="Recent activity"
          description={`Swap in a live GitHub stats card (e.g. github-readme-stats) for @${githubStats.username} once you deploy.`}
        />

        <div className="grid lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-xl border border-base-700 bg-base-800/40 p-6"
          >
            <p className="section-label text-xs uppercase text-ink-500 mb-4">Contribution graph</p>
            <div className="grid grid-cols-26 gap-1" style={{ gridTemplateColumns: "repeat(26, minmax(0,1fr))" }}>
              {Array.from({ length: 26 * 7 }).map((_, i) => {
                const shade = [0, 1, 2, 3][Math.floor(Math.abs(Math.sin(i * 12.9898)) * 4) % 4];
                const bg =
                  shade === 0 ? "bg-base-700" : shade === 1 ? "bg-signal/25" : shade === 2 ? "bg-signal/55" : "bg-signal";
                return <div key={i} className={`w-full aspect-square rounded-[2px] ${bg}`} />;
              })}
            </div>
            <p className="text-xs text-ink-500 mt-4 font-mono">[ placeholder — replace with real contribution data ]</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-base-700 bg-base-800/40 p-6 space-y-5"
          >
            <div className="flex items-center gap-3">
              <GitBranch size={18} className="text-signal" />
              <div>
                <p className="text-ink-100 font-medium text-sm">{githubStats.totalRepos} repositories</p>
                <p className="text-ink-500 text-xs">public + private</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star size={18} className="text-signal" />
              <div>
                <p className="text-ink-100 font-medium text-sm">Pinned repositories</p>
                <p className="text-ink-500 text-xs">Featured on your GitHub profile</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GitCommitHorizontal size={18} className="text-signal" />
              <div>
                <p className="text-ink-100 font-medium text-sm">Most used languages</p>
                <p className="text-ink-500 text-xs">{githubStats.topLanguages.join(", ")}</p>
              </div>
            </div>
            <a
              href={profile.github}
              className="inline-block text-sm text-accent hover:text-ink-100 transition-colors"
            >
              View full profile →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
