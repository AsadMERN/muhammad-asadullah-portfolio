'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText } from 'lucide-react';

const links = [{ path: '/', label: 'Profile' }, { path: '/about', label: 'About' }, { path: '/education', label: 'Education' }, { path: '/contact', label: 'Contact' }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#061a33]/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Link href="/" className="flex items-center gap-3 font-bold"><FileText className="h-7 w-7 text-[#4cc2ff]" /> Muhammad Asadullah</Link>
      <div className="hidden items-center gap-2 md:flex">{links.map(link => <Link key={link.path} href={link.path} className={`nav-link ${pathname === link.path ? 'active' : ''}`}>{link.label}</Link>)}</div>
      <button aria-label="Toggle navigation" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-[#061a33] px-4 py-3 md:hidden">{links.map(link => <Link key={link.path} href={link.path} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-gray-200 hover:bg-white/10">{link.label}</Link>)}</div>}
  </nav>;
}
