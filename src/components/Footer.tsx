import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Github, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-[#020912]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-cyan-400/30">
                <Image
                  src="/asad.jpeg"
                  alt="Muhammad Asadullah"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Muhammad Asadullah</h3>
                <p className="text-xs text-cyan-300 font-medium">Software Engineer · Full-Stack Developer</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">Engineering impactful digital solutions.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8ca0b8]">
              Software Engineering graduate from GCUF with production experience spanning 23+ web and mobile platforms. Available for full-time roles and high-impact engineering contracts.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="footer-label">Direct Communication</p>
              <div className="mt-4 space-y-3">
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="h-4 w-4 text-cyan-300 shrink-0" />
                  <span className="text-xs truncate">{contactInfo.email}</span>
                </a>
                <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer" className="!text-emerald-400">
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span className="text-xs">Chat on WhatsApp</span>
                </a>
                <a href={`tel:${contactInfo.phone}`}>
                  <Phone className="h-4 w-4 text-cyan-300 shrink-0" />
                  <span className="text-xs">{contactInfo.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="h-4 w-4 text-cyan-300 shrink-0" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="footer-label">Navigation</p>
              <div className="mt-4 space-y-3 text-xs">
                <Link href="/projects" className="flex items-center justify-between">
                  <span>Projects Showcase (23+)</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/about" className="flex items-center justify-between">
                  <span>About Muhammad</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/education" className="flex items-center justify-between">
                  <span>Academic Qualifications</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/skills" className="flex items-center justify-between">
                  <span>Skills & Architecture</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="flex items-center justify-between">
                  <span>GitHub Profile</span>
                  <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Muhammad Asadullah · All rights reserved.</p>
          <p className="text-gray-400">Engineered with Next.js 14, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
