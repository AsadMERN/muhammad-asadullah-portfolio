'use client';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const items = [
  { level: 'Bachelor', qualification: 'Bachelor of Software Engineering', institution: 'Government College University Faisalabad', place: 'Faisalabad, Pakistan', result: 'CGPA 3.14', detail: 'Undergraduate study in software engineering.' },
  { level: 'Intermediate', qualification: 'FSc Pre-Engineering', institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal', place: 'Faisalabad, Pakistan', result: '883 / 1100', detail: 'Pre-engineering studies with a strong mathematical and scientific foundation.' },
  { level: 'Matriculation', qualification: 'Science (Biology)', institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal', place: 'Faisalabad, Pakistan', result: '939 / 1100', detail: 'Secondary school education in the science group with Biology.' },
];

export default function Education() {
  return <div className="page-shell"><div className="mx-auto max-w-5xl"><span className="eyebrow">EDUCATION AND TRAINING</span><h1 className="page-title">Academic background</h1><div className="mt-10 space-y-6">{items.map((item, index) => <motion.article key={item.level} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .1 }} className="profile-card grid gap-6 md:grid-cols-[180px_1fr]"><div><p className="text-sm font-semibold uppercase tracking-wider text-[#4cc2ff]">{item.level}</p><div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm"><Award className="h-4 w-4"/>{item.result}</div></div><div><h2 className="text-2xl font-bold">{item.qualification}</h2><p className="mt-3 flex items-start gap-2 text-gray-300"><GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#4cc2ff]"/>{item.institution}</p><p className="mt-2 flex items-center gap-2 text-sm text-gray-400"><MapPin className="h-4 w-4"/>{item.place}</p><p className="mt-4 text-gray-400">{item.detail}</p></div></motion.article>)}</div></div></div>;
}
