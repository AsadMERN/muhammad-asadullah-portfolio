'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const serviceOptions = [
  'Full-Stack Web App',
  'Mobile App (React Native)',
  'Frontend / UI/UX Engineering',
  'API & System Architecture',
  'Technical Consultation',
  'Other Inquiry',
];

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0],
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters)';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share some details (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: serviceOptions[0],
        subject: '',
        message: '',
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit form. Please use direct email or WhatsApp.');
    }
  };

  return (
    <div className="page-shell">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="page-title">Let&apos;s build together.</h1>
          <p className="mt-4 max-w-2xl text-lg text-[#9cb1c9]">
            Have a project, role, or technical inquiry? Reach out via the form below or through direct instant channels.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.35fr]">
          {/* Left Column: Profile Card & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Persona Quick Card */}
            <div className="profile-card border-cyan-500/20 bg-gradient-to-br from-[#0c2a45] to-[#041220]">
              <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/10">
                  <Image
                    src="/asad.jpeg"
                    alt="Muhammad Asadullah"
                    fill
                    sizes="64px"
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Muhammad Asadullah</h2>
                  <p className="text-xs font-semibold text-cyan-300">Software Engineer · Full-Stack</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for projects & roles
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="mt-5 space-y-3">
                {/* Email with Copy */}
                <div className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3 hover:border-cyan-500/30 transition-colors">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-sm text-gray-200 hover:text-cyan-300 transition-colors"
                  >
                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Email</p>
                      <span className="text-xs sm:text-sm font-medium">{contactInfo.email}</span>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3 hover:bg-emerald-500/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">WhatsApp (Fastest)</p>
                      <span className="text-xs sm:text-sm font-semibold text-emerald-100">{contactInfo.phone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    Chat <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 hover:border-cyan-500/30 transition-colors text-sm text-gray-200"
                >
                  <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Direct Line</p>
                    <span className="text-xs sm:text-sm font-medium">{contactInfo.phone}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-sm text-gray-200">
                  <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Location</p>
                    <span className="text-xs sm:text-sm font-medium">{contactInfo.location} · PKT (UTC+5)</span>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3 hover:border-cyan-500/30 transition-colors text-sm text-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white/10 p-2 text-white">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">GitHub Repositories</p>
                      <span className="text-xs sm:text-sm font-medium">github.com/mianasad427</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/[0.02] p-3 text-xs text-gray-400 border border-white/5">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Typical response time: under 24 hours. For same-day response, message via WhatsApp.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Perfect Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="profile-card relative border-cyan-500/30 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                <p className="text-xs text-gray-400 mt-1">Directly received and delivered to my personal inbox.</p>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="mt-2 text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your inquiry has been dispatched directly to Muhammad Asadullah. You will receive a response shortly.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setStatus('idle')}
                      className="primary-button text-xs !py-2.5 !px-5"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button text-xs !py-2.5 !px-5"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-400" />
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form key="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-200">
                      <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500/70 focus:ring-2 focus:ring-rose-500/30'
                            : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/70 focus:ring-2 focus:ring-rose-500/30'
                            : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Service / Project Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      What can I help you with?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, service: opt })}
                          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                            formData.service === opt
                              ? 'bg-cyan-400 text-black shadow-md shadow-cyan-400/20'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Subject / Project Scope (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next.js Web App development or Engineering role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                        Detailed Message <span className="text-cyan-400">*</span>
                      </label>
                      <span className="text-[11px] text-gray-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project, goals, timeline, or requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-y ${
                        errors.message
                          ? 'border-rose-500/70 focus:ring-2 focus:ring-rose-500/30'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="primary-button w-full justify-center !py-3.5 !text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/10"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>Dispatching message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
