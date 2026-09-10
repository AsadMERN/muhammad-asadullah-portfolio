'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, FlaskConical, Layers3 } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl"><span className="section-kicker">PROJECTS & PRACTICE</span><h1 className="page-title">Learning by building.</h1><p className="mt-6 text-lg leading-8 text-gray-300">A transparent collection of live work and practice concepts exploring useful software, clear interfaces, and dependable implementation.</p></motion.div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">{projects.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .1 }} className={`project-detail-card accent-${project.accent}`}>
          <div className="project-meta"><span>{project.number}</span><span>{project.status}</span></div><div className="project-icon">{project.kind === 'Live project' ? <Layers3/> : <FlaskConical/>}</div><p className="mt-7 text-sm font-semibold uppercase tracking-[.14em] text-gray-400">{project.kind}</p><h2 className="mt-3 text-2xl font-bold">{project.title}</h2><p className="mt-4 leading-7 text-gray-400">{project.description}</p><div className="tag-row mt-6">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="mt-7 border-t border-white/10 pt-6"><p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-gray-500">Key outcomes</p><ul className="space-y-3">{project.outcomes.map(outcome => <li key={outcome}><CheckCircle2/>{outcome}</li>)}</ul></div>{project.href && <a href={project.href} target="_blank" rel="noreferrer" className="project-link">View source on GitHub <ArrowUpRight/></a>}
        </motion.article>)}</div>
        <div className="concept-note"><FlaskConical/><div><strong>Practice concepts are clearly labelled.</strong><p>They describe planned portfolio exercises, not completed client work or employment experience.</p></div></div>
      </div>
    </div>
  );
}
