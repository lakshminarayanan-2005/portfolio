import { Github, Linkedin, Mail } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-base-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-ink-500">
        <div className="flex flex-wrap items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink-100 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} aria-label="GitHub" className="hover:text-ink-100 transition-colors">
            <Github size={17} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-ink-100 transition-colors">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink-100 transition-colors">
            <Mail size={17} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-base-700 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-500 font-mono">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with Next.js, React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
