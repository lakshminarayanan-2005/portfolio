"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base-950/80 backdrop-blur-md border-b border-base-700" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-medium text-ink-100 tracking-tight">
          {profile.name}
          <span className="text-signal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-300">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-ink-100 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={withBasePath(profile.resumeUrl)}
          className="hidden md:inline-flex items-center rounded-full border border-base-700 px-4 py-2 text-sm font-medium text-ink-100 hover:border-signal hover:text-signal transition-colors"
        >
          Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden text-ink-100 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base-950/95 backdrop-blur-md border-b border-base-700 px-6 py-4">
          <ul className="flex flex-col gap-4 font-body text-ink-300">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="hover:text-ink-100">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={withBasePath(profile.resumeUrl)} className="text-signal">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
