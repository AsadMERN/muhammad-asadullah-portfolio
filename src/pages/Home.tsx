'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Braces, CheckCircle2, Code2, GraduationCap, Lightbulb, Mail, MapPin, Phone, Workflow } from 'lucide-react';
import { capabilities, projects } from '@/data/portfolio';

const education = [
  { result: '3.14', label: 'BS Software Engineering', meta: 'CGPA · GCUF' },
  { result: '80.3%', label: 'FSc Pre-Engineering', meta: '883 / 1100' },
  { result: '85.4%', label: 'Matric Science', meta: '939 / 1100 · Biology' },
];

export default function Home() {
  return (
    <div className="site-canvas">
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="grid-overlay"/>
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <section className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="availability"><span/>Available for opportunities</div>
            <h1 className="hero-title mt-7">I turn ideas into<br/><span>thoughtful software.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a9b8cb] sm:text-xl">I&apos;m <strong className="text-white">Muhammad Asadullah</strong>, a Software Engineering graduate with a scientific foundation, an analytical mindset, and a growing focus on modern web experiences.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="primary-button">Explore projects <ArrowRight /></Link><a href="mailto:muhammadasadullah427@gmail.com" className="secondary-button"><Mail />Email me</a></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-400"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300"/>Faisalabad, Pakistan</span><span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-cyan-300"/>BS Software Engineering</span></div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="identity-card">
            <div className="identity-top"><div className="avatar-orbit"><span>MA</span></div><div><small>EUROPASS-STYLE PROFILE</small><h2>Muhammad<br/>Asadullah</h2></div></div>
            <div className="identity-role"><Braces/><div><small>Current direction</small><strong>Software Engineering</strong></div></div>
            <div className="identity-details"><a href="mailto:muhammadasadullah427@gmail.com"><Mail/><span><small>Email</small>muhammadasadullah427@gmail.com</span></a><a href="tel:+923235965261"><Phone/><span><small>Phone</small>+92 323 5965261</span></a><div><MapPin/><span><small>Location</small>Chak 261 RB Udhowali, Dijkot</span></div></div>
            <div className="identity-footer"><span><CheckCircle2/>Verified academic profile</span><span>PK · 2026</span></div>
          </motion.aside>
        </section>

        <section className="section-block"><div className="section-heading"><div><span className="section-kicker">DEVELOPER PROFILE</span><h2>A practical foundation for building well.</h2></div><Link href="/skills">Explore my toolkit <ArrowUpRight/></Link></div><div className="developer-bento">
          <article className="dev-card dev-card-wide"><Code2/><div><span>Engineering foundation</span><h3>From problem to maintainable solution.</h3><p>Grounded in software engineering principles, structured problem-solving, readable code, and responsive interface development.</p></div></article>
          <article className="dev-card"><Workflow/><div><span>How I work</span><h3>Plan · Build · Test · Improve</h3><p>I break complex work into clear steps and iterate with feedback.</p></div></article>
          <article className="dev-card"><Lightbulb/><div><span>Growth mindset</span><h3>Curious by default.</h3><p>Actively strengthening modern JavaScript, TypeScript, React, Next.js, Git, and deployment skills.</p></div></article>
        </div></section>

        <section className="section-block"><div className="section-heading"><div><span className="section-kicker">ACADEMIC FOUNDATION</span><h2>Built on consistent progress.</h2></div><Link href="/education">Full education <ArrowUpRight/></Link></div><div className="education-grid">{education.map((item, index) => <motion.article key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="metric-card"><span>0{index + 1}</span><strong>{item.result}</strong><h3>{item.label}</h3><p>{item.meta}</p></motion.article>)}</div></section>

        <section className="section-block"><div className="section-heading"><div><span className="section-kicker">SELECTED WORK</span><h2>Projects shaped around real needs.</h2></div><Link href="/projects">View all projects <ArrowUpRight/></Link></div><div className="project-grid">{projects.slice(0, 2).map((project, index) => <motion.article key={project.title} whileHover={{ y: -6 }} className={`project-card accent-${project.accent}`}><div className="project-meta"><span>{project.number}</span><span>{project.kind}</span></div><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight/></a> : <Link href="/projects"><ArrowRight/></Link>}</motion.article>)}</div></section>

        <section className="capability-band"><p>Developing capabilities</p><div>{capabilities.map(capability => <span key={capability}>{capability}</span>)}</div></section>
      </div>
    </div>
  );
}
