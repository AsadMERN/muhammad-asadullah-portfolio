'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Workflow,
  Layers,
  Terminal,
  Server,
  Zap,
  ShieldCheck,
  GitBranch,
} from 'lucide-react';
import { capabilities, contactInfo, projects } from '@/data/portfolio';

const education = [
  { result: '3.14', label: 'BS Software Engineering', meta: 'CGPA · GCUF' },
  { result: '80.3%', label: 'FSc Pre-Engineering', meta: '883 / 1100' },
  { result: '85.4%', label: 'Matric Science', meta: '939 / 1100' },
];

export default function HomeView() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="site-canvas">
      <div className="grid-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        {/* Hero Section */}
        <section className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="availability">
              <span />
              {contactInfo.availability}
            </div>

            <h1 className="hero-title mt-7">
              Engineering ideas into<br />
              <span>exceptional software.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a9b8cb] sm:text-xl">
              I&apos;m <strong className="text-white">Muhammad Asadullah</strong>, a Software Engineer with a strong scientific foundation, rigorous analytical problem solving, and production experience across 23+ live web and mobile systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="primary-button">
                Explore 23+ Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="secondary-button">
                <Mail className="h-4 w-4" />
                Let&apos;s Connect
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button !border-emerald-500/30 !text-emerald-300 hover:!bg-emerald-500/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                {contactInfo.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-cyan-300" />
                BS Software Engineering (GCUF)
              </span>
            </div>
          </motion.div>

          {/* Identity Card with Muhammad Asadullah's photo */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="identity-card"
          >
            <div className="identity-top">
              <div className="avatar-orbit">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-cyan-400/40 shadow-xl shadow-cyan-500/20">
                  <Image
                    src="/asad.jpeg"
                    alt="Muhammad Asadullah"
                    fill
                    sizes="80px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <small>PROFESSIONAL ENGINEER PROFILE</small>
                <h2>Muhammad<br />Asadullah</h2>
              </div>
            </div>

            <div className="identity-role">
              <Braces className="h-6 w-6 text-cyan-400" />
              <div>
                <small>Specialization & Track Record</small>
                <strong>Software Engineer · 23+ Deployed Projects</strong>
              </div>
            </div>

            <div className="identity-details">
              <a href={`mailto:${contactInfo.email}`}>
                <Mail />
                <span>
                  <small>Direct Email</small>
                  {contactInfo.email}
                </span>
              </a>
              <a href={`tel:${contactInfo.phone}`}>
                <Phone />
                <span>
                  <small>Direct Phone & WhatsApp</small>
                  {contactInfo.phone}
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Location</small>
                  {contactInfo.location}
                </span>
              </div>
            </div>

            <div className="identity-footer">
              <span>
                <CheckCircle2 /> Verified Academic & Software Engineering Profile
              </span>
              <span>PK · 2026</span>
            </div>
          </motion.aside>
        </section>

        {/* Featured Projects Section */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PRODUCTION HIGHLIGHTS</span>
              <h2>Featured web & mobile architectures.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-cyan-300 hover:underline">
              View all 23 projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`project-detail-card accent-${project.accent} group flex flex-col justify-between`}
              >
                <div>
                  {project.image ? (
                    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182a] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                        {project.kind}
                      </div>
                    </div>
                  ) : (
                    <div className="project-icon mb-5">
                      <Layers className="h-6 w-6 text-cyan-400" />
                    </div>
                  )}

                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-cyan-200">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#91a1b5] line-clamp-3">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  <div className="tag-row mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span>+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-gray-400">
                    {project.category}
                  </span>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white"
                      aria-label={`View ${project.title}`}
                    >
                      Visit Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Developer Bento Grid with Attractive Code Preview & Visuals */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">ENGINEERING DNA</span>
              <h2>Built for precision, scalability, and impact.</h2>
            </div>
            <Link href="/skills">
              Explore toolkit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="developer-bento">
            {/* Wide Card: Re-engineered with Beautiful IDE Terminal Preview & Badges */}
            <article className="dev-card dev-card-wide relative overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-[#0c2a4a]/95 via-[#061a30]/95 to-[#030e1c]/95 shadow-2xl">
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300 border border-cyan-400/20">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-widest text-cyan-400">Core Architecture</span>
                    <h4 className="text-sm font-semibold text-white">Full-Stack System Design</h4>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Production Grade
                </div>
              </div>

              {/* Attractive Code / Terminal Window Filling the Center Void */}
              <div className="my-5 rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs shadow-inner backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-gray-400 font-sans text-[11px] flex items-center gap-1">
                      <Terminal className="h-3 w-3 text-cyan-400" />
                      system.architecture.ts
                    </span>
                  </div>
                  <span className="text-cyan-300 text-[10px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">TypeScript 5</span>
                </div>

                <div className="pt-3 space-y-1 text-gray-300 leading-relaxed text-[11px] sm:text-xs">
                  <p>
                    <span className="text-purple-400">export const</span> <span className="text-cyan-300">productionSystem</span>: <span className="text-amber-300">ArchitectureConfig</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">paradigm</span>: <span className="text-emerald-300">&apos;Clean Architecture · Modular DDD&apos;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">latencyBudget</span>: <span className="text-emerald-300">&apos;sub-second real-time sync&apos;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">resilience</span>: <span className="text-emerald-300">&apos;offline-first caching & fault tolerance&apos;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">availability</span>: <span className="text-cyan-300">0.9999</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">verifiedDeployments</span>: <span className="text-cyan-300">23</span>,
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Bottom Philosophy & Capabilities */}
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#788da6]">Core Philosophy</span>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  Clean Architecture & Maintainable Code.
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#92a3b8]">
                  Grounded in disciplined software engineering, modular component design, clear separation of concerns, and defensive programming to deliver resilient systems that scale.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/20">
                    <CheckCircle2 className="h-3 w-3" /> SOLID Principles
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-violet-400/10 px-2.5 py-1 text-xs font-semibold text-violet-300 border border-violet-400/20">
                    <ShieldCheck className="h-3 w-3" /> Type Safety
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/20">
                    <Zap className="h-3 w-3" /> Sub-Second SLA
                  </span>
                </div>
              </div>
            </article>

            {/* Right Top Card: Agile Delivery with Visual Pipeline */}
            <article className="dev-card relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c243d] to-[#041220]">
              <div className="flex items-center justify-between">
                <Workflow className="h-7 w-7 text-cyan-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  Agile Lifecycle
                </span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#788da6]">How I Deliver</span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  Analyze · Architect · Ship · Refine
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#92a3b8]">
                  Breaking down intricate requirements into sprint milestones, robust test coverage, and continuous deployment.
                </p>
              </div>

              {/* Visual Pipeline Steps */}
              <div className="mt-4 grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                <div className="rounded-lg bg-cyan-500/15 py-1.5 px-1 text-cyan-300 border border-cyan-500/30">
                  01 Analyze
                </div>
                <div className="rounded-lg bg-blue-500/15 py-1.5 px-1 text-blue-300 border border-blue-500/30">
                  02 Architect
                </div>
                <div className="rounded-lg bg-violet-500/15 py-1.5 px-1 text-violet-300 border border-violet-500/30">
                  03 Ship
                </div>
                <div className="rounded-lg bg-emerald-500/15 py-1.5 px-1 text-emerald-300 border border-emerald-500/30">
                  04 Refine
                </div>
              </div>
            </article>

            {/* Right Bottom Card: Modern Tech Stack with Icons Grid */}
            <article className="dev-card relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c243d] to-[#041220]">
              <div className="flex items-center justify-between">
                <Cpu className="h-7 w-7 text-cyan-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Active Stack
                </span>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#788da6]">Production Engine</span>
                <h3 className="mt-1 text-xl font-bold text-white">
                  Next.js 14, React Native, Supabase & AI
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#92a3b8]">
                  Building full-stack web and mobile apps with zero friction, sub-second responses, and intuitive user experiences.
                </p>
              </div>

              {/* Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Next.js 14', 'React Native', 'Supabase', 'TypeScript', 'PostgreSQL', 'Tailwind', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-gray-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Academic Foundation */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">ACADEMIC FOUNDATION</span>
              <h2>Proven track record of discipline and rigor.</h2>
            </div>
            <Link href="/education">
              Full education details <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="education-grid">
            {education.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="metric-card"
              >
                <span>0{index + 1}</span>
                <strong>{item.result}</strong>
                <h3>{item.label}</h3>
                <p>{item.meta}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Capabilities Band */}
        <section className="capability-band">
          <p>Core Technical Capabilities</p>
          <div>
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 p-8 text-center sm:p-14">
          <span className="eyebrow">READY TO COLLABORATE</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Have a project in mind or looking for a dedicated engineer?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            Whether you need a high-performance web app, mobile experience, or full-stack software architecture, let&apos;s build it right.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="primary-button">
              Send a Message <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
