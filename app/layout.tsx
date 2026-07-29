import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const SITE_NAME = "Your Name — Frontend / Full Stack Developer";
const SITE_DESCRIPTION =
  "Computer Science student and aspiring full stack web developer. Explore projects built with React, Next.js and TypeScript, and get in touch about internship or entry-level opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "Computer Science Student",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Internship",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "https://your-domain.vercel.app",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-base-950 text-ink-100 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal focus:text-base-950 focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
