
import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Moon, Sun, Link as LinkIcon, Briefcase, GraduationCap, FolderOpen, Calendar } from 'lucide-react'
import { profile } from './data/profile'
import { experience } from './data/experience'
import { education } from './data/education'
import { projects } from './data/projects'

function ThemeToggle(): React.ReactElement {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const stored = localStorage.getItem('theme') === 'dark'
    const initial = stored || prefersDark
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])
  const toggle = (): void => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 rounded-2xl glass px-3 py-2 text-sm hover:shadow">
      {dark ? <Sun size={18}/> : <Moon size={18}/>} <span>{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function Section(props: { id: string; icon: React.ReactNode; title: string; subtitle?: string; children: React.ReactNode }): React.ReactElement {
  return (
    <section id={props.id} className="container-custom my-12 scroll-mt-20">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-2xl glass p-2">{props.icon}</div>
        <div>
          <h2 className="text-2xl font-bold">{props.title}</h2>
          {props.subtitle ? <p className="text-sm text-zinc-500 dark:text-zinc-400">{props.subtitle}</p> : null}
        </div>
      </div>
      <div>{props.children}</div>
    </section>
  )
}

function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container-custom flex items-center justify-between py-3">
        <a href="#top" className="font-semibold"> {profile.name} </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:underline" href="#education">Education</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#experience">Experience</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

function Hero(): React.ReactElement {
  return (
    <div className="container-custom pt-12 md:pt-16" id="top">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{profile.name}</h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{profile.title}</p>
          <p className="mt-4 max-w-2xl">{profile.summary}</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            {profile.location ? (
              <span className="inline-flex items-center gap-2 rounded-2xl glass px-3 py-2 text-sm">
                <MapPin size={16}/> {profile.location}
              </span>
            ) : null}
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl glass px-3 py-2 text-sm hover:shadow">
                <Mail size={16}/> {profile.email}
              </a>
            ) : null}
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl glass px-3 py-2 text-sm hover:shadow">
                <Github size={16}/> GitHub
              </a>
            ) : null}
            {profile.linkedin ? (
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-2xl glass px-3 py-2 text-sm hover:shadow">
                <Linkedin size={16} /> LinkedIn
              </a>
            ) : null}
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-2xl glass p-6">
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="text-sm space-y-2 list-disc ms-5">
              <li>Fast learner & effective communicator</li>
              <li>Focus: Algorithms, AI/ML, data-centric apps</li>
              <li>React 19, TypeScript, Node/Express, MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ItemCard(props: { title: string; subtitle?: string; meta?: string; bullets?: string[]; link?: string }): React.ReactElement {
  return (
    <div className="rounded-2xl glass p-5 hover:shadow transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">{props.title}</h4>
          {props.subtitle ? <p className="text-sm text-zinc-500 dark:text-zinc-400">{props.subtitle}</p> : null}
        </div>
        {props.link ? (
          <a href={props.link} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-1 text-sm hover:underline">
            <LinkIcon size={16}/> View
          </a>
        ) : null}
      </div>
      {props.meta ? <p className="text-xs mt-1 text-zinc-500 dark:text-zinc-400">{props.meta}</p> : null}
      {props.bullets && props.bullets.length > 0 ? (
        <ul className="mt-3 space-y-2 list-disc ms-5 text-sm">
          {props.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : null}
    </div>
  )
}

function Experience(): React.ReactElement {
  return (
    <Section id="experience" icon={<Briefcase size={18}/>} title="Experience" subtitle="Roles, internships, and notable work">
      <div className="grid md:grid-cols-2 gap-4">
        {experience.map((e, i) => (
          <ItemCard key={i} title={e.role} subtitle={e.company} meta={`${e.start} — ${e.end}`} bullets={e.highlights} link={e.link}/>
        ))}
      </div>
    </Section>
  )
}

function Education(): React.ReactElement {
  return (
    <Section id="education" icon={<GraduationCap size={18}/>} title="Education">
      <div className="grid md:grid-cols-2 gap-4">
        {education.map((ed, i) => (
          <ItemCard key={i} title={ed.degree} subtitle={ed.school} meta={`${ed.start} — ${ed.end}`} bullets={ed.details}/>
        ))}
      </div>
    </Section>
  )
}

function Projects(): React.ReactElement {
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState<string>('All');

  type Project = typeof projects[number];
  const stacks = Array.from(new Set(projects.flatMap(p => p.stack)));

  const filtered = projects.filter(p => {
    const matchesStack = active === 'All' || p.stack.includes(active);
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      p.name.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.stack.join(' ').toLowerCase().includes(q) ||
      (p.where ?? '').toLowerCase().includes(q) ||
      (p.when ?? '').toLowerCase().includes(q);
    return matchesStack && matchesQuery;
  });

  // extract last year number in the string; fallback 0
  function yearVal(s?: string): number {
    const m = s?.match(/(20\d{2}|19\d{2})/g);
    return m ? parseInt(m[m.length - 1], 10) : 0;
  }

  const sorted = [...filtered].sort((a, b) => yearVal(b.when) - yearVal(a.when));

  function badgeTone(s: string): string {
    const t = s.toLowerCase();
    if (t.includes('react')) return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300';
    if (t.includes('node') || t.includes('express')) return 'bg-lime-500/10 border-lime-500/30 text-lime-700 dark:text-lime-300';
    if (t.includes('typescript')) return 'bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300';
    if (t.includes('mongo')) return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300';
    if (t.includes('vite')) return 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-700 dark:text-fuchsia-300';
    return 'bg-zinc-500/10 border-zinc-500/30 text-zinc-700 dark:text-zinc-300';
  }

  function ProjectCard({ p }: { p: Project }): React.ReactElement {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const onMove = (e: React.MouseEvent): void => {
      const card = ref.current; if (!card) return;
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const dx = (x / r.width) * 2 - 1, dy = (y / r.height) * 2 - 1;
      const rx = (-dy * 4).toFixed(2), ry = (dx * 4).toFixed(2);
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = (): void => { const card = ref.current; if (card) card.style.transform = ''; };

    return (
      <div className="card-outer" style={{ ['--accent' as any]: p.accent ?? '#60a5fa' }}>
        <div ref={ref} className="project-tilt card-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          {p.image ? <img src={p.image} alt={`${p.name} screenshot`} className="project-thumb" /> : null}

          <div className="mb-2">
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.stack.join(' • ')}</p>

            {(p.where || p.when) ? (
              <div className="mt-1 flex gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                {p.where ? <span className="inline-flex items-center gap-1"><MapPin size={14}/>{p.where}</span> : null}
                {p.when  ? <span className="inline-flex items-center gap-1"><Calendar size={14}/>{p.when}</span> : null}
              </div>
            ) : null}
          </div>

          <p className="text-sm grow">{p.summary}</p>

          <div className="flex gap-2 flex-wrap mt-3">
            {p.stack.map((s, idx) => <span key={idx} className={`badge ${badgeTone(s)}`}>{s}</span>)}
          </div>

          <div className="mt-4 flex gap-2">
            <a href={p.link} target="_blank" rel="noreferrer" className="btn">Code</a>
            {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn">Live demo</a> : null}
          </div>

          <div className="text-xs mt-3">
            {p.highlights.slice(0, 2).map((h, idx) => <div key={idx}>• {h}</div>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Section id="projects" icon={<FolderOpen size={18}/>} title="Projects" subtitle="Selected work — filter by stack or search">
      <div className="rounded-2xl glass p-4 mb-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setActive('All')}
              className={`px-3 py-1.5 text-sm rounded-full border ${active === 'All' ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'glass'}`}>
              All
            </button>
            {stacks.map(s => (
              <button key={s} onClick={() => setActive(s)}
                className={`px-3 py-1.5 text-sm rounded-full border ${active === s ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'glass'}`}
                title={`Filter by ${s}`}>
                {s}
              </button>
            ))}
          </div>
          <input
            value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (name, stack, where, year)…"
            className="w-full md:w-64 rounded-xl glass px-3 py-2 text-sm outline-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </Section>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer id="contact" className="mt-16 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-3 text-sm">
          {profile.email ? <a className="hover:underline" href={`mailto:${profile.email}`}>Email</a> : null}
          {profile.github ? <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a> : null}
        </div>
      </div>
    </footer>
  )
}

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}
