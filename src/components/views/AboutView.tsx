'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Puzzle,
  Rocket,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const facts = [
  { icon: GraduationCap, title: 'Academic Degree', value: 'BS Software Engineering' },
  { icon: BookOpen, title: 'Academic Standing', value: 'CGPA 3.14 · GCUF' },
  { icon: Code2, title: 'Engineering Focus', value: 'Full-Stack Web & Mobile Apps' },
  { icon: MapPin, title: 'Current Location', value: 'Faisalabad, Pakistan' },
];

export default function AboutView() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">PROFESSIONAL PROFILE</span>
          <h1 className="page-title">About Muhammad Asadullah</h1>

          {/* Profile Card with Photo */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
            <section className="profile-card">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/10">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/40 shadow-xl shadow-cyan-500/10">
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
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Software Engineering Opportunities
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-white">Muhammad Asadullah</h2>
                  <p className="text-sm text-cyan-300 font-medium">Software Engineer · Full-Stack Developer</p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-300">
                I am a Software Engineering graduate from <strong className="text-white">Government College University Faisalabad (GCUF)</strong> with an analytical engineering mindset and hands-on production experience in high-concurrency mobile applications, full-stack Next.js platforms, and real-time cloud architectures.
              </p>

              <p className="mt-4 leading-8 text-gray-300">
                My multidisciplinary academic foundation began with Biology at Matriculation followed by Pre-Engineering at Intermediate level (80.3%), nurturing a deep rigor for scientific inquiry, mathematical decomposition, and logical problem solving.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className="primary-button text-sm !min-h-[2.75rem]">
                  Browse 23+ Projects <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button text-sm !min-h-[2.75rem]"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                  Direct WhatsApp
                </a>
              </div>
            </section>

            <section className="space-y-4">
              {facts.map(({ icon: Icon, title, value }) => (
                <div key={title} className="info-card flex gap-4 items-center">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">{title}</p>
                    <p className="mt-0.5 font-semibold text-white">{value}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </motion.div>

        {/* Strengths Grid */}
        <section className="section-block">
          <div className="section-heading">
            <div>
              <span className="section-kicker">ENGINEERING COMPETENCIES</span>
              <h2>What I bring to teams and technical projects.</h2>
            </div>
            <Link href="/skills">
              View technical toolkit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="about-grid">
            <article>
              <Puzzle className="h-7 w-7 text-cyan-400" />
              <h3>Analytical Problem Solving</h3>
              <p>
                Scientific discipline combined with software engineering methodologies that allow me to tackle convoluted business logic and architect maintainable solutions.
              </p>
            </article>

            <article>
              <MonitorSmartphone className="h-7 w-7 text-cyan-400" />
              <h3>Full-Stack & Mobile Breadth</h3>
              <p>
                Comfortable from sub-second React Native mobile flows to server-side Next.js App Router, edge APIs, database schemas, and microservice integration.
              </p>
            </article>

            <article>
              <UsersRound className="h-7 w-7 text-cyan-400" />
              <h3>Collaborative Delivery</h3>
              <p>
                Proactive communicator who values transparent documentation, thorough code reviews, and structured Git workflows across agile sprints.
              </p>
            </article>

            <article>
              <Rocket className="h-7 w-7 text-cyan-400" />
              <h3>Relentless Learning Velocity</h3>
              <p>
                Rapid mastery of evolving frameworks, AI tools, cloud providers, and architectural best practices to consistently ship production-grade software.
              </p>
            </article>
          </div>
        </section>

        {/* Career Objective */}
        <section className="profile-card mt-16 relative overflow-hidden border-cyan-500/30">
          <span className="section-kicker flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            CAREER AMBITION
          </span>
          <p className="mt-4 text-xl leading-9 text-gray-200">
            To join an ambitious engineering organization or high-growth tech team where I can contribute to mission-critical software, work alongside seasoned engineers, and take technical ownership of high-impact products.
          </p>
        </section>
      </div>
    </div>
  );
}
