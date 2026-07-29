/** @type {import('next').NextConfig} */

// Set this to your GitHub repo name (the part after github.com/<user>/).
// e.g. if your repo is "portfolio", the site will live at
// https://<your-username>.github.io/portfolio/
const REPO_NAME = "portfolio";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static export — required for GitHub Pages
  basePath: isGithubPages ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : "",
  images: {
    unoptimized: true, // GitHub Pages can't run the Next.js image optimizer
  },
  trailingSlash: true, // avoids 404s on GitHub Pages routing
  env: {
    // Exposed to the client so plain <a href> / <img src> links to files in
    // /public (resume.pdf, project screenshots) resolve under the repo subpath.
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${REPO_NAME}` : "",
  },
};

module.exports = nextConfig;
