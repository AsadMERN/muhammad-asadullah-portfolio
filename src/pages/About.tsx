'use client';
import { motion } from 'framer-motion';
import { BookOpen, Code2, GraduationCap, MapPin } from 'lucide-react';

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
  </div></div>;
}
