'use client';

import { motion } from 'framer-motion';
import { Braces, CheckCircle2, Code2, GitBranch, Layout, Wrench } from 'lucide-react';

const groups = [
  {
    icon: Code2,
    title: 'Software foundations',
    description: 'Academic and practical foundations for reasoning about software systems.',
    skills: ['Programming concepts', 'Object-oriented thinking', 'Data structures & algorithms', 'Problem decomposition', 'Debugging fundamentals'],
  },
  {
    icon: Layout,
    title: 'Web development',
    description: 'A developing toolkit for responsive, accessible front-end experiences.',
    skills: ['HTML & semantic structure', 'Modern CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Responsive design'],
  },
  {
    icon: Wrench,
    title: 'Tools & delivery',
    description: 'Tools used to move code from a local idea to a published result.',
    skills: ['Git & GitHub', 'npm', 'VS Code', 'GitHub Actions', 'GitHub Pages', 'Production builds'],
  },
];

const workflow = [
  ['01', 'Understand', 'Clarify the problem, audience, constraints, and desired outcome.'],
  ['02', 'Structure', 'Break the work into focused components and manageable steps.'],
  ['03', 'Implement', 'Build with readable code, consistent patterns, and responsive behavior.'],
  ['04', 'Verify', 'Test the result, review edge cases, and improve the experience.'],
];

export default function SkillsPage() {
  return <div className="page-shell"><div className="mx-auto max-w-7xl">
    <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="max-w-3xl"><span className="section-kicker">SKILLS & TOOLKIT</span><h1 className="page-title">A developer in progress.</h1><p className="mt-6 text-lg leading-8 text-gray-300">My Software Engineering degree provides the foundation; hands-on portfolio work is helping me turn that knowledge into practical web development and delivery skills.</p></motion.div>
    <div className="skill-grid mt-14">{groups.map((group,index)=><motion.article key={group.title} initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:index*.08}} className="skill-card"><div className="project-icon"><group.icon/></div><h2>{group.title}</h2><p>{group.description}</p><ul>{group.skills.map(skill=><li key={skill}><CheckCircle2/>{skill}</li>)}</ul></motion.article>)}</div>
    <section className="section-block"><div className="section-heading"><div><span className="section-kicker">ENGINEERING APPROACH</span><h2>A clear workflow from idea to result.</h2></div></div><div className="workflow-grid">{workflow.map(([number,title,description])=><article key={number}><span>{number}</span><GitBranch/><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="growth-panel"><Braces/><div><span className="section-kicker">CURRENT FOCUS</span><h2>Strengthening modern full-stack fundamentals.</h2><p>Current practice centers on TypeScript, React, Next.js, reusable UI components, version control, accessibility, responsive layouts, and automated deployment.</p></div></section>
  </div></div>;
}
