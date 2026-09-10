'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, CheckCircle2, GraduationCap, MapPin } from 'lucide-react';

const items = [
  {
    level: 'Bachelor Degree',
    qualification: 'Bachelor of Software Engineering (BS SE)',
    institution: 'Government College University Faisalabad (GCUF)',
    place: 'Faisalabad, Pakistan',
    result: 'CGPA 3.14 / 4.00',
    timeline: '2021 – 2025',
    detail:
      'Rigorous 4-year undergraduate curriculum covering Data Structures & Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Networks, Operating Systems, Web Technologies, and Software Architecture.',
    highlights: [
      'Comprehensive software engineering coursework & practical labs',
      'Advanced software design patterns and modular system modeling',
      'Capstone project focused on practical modern software deployment',
    ],
  },
  {
    level: 'Intermediate',
    qualification: 'FSc Pre-Engineering',
    institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal',
    place: 'Faisalabad, Pakistan',
    result: '883 / 1100 · 80.3%',
    timeline: 'Completed with First Division',
    detail:
      'Pre-engineering intermediate education emphasizing higher mathematics, physics, and analytical problem decomposition, laying the foundation for engineering disciplines.',
    highlights: [
      'Strong quantitative and analytical fundamentals',
      'Top tier academic standing in Pre-Engineering board exams',
    ],
  },
  {
    level: 'Secondary School',
    qualification: 'Matriculation Science',
    institution: 'Iman Public Boys Higher Secondary School, 75/JB Sohal',
    place: 'Faisalabad, Pakistan',
    result: '939 / 1100 · 85.4%',
    timeline: 'First Division with Distinction',
    detail:
      'Secondary school science certificate with focus on Biology, Chemistry, Physics, and Mathematics, instilling foundational scientific curiosity.',
    highlights: [
      '85.4% academic score with distinction',
      'Solid foundation in scientific method and hypothesis testing',
    ],
  },
];

export default function EducationView() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">ACADEMIC EXCELLENCE</span>
          <h1 className="page-title">Education & Qualifications</h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-300">
            A consistent academic progression rooted in scientific rigor, mathematical reasoning, and formal software engineering principles.
          </p>

          <div className="mt-12 space-y-8">
            {items.map((item, index) => (
              <motion.article
                key={item.level}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="profile-card grid gap-6 md:grid-cols-[220px_1fr] border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#4cc2ff]">
                    {item.level}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-semibold text-cyan-200">
                    <Award className="h-4 w-4 text-cyan-300" />
                    {item.result}
                  </div>
                  {item.timeline && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.timeline}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">{item.qualification}</h2>
                  <p className="mt-2 flex items-start gap-2 text-gray-300 font-medium">
                    <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[#4cc2ff]" />
                    {item.institution}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {item.place}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{item.detail}</p>

                  <div className="mt-5 border-t border-white/5 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Key Competencies
                    </p>
                    <ul className="space-y-1.5">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
