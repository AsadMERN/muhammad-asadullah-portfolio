'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, GraduationCap, MapPin, MonitorSmartphone, Puzzle, Rocket, UsersRound } from 'lucide-react';

const facts = [
  { icon: GraduationCap, title: 'Qualification', value: 'Bachelor of Software Engineering' },
  { icon: BookOpen, title: 'Academic standing', value: 'CGPA 3.14' },
  { icon: Code2, title: 'Professional direction', value: 'Software Engineering' },
  { icon: MapPin, title: 'Based in', value: 'Faisalabad, Pakistan' },
];

export default function About() {
  return <div className="page-shell"><div className="mx-auto max-w-5xl">
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}><span className="eyebrow">PERSONAL PROFILE</span><h1 className="page-title">About Muhammad</h1><div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
      <section className="profile-card"><h2 className="text-2xl font-bold">Profile</h2><p className="mt-5 leading-8 text-gray-300">I am a Software Engineering graduate from Government College University Faisalabad. My studies have strengthened my problem-solving, logical thinking, and understanding of software development. I am motivated to continue learning, contribute to professional teams, and apply my academic foundation to practical technology projects.</p><p className="mt-4 leading-8 text-gray-300">My earlier education combined Biology at matriculation level with Pre-Engineering at intermediate level, giving me a broad scientific and analytical base.</p></section>
      <section className="space-y-4">{facts.map(({ icon: Icon, title, value }) => <div key={title} className="info-card flex gap-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-[#4cc2ff]"/><div><p className="text-xs uppercase tracking-wider text-gray-500">{title}</p><p className="mt-1 font-semibold">{value}</p></div></div>)}</section>
    </div></motion.div>
    <section className="section-block"><div className="section-heading"><div><span className="section-kicker">DEVELOPER DIRECTION</span><h2>What I bring to a development team.</h2></div><Link href="/skills">View technical skills <ArrowRight/></Link></div><div className="about-grid">
      <article><Puzzle/><h3>Analytical problem-solving</h3><p>A scientific and engineering background that supports structured reasoning and careful problem decomposition.</p></article>
      <article><MonitorSmartphone/><h3>User-focused interfaces</h3><p>An interest in responsive experiences that remain clear, accessible, and useful across screen sizes.</p></article>
      <article><UsersRound/><h3>Collaborative mindset</h3><p>Ready to receive feedback, communicate progress, document decisions, and grow within a professional team.</p></article>
      <article><Rocket/><h3>Continuous improvement</h3><p>Motivated to strengthen practical development skills through focused projects, testing, and iteration.</p></article>
    </div></section>
    <section className="profile-card mt-16"><span className="section-kicker">CAREER OBJECTIVE</span><p className="mt-4 text-xl leading-9 text-gray-200">To begin and grow a software engineering career where I can apply my academic knowledge, contribute to useful products, learn from experienced developers, and steadily take ownership of larger technical challenges.</p></section>
  </div></div>;
}
