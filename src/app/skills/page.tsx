'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Binary,
  Box,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';
import {
  CppLogo,
  CSSLogo,
  GitLogo,
  HTML5Logo,
  JavaScriptLogo,
  MongoDBLogo,
  MySQLLogo,
  NextjsLogo,
  NodeLogo,
  PythonLogo,
  ReactLogo,
  ShadCNLogo,
  SQLLogo,
  TailwindLogo,
  TypeScriptLogo,
  VercelLogo,
  VSCodeLogo,
} from '@/components/TechLogos';

interface TechItem {
  name: string;
  category: 'Frontend & Mobile' | 'Backend & Cloud' | 'Languages' | 'DevOps & Tools';
  level: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const primaryTechStack: TechItem[] = [
  { name: 'TypeScript', category: 'Languages', level: 'Advanced / Strict', icon: TypeScriptLogo, color: '#3178c6' },
  { name: 'Next.js 14', category: 'Frontend & Mobile', level: 'Production / SSR', icon: NextjsLogo, color: '#ffffff' },
  { name: 'React 18', category: 'Frontend & Mobile', level: 'Senior / Hooks', icon: ReactLogo, color: '#61dafb' },
  { name: 'React Native', category: 'Frontend & Mobile', level: 'Mobile Production', icon: Smartphone, color: '#61dafb' },
  { name: 'JavaScript ES6+', category: 'Languages', level: 'Expert Core', icon: JavaScriptLogo, color: '#f7df1e' },
  { name: 'Python', category: 'Languages', level: 'Data & Scripting', icon: PythonLogo, color: '#3776ab' },
  { name: 'C++', category: 'Languages', level: 'Algorithms & Memory', icon: CppLogo, color: '#00599c' },
  { name: 'Tailwind CSS', category: 'Frontend & Mobile', level: 'Modern Styling', icon: TailwindLogo, color: '#38bdf8' },
  { name: 'Node.js', category: 'Backend & Cloud', level: 'REST & Microservices', icon: NodeLogo, color: '#539e43' },
  { name: 'PostgreSQL / SQL', category: 'Backend & Cloud', level: 'Relational Schemas', icon: SQLLogo, color: '#4169e1' },
  { name: 'MySQL', category: 'Backend & Cloud', level: 'Database Design', icon: MySQLLogo, color: '#00758f' },
  { name: 'MongoDB', category: 'Backend & Cloud', level: 'Document Store', icon: MongoDBLogo, color: '#47a248' },
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 'CI/CD & Workflows', icon: GitLogo, color: '#f05032' },
  { name: 'Vercel', category: 'DevOps & Tools', level: 'Edge Deployments', icon: VercelLogo, color: '#ffffff' },
  { name: 'VS Code', category: 'DevOps & Tools', level: 'IDE Engineering', icon: VSCodeLogo, color: '#007acc' },
  { name: 'ShadCN UI', category: 'Frontend & Mobile', level: 'Accessible Design', icon: ShadCNLogo, color: '#ffffff' },
];

const skillCategories = [
  {
    icon: Code2,
    title: 'Core Software Engineering',
    tagline: 'Computer Science & Architecture',
    description: 'Disciplined academic foundation in computational theory, memory modeling, and scalable design patterns.',
    accent: 'cyan',
    skills: [
      { name: 'Data Structures & Algorithms', icon: Binary, detail: 'Trees, Graphs, Sorting & Space/Time Big-O' },
      { name: 'Object-Oriented Design & SOLID', icon: ShieldCheck, detail: 'Maintainable modular patterns & encapsulation' },
      { name: 'Clean Architecture & DDD', icon: Layout, detail: 'Separation of concerns & domain boundaries' },
      { name: 'Defensive Error Handling', icon: Terminal, detail: 'Safe exception recovery & boundary guards' },
    ],
  },
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    tagline: 'Next.js 14, React & TypeScript',
    description: 'Engineering responsive, sub-second web applications with server-side rendering and edge optimizations.',
    accent: 'violet',
    skills: [
      { name: 'Next.js 14 App Router & RSC', icon: NextjsLogo, detail: 'Server components, streaming & route handlers' },
      { name: 'TypeScript Strict Mode', icon: TypeScriptLogo, detail: 'Exhaustive typing, generics & safety' },
      { name: 'React 18 & State Architecture', icon: ReactLogo, detail: 'Custom hooks, suspense & concurrent UI' },
      { name: 'Tailwind CSS & Responsive UI', icon: TailwindLogo, detail: 'Mobile-first layouts & sleek glassmorphism' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Engineering',
    tagline: 'Cross-Platform Android & iOS',
    description: 'Production mobile applications built to withstand high-concurrency traffic and erratic network conditions.',
    accent: 'cyan',
    skills: [
      { name: 'React Native & Android CLI', icon: Smartphone, detail: 'Native device features & optimized bridges' },
      { name: 'HLS Live Video Streaming', icon: Zap, detail: 'Adaptive bitrate playback & custom player UI' },
      { name: 'Real-Time WebSockets & Push', icon: Server, detail: 'Sub-second tournament score broadcasts' },
      { name: 'Offline-First Local Caching', icon: Database, detail: 'Instant app restarts & sync-on-reconnect' },
    ],
  },
  {
    icon: Database,
    title: 'Databases & Cloud Architecture',
    tagline: 'Scalable Data & Edge CDN',
    description: 'Architecting robust data models, real-time database channels, and edge delivery pipelines.',
    accent: 'amber',
    skills: [
      { name: 'Supabase & Realtime Engine', icon: Zap, detail: 'Row-level security, realtime events & auth' },
      { name: 'PostgreSQL & Relational Schemas', icon: SQLLogo, detail: 'Optimized indexes, transactions & foreign keys' },
      { name: 'REST & GraphQL API Engineering', icon: Cloud, detail: 'Payload sanitization, status codes & rate limits' },
      { name: 'Cloudflare & Global CDN Caching', icon: Globe, detail: 'Edge caching & asset delivery optimization' },
    ],
  },
  {
    icon: Wrench,
    title: 'DevOps & Continuous Delivery',
    tagline: 'Automation & Production Stability',
    description: 'Ensuring zero-downtime releases, reproducible build artifacts, and lightning-fast Core Web Vitals.',
    accent: 'violet',
    skills: [
      { name: 'Git & GitHub Collaboration', icon: GitLogo, detail: 'Feature branch workflows & atomic commits' },
      { name: 'GitHub Actions CI/CD Pipelines', icon: Workflow, detail: 'Automated test runners & deploy triggers' },
      { name: 'Production Bundle Optimization', icon: Box, detail: 'Tree shaking, code splitting & dynamic imports' },
      { name: 'Lighthouse 100 & Web Vitals', icon: Sparkles, detail: 'Sub-second LCP, 0 CLS, and accessible DOM' },
    ],
  },
  {
    icon: Layers,
    title: 'System Design & Modern UI/UX',
    tagline: 'Precision & User Retention',
    description: 'Harmonizing high-performance engineering with modern, conversion-focused design aesthetics.',
    accent: 'cyan',
    skills: [
      { name: 'Modern Dark UI & Glassmorphism', icon: Sparkles, detail: 'Radiant mesh backgrounds & visual hierarchy' },
      { name: 'Framer Motion Micro-Interactions', icon: Zap, detail: 'Fluid physics animations & gesture controls' },
      { name: 'WCAG Accessibility Standards', icon: ShieldCheck, detail: 'Semantic HTML, aria attributes & focus states' },
      { name: 'Conversion-Optimized UX Flows', icon: ArrowUpRight, detail: 'High-converting forms, modals & booking UI' },
    ],
  },
];

const workflow = [
  {
    number: '01',
    title: 'Analyze & Deconstruct',
    tag: 'Requirements',
    description: 'Clarify constraints, user stories, data schemas, and edge failure modes before writing code.',
  },
  {
    number: '02',
    title: 'Architect & Model',
    tag: 'System Design',
    description: 'Define type signatures, modular domain boundaries, database relationships, and API contracts.',
  },
  {
    number: '03',
    title: 'Engineer with Rigor',
    tag: 'Implementation',
    description: 'Build with type-safe TypeScript, clean component architecture, and responsive mobile-first styling.',
  },
  {
    number: '04',
    title: 'Validate & Deliver',
    tag: 'Production',
    description: 'Audit Lighthouse metrics, profile render times, test edge cases, and deploy via automated CI/CD.',
  },
];

const filters = ['All Tools', 'Frontend & Mobile', 'Backend & Cloud', 'Languages', 'DevOps & Tools'] as const;

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('All Tools');

  const filteredTech = primaryTechStack.filter(
    (item) => activeFilter === 'All Tools' || item.category === activeFilter
  );

  return (
    <div className="page-shell">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="section-kicker">TECHNICAL ARSENAL</span>
          <h1 className="page-title">Skills & Architecture</h1>
          <p className="mt-5 text-lg leading-8 text-[#9cb1c9]">
            A comprehensive software engineering repertoire honed through formal BS Software Engineering studies at GCUF and battle-tested across 23+ production web and mobile systems.
          </p>
        </motion.div>

        {/* Primary Tech Stack Grid */}
        <section className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Core Technologies</span>
              <h2 className="text-2xl font-bold text-white mt-1">Verified Technical Stack</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeFilter === f
                      ? 'bg-cyan-400 text-black shadow-md shadow-cyan-400/20'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5">
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    layout
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c243d]/80 to-[#041220]/80 p-3.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] p-2.5 text-white border border-white/10 group-hover:border-cyan-400/30 group-hover:scale-105 transition-all">
                      <IconComponent className="h-full w-full" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 truncate">{tech.level}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* Detailed Domain Architecture Cards with Individual Skill Icons */}
        <section className="mt-20">
          <div className="section-heading mb-8">
            <div>
              <span className="section-kicker">ENGINEERING DOMAINS</span>
              <h2>Comprehensive capability breakdown.</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, index) => {
              const MainIcon = cat.icon;
              return (
                <motion.article
                  key={cat.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="profile-card flex flex-col justify-between border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-950/20"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-300 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                          <MainIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {cat.title}
                          </h3>
                          <span className="text-[11px] text-cyan-400/80 font-medium">{cat.tagline}</span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3.5 text-xs leading-relaxed text-[#92a3b8]">
                      {cat.description}
                    </p>

                    {/* Skill List with Individualized Tech Icons */}
                    <div className="mt-5 space-y-2.5">
                      {cat.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-2.5 border border-white/5 hover:border-cyan-400/20 transition-colors"
                          >
                            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                              <SkillIcon className="h-3.5 w-3.5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-200">{skill.name}</p>
                              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{skill.detail}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] text-cyan-300 font-semibold">
                    <span>Production Verified</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Engineering Methodology */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">EXECUTION DISCIPLINE</span>
              <h2>A battle-tested engineering methodology.</h2>
            </div>
          </div>

          <div className="workflow-grid">
            {workflow.map((item) => (
              <article key={item.number} className="relative group hover:border-cyan-400/30 transition-colors">
                <span className="text-cyan-300/60 font-mono text-xs">{item.number}</span>
                <div className="rounded-xl bg-cyan-500/10 p-2.5 text-cyan-300 w-fit border border-cyan-500/20 mb-3">
                  <Workflow className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Focus Banner with Links */}
        <section className="growth-panel mt-16">
          <Braces className="h-10 w-10 text-cyan-400 shrink-0" />
          <div>
            <span className="section-kicker">ACTIVE PRODUCTION FOCUS</span>
            <h2>Next-Gen Real-Time Apps, AI Workflows & High Concurrency</h2>
            <p>
              Applying modern TypeScript, Next.js 14, React Native, Supabase, and AI integrations across scalable architectures designed to handle traffic surges with sub-second response times.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/projects" className="primary-button text-xs !py-2.5 !px-5">
                Explore 23+ Deployed Projects <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/contact" className="secondary-button text-xs !py-2.5 !px-5">
                Discuss a Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
