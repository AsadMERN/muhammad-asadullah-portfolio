'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { path: '/', label: 'Profile' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="nav-shell mx-auto max-w-7xl">
        <Link href="/" className="brand-mark" aria-label="Muhammad Asadullah home">
          <span className="brand-monogram">MA</span>
          <span><strong>Muhammad Asadullah</strong><small>Software Engineer</small></span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(link => <Link key={link.path} href={link.path} className={`nav-link ${pathname === link.path ? 'active' : ''}`}>{link.label}</Link>)}
          <Link href="/contact" className="nav-cta">Let&apos;s talk</Link>
        </div>
        <button aria-label="Toggle navigation" aria-expanded={open} className="menu-button md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mobile-menu mx-auto mt-2 max-w-7xl md:hidden">{links.map(link => <Link key={link.path} href={link.path} onClick={() => setOpen(false)} className={pathname === link.path ? 'active' : ''}>{link.label}</Link>)}</div>}
    </header>
  );
}
