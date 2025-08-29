import React, { useEffect } from "react";

// -----------------------------
// Types
// -----------------------------

type SectionProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};


type SkillsMarqueeProps = {
  items?: string[];
};

// -----------------------------
// Configurable data
// -----------------------------
const DATA = {
  name: "Eric Youmans",
  role: "Software Engineer",
  tagline:
    "Software Engineer with expertise in Embedded Systems, Machine Learning, and Web Development.",
  location: "Washington, DC",
  email: "mailto:eric@example.com",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username/",
  resumeUrl: "/resume.pdf",
  skills: ["React", "Next.js", "TypeScript", "JavaScript (ES202x)", "Tailwind CSS", "HTML / CSS", "Node.js"],
  education: [
    { school: "University of Texas, Austin, TX", degree: "Master of Science in Artificial Intelligence, 4.0 GPA", period: "Aug. 2024 – Present" },
    { school: "University of Maryland, College Park, MD", degree: "Bachelor of Science in Computer Science and Economics, 3.31 GPA", period: "May 2021 – Dec. 2023" },
    { school: "Montgomery College, Rockville, MD", degree: "Associate of Science in Mathematics, 3.44 GPA", period: "May 2019 – May 2021" },
  ],
  experience: [
    {
      company: "DEVCOM Army Research Laboratory, GTS LLC",
      role: "Software Engineer",
      period: "Jan. 2024 – Present",
      bullets: [
        "Developed multiple data collection algorithms in C tailored for proprietary hardware, resulting in a 30% increase in data acquisition efficiency.",
        "Engineered machine learning algorithms with TensorFlow, LiteRT, and Python, improving prediction accuracy by ~25%.",
        "Led 4 interns, running weekly stand-ups and providing on-site support.",
        "Collaborated with cross-functional teams to improve efficiency on multi-team projects.",
      ],
    },
    {
      company: "DEVCOM Army Research Laboratory",
      role: "Software Engineer Intern",
      period: "May 2023 – Dec. 2023",
      bullets: [
        "Developed and deployed Python-based ML algorithms enhancing system functionality.",
        "Executed advanced data cleansing and transformations in Python, improving dataset quality by ~30%.",
        "Designed optimized data collection algorithms in C, improving accuracy by ~40%.",
        "Delivered technical presentations to diverse audiences.",
      ],
    },
    {
      company: "University of Maryland (Research Assistant)",
      role: "Research Assistant to Prof. Thomas Drechsel",
      period: "Aug. 2022 – May 2023",
      bullets: [
        "Assisted on 'Identifying Monetary Language Shocks: A Natural Language Approach'.",
        "Customized regression R packages (Lasso, Ridge) to analyze implementation details.",
        "Developed Python scripts optimizing PDF parsing and I/O by ~67%.",
      ],
    },
  ],
  projects: [
    {
      title: "Tiny Shakespeare Language Model",
      blurb: "Developed bigram and multi-head attention models in PyTorch, re-implemented in JAX for functional ML experience.",
      tags: ["PyTorch", "JAX", "NLP"],
    },
  ],
};

// -----------------------------
// Utilities
// -----------------------------
const cls = (...xs: Array<string | null | false | undefined>): string => xs.filter(Boolean).join(" ");

const useSmoothScroll = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
};

// -----------------------------
// Components
// -----------------------------
const Section: React.FC<SectionProps> = ({ id, title, eyebrow, children }) => (
  <section id={id} className="scroll-mt-24" aria-label={title}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-8 sm:mb-12">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">{eyebrow}</p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cls("group rounded-2xl border border-white/5 bg-slate-900/80 shadow-sm hover:shadow-xl transition-shadow", className)}>
    {children}
  </div>
);

// Skills Marquee
const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ items = [] }) => {
  const list = React.useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3">
      <div className="flex animate-marquee whitespace-nowrap gap-3">
        {list.map((s, i) => (
          <span key={`${s}-${i}`} className="inline-flex items-center rounded-full border border-white/20 bg-slate-800 px-3 py-1 text-xs text-slate-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

// Background redesign: smoother gradient with radial glow, no rectangle
const Background: React.FC = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-black bg-gradient-to-tr from-indigo-950 via-slate-950 to-black" />
    <div className="absolute left-[20%] top-[10%] h-[40vmax] w-[40vmax] rounded-full bg-fuchsia-600/10 blur-[120px] animate-pulse-slow" />
    <div className="absolute right-[15%] bottom-[10%] h-[35vmax] w-[35vmax] rounded-full bg-indigo-500/15 blur-[120px] animate-pulse-slow" />
  </div>
);

// -----------------------------
// Main component
// -----------------------------
export default function Portfolio() {
  useSmoothScroll();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-dvh antialiased bg-transparent text-slate-200 selection:bg-indigo-500/40">
      <Background />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/70 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#home" className="font-semibold tracking-tight text-white">{DATA.name}</a>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:opacity-80" href="#education">Education</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative grid gap-10 py-16 sm:grid-cols-2 sm:items-center sm:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{DATA.location}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">{DATA.role}</h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300">{DATA.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-800 px-5 py-2.5 text-sm font-medium hover:translate-y-[-1px] transition" href={DATA.resumeUrl} target="_blank" rel="noreferrer">Download Resume</a>
            </div>
            <div className="mt-8 flex gap-4 text-sm">
              <a className="underline-offset-4 hover:underline" href={DATA.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline-offset-4 hover:underline" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Rotating halo */}
          <div className="relative h-64 sm:h-72 md:h-80 flex items-center justify-center">
            <div className="spin-slow h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full opacity-40" style={{
              background: "conic-gradient(from 0deg, rgba(129,140,248,.9), rgba(168,85,247,.8), rgba(244,114,182,.8), rgba(34,211,238,.8), rgba(129,140,248,.9))",
              filter: "blur(1px)",
            }} />
          </div>
        </section>
      </main>

      {/* Education */}
      <Section id="education" title="Education" eyebrow="Academic Background">
        <div className="space-y-6">
          {DATA.education.map((edu) => (
            <Card key={edu.school} className="p-6">
              <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
              <p className="text-sm text-slate-300">{edu.degree}</p>
              <span className="text-xs text-slate-400">{edu.period}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" eyebrow="Professional Roles">
        <div className="space-y-6">
          {DATA.experience.map((job) => (
            <Card key={job.company} className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-sm text-slate-300">{job.company}</p>
                </div>
                <span className="text-sm text-slate-400">{job.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-300 space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Technical Projects" eyebrow="Portfolio">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((p) => (
            <Card key={p.title} className="p-6">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-slate-800 px-3 py-1 text-xs text-slate-200">{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills" eyebrow="Toolkit">
        <div className="space-y-6">
          <SkillsMarquee items={DATA.skills} />
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((s) => (
              <span key={s} className="rounded-full border border-white/20 bg-slate-800 px-3 py-1 text-xs text-slate-200">{s}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let's work together" eyebrow="Contact">
        <Card className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Open to Software Engineer roles</h3>
              <p className="text-sm text-slate-300">I can start immediately and I love building impactful technology.</p>
            </div>
            <div className="flex gap-3">
              <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-800 px-4 py-2 text-sm font-medium hover:translate-y-[-1px] transition" href={DATA.email}>Email Me</a>
              <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-800 px-4 py-2 text-sm font-medium hover:translate-y-[-1px] transition" href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {DATA.name}. Built with React + Tailwind.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        .animate-marquee { animation: marquee 18s linear infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-slow { animation: spin-slow 22s linear infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: .6; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
