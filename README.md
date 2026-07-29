# CS Student Portfolio

A dark-mode, recruiter-focused portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Designed for a Computer Science student applying to internships and entry-level frontend/full-stack roles.

PORTFOLIO LINK : https://lakshminarayanan-2005.github.io/portfolio
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

This project is set up as a **static export** (see below) so it can run on GitHub Pages, which has no server to send email from. The form posts to [Formspree](https://formspree.io) instead:

1. Go to formspree.io, sign up free, and create a new form.
2. Copy the form ID it gives you.
3. In `components/Contact.tsx`, replace `[your-form-id]` in the `FORMSPREE_ENDPOINT` constant with it.

## 4. Before you publish — a quick checklist

- [ ] Every `[bracketed placeholder]` in `lib/data.ts` replaced with real content
- [ ] `REPO_NAME` in `next.config.js` set to your actual GitHub repo name
- [ ] Formspree form ID added in `components/Contact.tsx`
- [ ] Real resume in `public/resume.pdf`
- [ ] Real project screenshots in `public/projects/`
- [ ] Real domain swapped into `layout.tsx` / `robots.ts` / `sitemap.ts`
- [ ] Run `npm run build` locally with no errors

## 5. Publishing to GitHub Pages (step by step)

This is the same hosting model as `harish-4007.github.io/f1-aiml-analysis` — a static site served straight from your GitHub repo at `https://<your-username>.github.io/<repo-name>/`.

**1. Set your repo name in the code**

Open `next.config.js` and set `REPO_NAME` to whatever you'll name the GitHub repository (e.g. `"portfolio"`).

**2. Create the GitHub repo and push your code**

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

**3. Turn on GitHub Pages**

- On GitHub, go to your repo → **Settings → Pages**.
- Under **Build and deployment → Source**, choose **GitHub Actions**.

A workflow file is already included at `.github/workflows/deploy.yml`. It runs automatically on every push to `main`: installs dependencies, builds a static export (`next build` with `output: "export"`), and publishes the `out/` folder to Pages.

**4. Watch it deploy**

- Go to the **Actions** tab in your repo — you'll see "Deploy to GitHub Pages" running.
- Once it finishes (usually under 2 minutes), your site is live at:
  ```
  https://<your-username>.github.io/<repo-name>/
  ```
- Every future `git push` to `main` redeploys automatically.

**Alternative: deploying to Vercel instead**

If you'd rather have a cleaner URL and a working server-side contact form, this same codebase also works on Vercel — just remove `output: "export"` from `next.config.js` first, then either connect the repo at [vercel.com](https://vercel.com) → **Add New → Project**, or run:

```bash
npm install -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## 6. Performance & accessibility notes

- Fonts are loaded via `next/font/google`, which self-hosts and preloads them — no render-blocking font requests.
- All interactive elements have visible focus states (`:focus-visible` in `globals.css`).
- Animations respect `prefers-reduced-motion` (see `globals.css` and the hero terminal, which skips the typing animation entirely for reduced-motion users).
- Images should use `next/image` once you add real screenshots, so they're automatically lazy-loaded and served in modern formats.
- Run `npm run build && npx serve@latest .next` or deploy a preview, then check Lighthouse in Chrome DevTools — this structure targets 95+ across Performance, Accessibility, Best Practices, and SEO, but real project images and content will affect the final score.
