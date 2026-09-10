'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, MessageCircle, Send, X } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const links = [
  { path: '/', label: 'Profile' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects (23)' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="nav-shell mx-auto max-w-7xl">
        <Link href="/" className="brand-mark group" aria-label="Muhammad Asadullah home">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-400/40 shadow-md shadow-cyan-500/10 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/asad.jpeg"
              alt="Muhammad Asadullah"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="min-w-0">
            <strong className="truncate group-hover:text-cyan-300 transition-colors">
              Muhammad Asadullah
            </strong>
            <small className="truncate">Software Engineer</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link relative ${isActive ? 'active text-white font-bold' : ''}`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-xl bg-white/10 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link href="/contact" className="nav-cta hover:brightness-110 transition-all shadow-sm">
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="menu-button md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5 text-cyan-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
        </button>
      </nav>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu mx-auto mt-2 max-w-7xl md:hidden overflow-hidden border border-white/10 bg-[#061424]/95 backdrop-blur-2xl p-3 shadow-2xl rounded-2xl"
          >
            <div className="grid gap-1">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-cyan-400 text-black font-bold shadow-md shadow-cyan-400/20'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-black" />}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-cyan-400 py-2.5 text-xs font-bold text-black shadow-sm"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Contact Form</span>
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-400"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
