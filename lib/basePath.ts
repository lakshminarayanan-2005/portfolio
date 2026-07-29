// Prefixes a root-relative path (e.g. "/resume.pdf") with the GitHub Pages
// repo subpath at build time, so links to files in /public still resolve
// when the site is served from https://<user>.github.io/<repo>/.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) return path;
  return `${basePath}${path}`;
}
