// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the portfolio yours.
// Every placeholder below is marked with [ ]. Nothing here is fabricated
// work history — replace projects/certs/achievements with your real ones.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "M Lakshminarayanan",
  title: "Computer Science Student | Aspiring Full Stack Web Developer",
  tagline:
    "I build modern, responsive web applications and enjoy turning real problems into clean, working code.",
  intro:
    "I'm a Computer Science student passionate about building modern, responsive, and user-friendly web applications. I enjoy solving real-world problems with clean code, and I'm continuously improving my skills across the frontend and backend.",
  location: "Chennai,India",
  email: "lakshmln.official@gmail.com",
  github: "https://github.com/lakshminarayanan-2005",
  linkedin: "https://www.linkedin.com/in/m-lakshminarayanan-6380712902mln/",
  resumeUrl: "/resume.pdf",
  availability: "Open to Internships & Entry-Level Roles",
};

export const education = {
  degree: "B.E in Computer Science",
  institution: "Karpaga Vinayaga College of Engineering and Technology",
  graduationYear: "2028",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Web Technologies",
  ],
};

export const about = {
  paragraphs: [
    "I'm currently pursuing my degree in Computer Science, where I've built a strong foundation in data structures, algorithms, and software engineering principles — and found that building things for the web is where I enjoy applying them most.",
    "Outside of coursework, I spend my time building side projects, reading documentation, and figuring out how production applications are put together. I'd rather ship a small working feature than leave a big idea unfinished.",
    "I haven't worked professionally yet, but I've built and shipped several full stack projects on my own, and I'm looking for an internship or entry-level role where I can learn from experienced engineers and contribute from day one.",
  ],
  traits: [
    { label: "Learning mindset", detail: "Comfortable picking up a new framework or tool when the project needs it." },
    { label: "Problem solver", detail: "Enjoy breaking down a vague requirement into a working plan." },
    { label: "Team player", detail: "Used to collaborating on group projects, code reviews, and shared repos." },
    { label: "Detail-oriented", detail: "Care about clean commits, readable code, and small UX details." },
  ],
};

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL", "Firebase", "Supabase"],
  Tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker"],
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  challenge: string;
  learnings: string;
  github: string;
  demo: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Storefront",
    description:
      "A full stack e-commerce site with product listings, a cart, and a checkout flow backed by a real database.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    features: ["Product search & filtering", "Cart with persisted state", "Stripe test-mode checkout"],
    challenge:
      "Keeping cart state in sync across pages without a heavy state library — solved with React Context and localStorage fallback.",
    learnings: "Structuring an app around real data models instead of hardcoded arrays.",
    github: "https://github.com/[your-username]/ecommerce-storefront",
    demo: "https://[your-demo-link].vercel.app",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Task Manager",
    description:
      "A Trello-style task board with drag-and-drop columns, due dates, and per-user boards.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    features: ["Drag-and-drop board", "Auth with JWT", "Due-date reminders"],
    challenge:
      "Implementing optimistic UI updates for drag-and-drop so the board feels instant while the API call is in flight.",
    learnings: "Designing a REST API schema before writing any frontend code.",
    github: "https://github.com/[your-username]/task-manager",
    demo: "https://[your-demo-link].vercel.app",
    image: "/projects/task-manager.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather app with city search, a 5-day forecast, and saved locations.",
    tech: ["JavaScript", "React", "OpenWeather API"],
    features: ["Live search with debounce", "Geolocation support", "Saved cities"],
    challenge:
      "Handling inconsistent API responses and rate limits gracefully with caching and clear error states.",
    learnings: "Working with a third-party API and designing around its limits.",
    github: "https://github.com/[your-username]/weather-dashboard",
    demo: "https://[your-demo-link].vercel.app",
    image: "/projects/weather.png",
  },
  {
    title: "Realtime Chat App",
    description:
      "A chat application with rooms, typing indicators, and message history.",
    tech: ["React", "Node.js", "Socket.io", "Firebase"],
    features: ["Realtime messaging", "Typing indicators", "Persisted chat history"],
    challenge:
      "Keeping socket connections stable across reconnects and syncing message order across clients.",
    learnings: "First hands-on experience with websockets and event-driven architecture.",
    github: "https://github.com/[your-username]/realtime-chat",
    demo: "https://[your-demo-link].vercel.app",
    image: "/projects/chat.png",
  },
  {
    title: "Movie Search App",
    description:
      "A movie discovery app with search, filtering by genre, and a watchlist.",
    tech: ["React", "TypeScript", "TMDB API"],
    features: ["Search with pagination", "Genre filters", "Local watchlist"],
    challenge: "Managing loading and empty states cleanly across multiple async data sources.",
    learnings: "Practicing clean component composition and prop typing with TypeScript.",
    github: "https://github.com/[your-username]/movie-search",
    demo: "https://[your-demo-link].vercel.app",
    image: "/projects/movies.png",
  },
  {
    title: "This Portfolio",
    description:
      "The site you're looking at — built from scratch to practice production-quality frontend engineering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Fully responsive layout", "Accessible by default", "Optimized for performance & SEO"],
    challenge: "Getting animations to feel deliberate rather than decorative, and keeping Lighthouse scores high.",
    learnings: "How much performance and accessibility work goes into a 'simple' marketing site.",
    github: "https://github.com/[your-username]/portfolio",
    demo: "https://your-domain.vercel.app",
    image: "/projects/portfolio.png",
  },
];

export const timeline = [
  { label: "Started learning HTML & CSS", note: "Built my first static pages." },
  { label: "Built static websites", note: "Layouts, forms, responsive design." },
  { label: "Learned JavaScript", note: "DOM manipulation, fetch, async logic." },
  { label: "Built React applications", note: "Components, hooks, state management." },
  { label: "Learned backend development", note: "Node.js, Express, REST APIs." },
  { label: "Built full stack projects", note: "Connected frontend, backend, and a database." },
  { label: "Currently learning Next.js & TypeScript", note: "App Router, SSR, type-safe code." },
  { label: "Preparing for internship opportunities", note: "Polishing projects and this portfolio." },
];

export const certifications = [
  { title: "Responsive Web Design", issuer: "[Issuing Platform]", year: "[Year]" },
  { title: "JavaScript Algorithms and Data Structures", issuer: "[Issuing Platform]", year: "[Year]" },
  { title: "React — The Complete Guide", issuer: "[Issuing Platform]", year: "[Year]" },
  { title: "Node.js Developer Course", issuer: "[Issuing Platform]", year: "[Year]" },
  { title: "Git & GitHub Essentials", issuer: "[Issuing Platform]", year: "[Year]" },
];

export const achievements = [
  "Built and deployed [N] personal full stack projects",
  "Maintained consistent GitHub contributions over the past [N] months",
  "Solved [N]+ problems on LeetCode / HackerRank",
  "Participated in [Hackathon / Coding Contest Name]",
  "Attended [Workshop / Bootcamp Name]",
  "Completed [N] certifications in web development",
];

export const whyHireMe = [
  { title: "Strong technical foundation", detail: "Comfortable across the stack — from responsive UI to REST APIs." },
  { title: "Fast learner", detail: "Can pick up a new tool or codebase quickly and independently." },
  { title: "Genuine passion", detail: "Building software is what I do in my free time, not just for class." },
  { title: "Clear communicator", detail: "Can explain technical decisions in plain language." },
  { title: "Problem-solving mindset", detail: "Focus on understanding the 'why' before writing code." },
  { title: "Team player", detail: "Experience with group projects, shared repos, and code review." },
  { title: "Detail-oriented", detail: "Care about edge cases, accessibility, and polish." },
  { title: "Coachable", detail: "Excited to learn from engineers more experienced than me." },
];

export const githubStats = {
  username: "[your-username]",
  totalRepos: "[N]",
  topLanguages: ["TypeScript", "JavaScript", "Python", "HTML/CSS"],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
