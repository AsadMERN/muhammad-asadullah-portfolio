'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Mail, MapPin, Phone, UserRound } from 'lucide-react';

const education = [
  ['BS Software Engineering', 'Government College University Faisalabad', 'CGPA 3.14'],
  ['FSc Pre-Engineering', 'Iman Public Boys Higher Secondary School, 75/JB Sohal', '883 / 1100'],
  ['Matric — Science (Biology)', 'Iman Public Boys Higher Secondary School, 75/JB Sohal', '939 / 1100'],
];

export default function Home() {
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#0e4a72_0,transparent_38%)] px-4 pb-20 pt-28"><div className="mx-auto max-w-6xl">
    <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
      <div><span className="eyebrow">EUROPASS-STYLE PROFILE</span><h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">Muhammad<br/><span className="text-[#4cc2ff]">Asadullah</span></h1><p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">Software Engineering graduate with a solid academic foundation, an analytical mindset, and a strong interest in building dependable software solutions.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/education" className="primary-button">View Education <ArrowRight className="h-4 w-4" /></Link><Link href="/contact" className="secondary-button">Contact Me</Link></div></div>
      <aside className="profile-card"><div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#4cc2ff]/15"><UserRound className="h-10 w-10 text-[#4cc2ff]" /></div><h2 className="text-2xl font-bold">Personal details</h2><div className="mt-6 space-y-5 text-gray-300"><a href="mailto:muhammadasadullah427@gmail.com" className="detail"><Mail /> <span><small>Email</small>muhammadasadullah427@gmail.com</span></a><a href="tel:+923235965261" className="detail"><Phone /> <span><small>Phone</small>+92 323 5965261</span></a><div className="detail"><MapPin /> <span><small>Address</small>Chak 261 RB Udhowali, Dijkot, Faisalabad</span></div></div></aside>
    </motion.section>
    <section className="mt-20"><div className="flex items-center gap-3"><GraduationCap className="h-7 w-7 text-[#4cc2ff]" /><h2 className="text-3xl font-bold">Education at a glance</h2></div><div className="mt-8 grid gap-5 md:grid-cols-3">{education.map(([degree, school, result]) => <article key={degree} className="info-card"><p className="text-sm font-semibold text-[#4cc2ff]">{result}</p><h3 className="mt-2 text-xl font-bold">{degree}</h3><p className="mt-3 text-sm leading-relaxed text-gray-400">{school}</p></article>)}</div></section>
  </div></div>;
}
