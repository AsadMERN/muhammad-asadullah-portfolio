'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'muhammadasadullah427@gmail.com', href: 'mailto:muhammadasadullah427@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+92 323 5965261', href: 'tel:+923235965261' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+92 323 5965261', href: 'https://wa.me/923235965261' },
  { icon: MapPin, label: 'Address', value: 'Chak 261 RB Udhowali, Dijkot, Faisalabad', href: undefined },
];

export default function Contact() {
  return <div className="page-shell"><div className="mx-auto max-w-5xl"><span className="eyebrow">CONTACT</span><h1 className="page-title">Let’s connect</h1><p className="mt-5 max-w-2xl text-lg text-gray-300">For professional opportunities, collaboration, or further information, contact me directly.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{contacts.map(({ icon: Icon, label, value, href }) => { const content = <><Icon className="h-7 w-7 shrink-0 text-[#4cc2ff]"/><span><small>{label}</small><strong className="block break-words">{value}</strong></span></>; return href ? <motion.a whileHover={{ y: -3 }} key={label} href={href} target={label === 'WhatsApp' ? '_blank' : undefined} rel="noreferrer" className="profile-card flex items-center gap-5">{content}</motion.a> : <div key={label} className="profile-card flex items-center gap-5">{content}</div>; })}</div><div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm text-amber-100"><strong>Privacy:</strong> National identity information is intentionally not displayed on this public portfolio.</div></div></div>;
}
