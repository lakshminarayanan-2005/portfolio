"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, FolderGit2 } from "lucide-react";
import { profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";

const LINES = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat role.txt", output: profile.title },
  { prompt: "status --check", output: profile.availability, success: true },
];

function Terminal() {
  const prefersReduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIndex].prompt;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 450);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, prefersReduced]);

  return (
    <div className="rounded-xl border border-base-700 bg-base-900/80 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-base-700 bg-base-800/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-ink-500 text-xs">intro.sh</span>
      </div>
      <div className="p-5 space-y-3 min-h-[168px]">
        {LINES.map((line, i) => {
          const isCurrent = i === lineIndex && !done;
          const showPrompt = prefersReduced || i < lineIndex || done || isCurrent;
          if (!showPrompt) return null;
          const typedPrompt = isCurrent ? line.prompt.slice(0, charIndex) : line.prompt;
          const showOutput = prefersReduced || i < lineIndex || done;
          return (
            <div key={line.prompt}>
              <p className="text-ink-300">
                <span className="text-accent">➜</span> <span className="text-ink-500">~</span>{" "}
                <span className="text-ink-100">{typedPrompt}</span>
                {isCurrent && <span className="inline-block w-2 h-4 bg-ink-100 ml-0.5 animate-blink align-middle" />}
              </p>
              {showOutput && (
                <p className={`pl-4 ${line.success ? "text-signal" : "text-ink-300"}`}>
                  {line.success ? "✓ " : ""}
                  {line.output}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden bg-glow-radial pt-40 pb-28 px-6"
    >
      <div
        className="absolute inset-0 -z-10 bg-grid-fade opacity-60"
        style={{ backgroundSize: "auto, 48px 48px, 48px 48px" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label text-signal text-xs uppercase mb-4">
            Available for internships &amp; entry-level roles
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-ink-100">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-ink-300 font-medium">{profile.title}</p>
          <p className="mt-5 text-base text-ink-500 max-w-xl leading-relaxed">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-signal text-base-950 px-5 py-2.5 text-sm font-semibold hover:bg-signal/90 transition-colors"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
              href={withBasePath(profile.resumeUrl)}
              className="inline-flex items-center gap-2 rounded-full border border-base-700 px-5 py-2.5 text-sm font-medium text-ink-100 hover:border-ink-300 transition-colors"
            >
              <FileDown size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-base-700 px-5 py-2.5 text-sm font-medium text-ink-100 hover:border-ink-300 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink-500">
            <a href={profile.github} aria-label="GitHub" className="hover:text-ink-100 transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-ink-100 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink-100 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
