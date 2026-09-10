'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  UsersRound,
  Zap,
} from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const keyStats = [
  { value: '23+', label: 'Production Platforms Deployed', sub: 'Mobile, Web & SaaS' },
  { value: '3.14', label: 'BS Software Engineering', sub: 'GCUF Faisalabad' },
  { value: '< 1s', label: 'Real-Time Sync Latency', sub: 'Sub-second API SLA' },
  { value: '100%', label: 'Strict TypeScript Discipline', sub: 'Clean Architecture' },
];

const corePrinciples = [
  {
    icon: Code2,
    title: 'Clean Architecture & SOLID',
    detail:
      'Decoupled system architecture, modular domain boundaries, and defensive design patterns that ensure systems scale smoothly without regression.',
  },
  {
    icon: Zap,
    title: 'High-Concurrency & Low Latency',
    detail:
      'Engineering for peak load spikes during global events, utilizing intelligent edge caching, WebSocket feeds, and optimized native mobile bridges.',
  },
  {
    icon: ShieldCheck,
    title: 'Defensive Typing & Resilience',
    detail:
      'Strict TypeScript type systems, boundary guards, and exhaustive error handling that prevent edge failures before they reach production.',
  },
  {
    icon: Rocket,
    title: 'Rapid Engineering Velocity',
    detail:
      'Transforming complex technical requirements into deployable production releases with CI/CD automation, clean Git workflows, and comprehensive testing.',
  },
];

export default function AboutView() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            PROFESSIONAL ENGINEER PROFILE
          </div>
          <h1 className="page-title mt-4">
            About <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Muhammad Asadullah
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#9cb1c9]">
            Software Engineering graduate from GCUF with a background in formal scientific problem solving and a proven track record delivering 23+ live production systems.
          </p>
        </motion.div>

        {/* Profile Card & Quick Info Bento */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr] items-start">
          {/* Main Profile Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c243d]/90 via-[#06182c]/90 to-[#030d18]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/10">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/asad.jpeg"
                  alt="Muhammad Asadullah"
                  fill
                  sizes="112px"
                  priority
                  className="object-cover"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Engineering Roles &amp; Contracts
                </div>
                <h2 className="mt-2 text-2xl font-black text-white">Muhammad Asadullah</h2>
                <p className="text-sm font-semibold text-cyan-300">
                  Software Engineer · Full-Stack &amp; Mobile Architect
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  {contactInfo.location}
                </p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-[#9cb1c9]">
              <p>
                I am a Software Engineer who bridges theoretical computational fundamentals with hands-on production velocity. My formal training at <strong className="text-white">Government College University Faisalabad (GCUF)</strong> provided me with deep roots in data structures, algorithms, modular object-oriented software engineering, and distributed architectures.
              </p>
              <p>
                Before software engineering, I built a disciplined analytical mindset through <strong className="text-cyan-200">FSc Pre-Engineering (80.3% First Division)</strong> and <strong className="text-cyan-200">Matriculation Science (85.4% Distinction)</strong>, giving me a rare balance of higher mathematics, physical logic, and software abstractions.
              </p>
              <p>
                Across 23+ production deployments, I have engineered real-time sports broadcasting apps with sub-second WebSocket updates (<Link href="/projects" className="text-cyan-300 underline font-semibold">Yacine Shoot</Link>), custom HLS video streaming players (<Link href="/projects" className="text-cyan-300 underline font-semibold">YPRO Viewer</Link>), and decoupled modern marketplaces (<Link href="/projects" className="text-cyan-300 underline font-semibold">BarkoPets</Link>).
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <Link href="/projects" className="primary-button text-xs !py-3 !px-5">
                Explore 23+ Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button text-xs !py-3 !px-5"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="secondary-button text-xs !py-3 !px-5">
                <Mail className="h-4 w-4" />
                Send Inquiry
              </Link>
            </div>
          </motion.section>

          {/* Right Column: Quick Facts & Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c243d]/70 to-[#041220]/70 p-5 backdrop-blur-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Core Credentials
              </span>
              <div className="mt-4 space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-400/10 text-cyan-300 shrink-0">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium">Degree &amp; Alma Mater</p>
                    <p className="font-bold text-white">BS Software Engineering · GCUF</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-violet-400/10 text-violet-300 shrink-0">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium">Academic Results</p>
                    <p className="font-bold text-white">CGPA 3.14 · FSc 80.3% · Matric 85.4%</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-400/10 text-emerald-300 shrink-0">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium">Primary Technical Focus</p>
                    <p className="font-bold text-white">Next.js 14, React Native, Supabase</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/10 text-amber-300 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium">Direct Contact</p>
                    <p className="font-bold text-white">{contactInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Callout Card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#07241d]/70 to-[#03100c]/70 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Recruitment Status
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-300">
                Immediately available for full-time Software Engineer positions, remote technical teams, and high-impact contract roles globally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* High-Impact Statistics Grid */}
        <section className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c243d]/70 to-[#041220]/70 p-5 backdrop-blur-md"
            >
              <span className="text-2xl sm:text-3xl font-black text-cyan-300">{stat.value}</span>
              <p className="mt-2 text-xs font-bold text-white">{stat.label}</p>
              <span className="text-[11px] text-gray-400">{stat.sub}</span>
            </div>
          ))}
        </section>

        {/* Engineering Philosophy & Core Principles */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Architecture Mindset
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-white">
                How I Approach Software Engineering
              </h2>
            </div>
            <Link
              href="/skills"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white"
            >
              <span>Explore Technical Arsenal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c243d]/80 to-[#041220]/80 p-5 backdrop-blur-md hover:border-cyan-400/40 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-300 w-fit border border-cyan-400/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#9cb1c9]">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Career Ambition Callout */}
        <section className="mt-16 rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-[#0c243d] via-[#071a2e] to-[#030e1c] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">CAREER AMBITION</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white">
              Ready to create substantial technical value.
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-300">
              Seeking to join an ambitious engineering organization or high-velocity team where I can take architectural ownership, contribute to mission-critical codebases, and deliver lasting impact.
            </p>
          </div>

          <Link href="/contact" className="primary-button text-xs !py-3 !px-6 shrink-0 shadow-lg shadow-cyan-400/20">
            Let&apos;s Build Together <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
