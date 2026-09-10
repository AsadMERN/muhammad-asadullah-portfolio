import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div><div className="brand-monogram mb-5">MA</div><h2 className="text-2xl font-bold">Open to meaningful opportunities.</h2><p className="mt-3 max-w-md text-gray-400">Software Engineering graduate based in Faisalabad, ready to learn, collaborate, and contribute.</p></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div><p className="footer-label">Contact</p><div className="mt-4 space-y-3"><a href="mailto:muhammadasadullah427@gmail.com"><Mail />Email me</a><a href="tel:+923235965261"><Phone />+92 323 5965261</a><p><MapPin />Faisalabad, Pakistan</p></div></div>
            <div><p className="footer-label">Explore</p><div className="mt-4 space-y-3"><Link href="/education">Education <ArrowUpRight /></Link><Link href="/projects">Practice projects <ArrowUpRight /></Link><a href="https://github.com/mianasad427/muhammad-asadullah-portfolio" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a></div></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Muhammad Asadullah</p><p>Designed and built with care in Faisalabad.</p></div>
      </div>
    </footer>
  );
}
