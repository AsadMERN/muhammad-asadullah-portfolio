'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  Terminal,
  ArrowRight,
} from 'lucide-react';

const stats = [
  {
    score: '3.14',
    scale: '/ 4.00',
    title: 'BS Software Engineering',
    institution: 'GCUF Faisalabad',
    color: 'text-cyan-300',
    border: 'border-cyan-500/20',
    bg: 'from-cyan-950/40 to-blue-950/20',
  },
  {
    score: '80.3%',
    scale: '883 / 1100',
    title: 'FSc Pre-Engineering',
    institution: 'First Division',
    color: 'text-violet-300',
    border: 'border-violet-500/20',
    bg: 'from-violet-950/40 to-indigo-950/20',
  },
  {
    score: '85.4%',
    scale: '939 / 1100',
    title: 'Matriculation Science',
    institution: 'Distinction',
    color: 'text-emerald-300',
    border: 'border-emerald-500/20',
    bg: 'from-emerald-950/40 to-teal-950/20',
  },
  {
    score: '4 Years',
    scale: 'Full-Time',
    title: 'Formal CS & Engineering',
    institution: 'Curriculum & Labs',
    color: 'text-amber-300',
    border: 'border-amber-500/20',
    bg: 'from-amber-950/40 to-orange-950/20',
  },
];

const educationStages = [
  {
    number: '01',
    level: 'Undergraduate Degree',
    status: 'Degree Conferred',
    qualification: 'Bachelor of Software Engineering (BS SE)',
    institution: 'Government College University Faisalabad (GCUF)',
    place: 'Faisalabad, Pakistan',
    result: 'CGPA 3.14 / 4.00',
    timeline: '2021 – 2025',
    detail:
      'Rigorous 4-year undergraduate curriculum covering Data Structures & Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Networks, Operating Systems, Web Technologies, and Software Architecture.',
    modules: [
      'Data Structures & Algorithms',
      'Object-Oriented Analysis & Design',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Architecture & Design Patterns',
      'Web Engineering',
      'Software Quality Assurance',
      'Distributed Systems',
      'Artificial Intelligence Fundamentals',
    ],
    highlights: [
      'Comprehensive software engineering coursework & practical labs',
      'Advanced software design patterns and modular system modeling',
      'Capstone project focused on practical modern software deployment',
    ],
  },
  {
    number: '02',
    level: 'Higher Secondary Education',
    status: 'First Division',
    qualification: 'FSc Pre-Engineering',
    institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal',
    place: 'Faisalabad, Pakistan',
    result: '883 / 1100 · 80.3%',
    timeline: 'Completed with First Division',
    detail:
      'Pre-engineering intermediate education emphasizing higher mathematics, physics, and analytical problem decomposition, laying the foundation for engineering disciplines.',
    modules: [
      'Advanced Mathematics & Calculus',
      'Classical Mechanics & Electromagnetism',
      'Analytical Physics',
      'Inorganic & Organic Chemistry',
    ],
    highlights: [
      'Strong quantitative and analytical fundamentals',
      'Top tier academic standing in Pre-Engineering board exams',
      'Excellence in mathematical analysis and scientific logic',
    ],
  },
  {
    number: '03',
    level: 'Secondary School Education',
    status: 'Board Distinction',
    qualification: 'Matriculation Science',
    institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal',
    place: 'Faisalabad, Pakistan',
    result: '939 / 1100 · 85.4%',
    timeline: 'First Division with Distinction',
    detail:
      'Secondary school science certificate with focus on Biology, Chemistry, Physics, and Mathematics, instilling foundational scientific curiosity.',
    modules: [
      'Biology & Life Sciences',
      'Physics Fundamentals',
      'Chemistry',
      'Algebra & Geometry',
    ],
    highlights: [
      '85.4% academic score with distinction',
      'Solid foundation in scientific method and hypothesis testing',
      'Honored for academic excellence and top discipline',
    ],
  },
];

export default function EducationView() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md">
            <GraduationCap className="h-4 w-4" />
            ACADEMIC EXCELLENCE & FOUNDATIONAL RIGOR
          </div>
          <h1 className="page-title mt-4">
            Formal Education &amp; <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Academic Qualifications
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#9cb1c9]">
            A continuous academic progression anchored in software engineering principles, higher mathematics, and empirical scientific reasoning.
          </p>
        </motion.div>

        {/* Top KPI Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.bg} p-4 sm:p-5 backdrop-blur-md transition-all hover:scale-[1.01]`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.score}</span>
                <span className="text-xs font-semibold text-gray-400">{stat.scale}</span>
              </div>
              <p className="mt-2 text-xs font-bold text-white leading-tight">{stat.title}</p>
              <span className="text-[11px] text-gray-400 block mt-0.5">{stat.institution}</span>
            </div>
          ))}
        </motion.div>

        {/* Timeline Progression Rail */}
        <div className="mt-16 space-y-8 relative">
          {/* Vertical Glowing Connector Line (Desktop) */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-400 to-emerald-400 opacity-20" />

          {educationStages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c243d]/80 via-[#06182c]/80 to-[#030d18]/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-cyan-400/40"
            >
              <div className="grid gap-6 lg:grid-cols-[240px_1fr] items-start">
                {/* Left Column: Milestone ID, Status & Results */}
                <div className="border-b border-white/10 pb-5 lg:border-b-0 lg:pb-0 lg:border-r lg:border-white/10 lg:pr-6">
                  <div className="flex items-center justify-between lg:justify-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 font-mono text-sm font-black text-cyan-300 border border-cyan-400/20">
                      {stage.number}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
                      {stage.status}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {stage.level}
                  </p>

                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-bold text-cyan-200">
                    <Award className="h-4 w-4 text-cyan-300" />
                    <span>{stage.result}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-gray-400">
                    <Calendar className="h-3.5 w-3.5 text-gray-400" />
                    <span>{stage.timeline}</span>
                  </div>
                </div>

                {/* Right Column: Qualification, Institution, Detail & Coursework */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {stage.qualification}
                  </h2>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <School className="h-4 w-4 shrink-0" />
                      {stage.institution}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                      {stage.place}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#9cb1c9]">
                    {stage.detail}
                  </p>

                  {/* Core Curriculum Modules */}
                  <div className="mt-5 border-t border-white/5 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                      Core Curriculum &amp; Engineering Modules
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.modules.map((mod) => (
                        <span
                          key={mod}
                          className="rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 border-t border-white/5 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Academic Highlights &amp; Accomplishments
                    </p>
                    <ul className="space-y-1.5">
                      {stage.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-snug">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Institutional Verification Note */}
        <section className="mt-16 rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-[#0a223a]/90 to-[#041220]/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 border border-cyan-400/20 shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Official Degree &amp; Academic Transcripts
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-300 max-w-xl">
                Degrees, verified transcripts, and academic references from Government College University Faisalabad are available upon request for formal employment and enterprise client verification.
              </p>
            </div>
          </div>

          <Link href="/contact" className="primary-button text-xs !py-3 !px-5 whitespace-nowrap self-stretch sm:self-auto text-center">
            Request Credentials <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
