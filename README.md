# CS Student Portfolio

A dark-mode, recruiter-focused portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Designed for a Computer Science student applying to internships and entry-level frontend/full-stack roles.

## Design system

| Token | Value | Use |
|---|---|---|
| `base-950` | `#07070B` | Page background |
| `base-900` | `#0C0C13` | Alternating section background |
| `base-800` | `#14141E` | Cards |
| `base-700` | `#1D1D2A` | Borders / dividers |
| `ink-100 / 300 / 500` | `#F5F5F7 / #C3C3CE / #8B8B9A` | Text: primary / secondary / muted |
| `signal` | `#7DE6C3` | Success / primary CTA (terminal green — "it compiles") |
| `accent` | `#8B7CF6` | Secondary accent / links |

**Type:** Space Grotesk (display headings), Inter (body copy), JetBrains Mono (labels, code, the hero terminal). The hero's signature element is a typed terminal (`intro.sh`) that "runs" your name, title, and availability like a status check — a nod to the audience (developers/recruiters evaluating a dev) rather than a generic gradient hero.

All copy is placeholder and marked with `[brackets]` — nothing fabricates work experience.

## Project structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # Contact form endpoint (stub — see below)
│   ├── layout.tsx             # Fonts, metadata/SEO
│   ├── page.tsx               # Composes all sections
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/                # One component per section
├── lib/data.ts                # ← ALL your real content goes here
├── public/
│   ├── resume.pdf             # ← add your real resume here
│   └── projects/              # ← add real project screenshots here
└── README.md
```

## 1. Local setup

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# 1. Move into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open `http://localhost:3000` in your browser.

## 2. Make it yours

Everything you need to personalize lives in **`lib/data.ts`**. Edit that one file:

- `profile` — name, title, intro, email, GitHub/LinkedIn URLs, resume path
- `education` — degree, institution, graduation year, coursework
- `about` — bio paragraphs and trait cards
- `skills` — your real tech stack, grouped by category
- `projects` — your real projects (title, description, tech, features, github/demo links, what you learned)
- `timeline` — your actual learning path
- `certifications`, `achievements`, `whyHireMe`, `githubStats` — swap in real data

Then:

1. Replace `public/resume.pdf` with your actual resume.
2. Add real screenshots to `public/projects/` and swap the placeholder `<div>` in `components/Projects.tsx` for a Next.js `<Image src={project.image} .../>`.
3. Replace `your-domain.vercel.app` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with your real deployed URL once you have one.
4. Add a real profile photo if you want one instead of the terminal-only hero — drop it in `public/` and reference it from `components/Hero.tsx`.

## 3. Making the contact form actually send email

Right now `app/api/contact/route.ts` just logs the submission to the server console — it won't email you yet. Pick one:

- **Resend** (recommended, generous free tier): `npm install resend`, get an API key from resend.com, uncomment the example code in `route.ts`, and add `RESEND_API_KEY` to your environment variables.
- **Formspree**: skip the API route and point the form's `action` at your Formspree endpoint instead.
- **EmailJS**: send directly from the client if you'd rather not use a server route.

## 4. Before you publish — a quick checklist

- [ ] Every `[bracketed placeholder]` in `lib/data.ts` replaced with real content
- [ ] Real resume in `public/resume.pdf`
- [ ] Real project screenshots in `public/projects/`
- [ ] Contact form wired to an actual email provider
- [ ] Real domain swapped into `layout.tsx` / `robots.ts` / `sitemap.ts`
- [ ] Run `npm run build` locally with no errors

## 5. Deploying to Vercel (step by step)

**Option A — with GitHub (recommended):**

1. Create a new repository on GitHub.
2. From inside the `portfolio` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
4. Click **Add New → Project**, select your repository, and click **Import**.
5. Vercel auto-detects Next.js — leave the default build settings (`next build`) as they are.
6. If you're using Resend or another email provider, add the API key under **Environment Variables** before deploying.
7. Click **Deploy**. Your site will be live at `https://<your-project-name>.vercel.app` within a minute or two.
8. (Optional) Go to **Project → Settings → Domains** to connect a custom domain.

**Option B — without GitHub, using the Vercel CLI:**

```bash
npm install -g vercel
cd portfolio
vercel        # follow the prompts to deploy a preview
vercel --prod # promote to your production URL
```

## 6. Performance & accessibility notes

- Fonts are loaded via `next/font/google`, which self-hosts and preloads them — no render-blocking font requests.
- All interactive elements have visible focus states (`:focus-visible` in `globals.css`).
- Animations respect `prefers-reduced-motion` (see `globals.css` and the hero terminal, which skips the typing animation entirely for reduced-motion users).
- Images should use `next/image` once you add real screenshots, so they're automatically lazy-loaded and served in modern formats.
- Run `npm run build && npx serve@latest .next` or deploy a preview, then check Lighthouse in Chrome DevTools — this structure targets 95+ across Performance, Accessibility, Best Practices, and SEO, but real project images and content will affect the final score.
