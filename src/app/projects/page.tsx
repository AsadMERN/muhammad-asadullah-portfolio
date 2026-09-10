'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  Flame,
  Globe,
  Grid,
  Info,
  Layers,
  List,
  Maximize2,
  Search,
  Server,
  Share2,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Tag,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { projects, ProjectItem } from '@/data/portfolio';
import {
  AndroidLogo,
  AWSLogo,
  CppLogo,
  CSSLogo,
  DockerLogo,
  GitLogo,
  HTML5Logo,
  JavaScriptLogo,
  MongoDBLogo,
  MySQLLogo,
  NextjsLogo,
  NodeLogo,
  PythonLogo,
  ReactLogo,
  ShadCNLogo,
  SQLLogo,
  SupabaseLogo,
  TailwindLogo,
  TypeScriptLogo,
  VercelLogo,
  VSCodeLogo,
  WordPressLogo,
} from '@/components/TechLogos';

const categories = [
  { id: 'All', label: 'All Systems', icon: Layers },
  { id: 'Mobile Apps', label: 'Mobile Apps', icon: Smartphone },
  { id: 'SaaS & AI Platforms', label: 'SaaS & AI', icon: Cpu },
  { id: 'Web Applications & Commerce', label: 'Web & Commerce', icon: Globe },
  { id: 'Brand & Corporate Websites', label: 'Corporate & Brand', icon: Server },
] as const;

type CategoryId = typeof categories[number]['id'];

const popularTechFilters = [
  'Next.js',
  'React Native',
  'TypeScript',
  'Supabase',
  'Android',
  'Python',
  'PostgreSQL',
  'Tailwind',
  'WordPress',
];

// Helper to match tags to genuine brand SVG logos
function getTechLogo(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes('next')) return NextjsLogo;
  if (t.includes('react native') || t === 'react' || t.includes('react')) return ReactLogo;
  if (t.includes('type')) return TypeScriptLogo;
  if (t.includes('supa')) return SupabaseLogo;
  if (t.includes('android')) return AndroidLogo;
  if (t.includes('python')) return PythonLogo;
  if (t.includes('node')) return NodeLogo;
  if (t.includes('postgres') || t.includes('sql') || t.includes('mysql')) return MySQLLogo;
  if (t.includes('tailwind')) return TailwindLogo;
  if (t.includes('wordpress')) return WordPressLogo;
  if (t.includes('aws')) return AWSLogo;
  if (t.includes('docker')) return DockerLogo;
  if (t.includes('git')) return GitLogo;
  if (t.includes('vercel')) return VercelLogo;
  if (t.includes('c++') || t.includes('cpp')) return CppLogo;
  if (t.includes('javascript') || t.includes('es6')) return JavaScriptLogo;
  if (t.includes('mongo')) return MongoDBLogo;
  return null;
}

// 3 Premier Showcase Systems for the Spotlight Carousel
const spotlightProjects = [
  {
    ...projects[0], // Yacine Shoot
    spotlightBadge: 'FEATURED MOBILE STREAMING',
    deviceType: 'mobile',
    domainUrl: 'yacineshoot.app/live',
  },
  {
    ...projects[1], // YPRO Viewer
    spotlightBadge: 'HLS STREAMING ENGINE',
    deviceType: 'mobile',
    domainUrl: 'yproviewer.app/stream',
  },
  {
    ...projects[2], // BarkoPets
    spotlightBadge: 'DECOUPLED E-COMMERCE & SAAS',
    deviceType: 'desktop',
    domainUrl: 'barkopets.com/ecosystem',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'title'>('default');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Handle toast dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
        setCopiedSlug(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleCopyLink = (project: ProjectItem) => {
    const url = project.href || `${window.location.origin}/projects#${project.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(project.slug);
    setToastMessage(`Copied link for ${project.title}!`);
  };

  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (project.metrics && project.metrics.toLowerCase().includes(q)) ||
        project.outcomes.some((outcome) => outcome.toLowerCase().includes(q));

      const matchesTech =
        !selectedTech ||
        project.tags.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()));

      return matchesCategory && matchesSearch && matchesTech;
    });

    if (sortBy === 'title') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [activeCategory, searchQuery, selectedTech, sortBy]);

  const activeSpotlight = spotlightProjects[spotlightIndex];

  return (
    <div className="page-shell">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-6 z-50 flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-[#071d33]/95 px-5 py-3.5 text-xs font-semibold text-cyan-200 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-black">
              <Check className="h-3 w-3 stroke-[3]" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl">
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            PRODUCTION RADAR · 23 VERIFIED SYSTEMS
          </div>

          <h1 className="page-title mt-4">
            Engineered Systems <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Deployed at Scale.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#9cb1c9]">
            A technical portfolio of 23+ live software platforms engineered for sub-second API latency, high-concurrency event handling, and rock-solid 99.9% uptime.
          </p>
        </motion.div>

        {/* High-Impact Engineering KPI Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#0c2847]/80 to-[#041220]/80 p-5 backdrop-blur-md transition-all hover:border-cyan-400/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-cyan-300">23+</span>
              <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                <Layers className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-2 text-xs font-bold text-white">Live Production Systems</p>
            <span className="text-[11px] text-gray-400">Mobile, Web & Cloud</span>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-[#1b1442]/80 to-[#041220]/80 p-5 backdrop-blur-md transition-all hover:border-violet-400/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-violet-300">&lt; 1s</span>
              <div className="rounded-xl bg-violet-400/10 p-2 text-violet-300">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-2 text-xs font-bold text-white">Real-Time Sync Latency</p>
            <span className="text-[11px] text-gray-400">WebSocket & Server Push</span>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0a2e26]/80 to-[#041220]/80 p-5 backdrop-blur-md transition-all hover:border-emerald-400/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-emerald-300">99.9%</span>
              <div className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                <Activity className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-2 text-xs font-bold text-white">System Availability</p>
            <span className="text-[11px] text-gray-400">Failover & Caching Tier</span>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#2e210a]/80 to-[#041220]/80 p-5 backdrop-blur-md transition-all hover:border-amber-400/40">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-amber-300">100%</span>
              <div className="rounded-xl bg-amber-400/10 p-2 text-amber-300">
                <Code2 className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-2 text-xs font-bold text-white">Strict Type Safety</p>
            <span className="text-[11px] text-gray-400">TypeScript & Clean Arch</span>
          </div>
        </motion.div>

        {/* Flagship Spotlight Interactive Showcase */}
        {activeCategory === 'All' && !searchQuery && !selectedTech && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-14 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#0b243d] via-[#06182c] to-[#020b16] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />

            {/* Spotlight Tabs Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                  <Flame className="h-4 w-4 text-amber-400 animate-pulse" />
                  FLAGSHIP SPOTLIGHT SHOWCASE
                </div>
              </div>

              {/* Showcase Tab Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {spotlightProjects.map((p, idx) => (
                  <button
                    key={p.slug}
                    onClick={() => setSpotlightIndex(idx)}
                    className={`relative rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      spotlightIndex === idx
                        ? 'bg-cyan-400 text-[#03101b] shadow-md shadow-cyan-400/20'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    <span>0{idx + 1}. {p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Spotlight Content */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-cyan-400/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300 border border-cyan-400/30">
                    {activeSpotlight.spotlightBadge}
                  </span>
                  <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-gray-300">
                    {activeSpotlight.kind} · {activeSpotlight.status}
                  </span>
                </div>

                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeSpotlight.title}
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                  {activeSpotlight.longDescription || activeSpotlight.description}
                </p>

                {/* Key Metrics Highlight Pill */}
                {activeSpotlight.metrics && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-300">
                    <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{activeSpotlight.metrics}</span>
                  </div>
                )}

                {/* Verified Solutions */}
                <div className="mt-6 space-y-2.5">
                  {activeSpotlight.outcomes.slice(0, 3).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips with SVGs */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeSpotlight.tags.map((tag) => {
                    const LogoComp = getTechLogo(tag);
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur-sm"
                      >
                        {LogoComp && <LogoComp />}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {activeSpotlight.href && (
                    <a
                      href={activeSpotlight.href}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button text-xs !py-3 !px-6"
                    >
                      <span>
                        {activeSpotlight.href.includes('google.com')
                          ? 'Get on Google Play'
                          : 'Launch Live Platform'}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(activeSpotlight)}
                    className="secondary-button text-xs !py-3 !px-5 cursor-pointer"
                  >
                    <span>Architecture Deep Dive</span>
                    <Info className="h-4 w-4 text-cyan-300" />
                  </button>

                  <button
                    onClick={() => handleCopyLink(activeSpotlight)}
                    title="Share project"
                    className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Realistic Application Preview Frame */}
              <div className="relative flex justify-center">
                {activeSpotlight.image && (
                  <div
                    onClick={() => setSelectedProject(activeSpotlight)}
                    className="group relative w-full overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-2xl transition-all hover:border-cyan-400/50 cursor-pointer"
                  >
                    {/* Browser / Device Chrome Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#06121f] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="rounded-md bg-black/40 px-3 py-1 font-mono text-[11px] text-gray-400 border border-white/5">
                        https://{activeSpotlight.domainUrl}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                      <Image
                        src={activeSpotlight.image}
                        alt={activeSpotlight.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Hover Overlay Inspect Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                        <div className="rounded-xl border border-cyan-400/50 bg-black/80 px-4 py-2 text-xs font-bold text-cyan-300 shadow-xl flex items-center gap-2">
                          <Maximize2 className="h-4 w-4" />
                          <span>Inspect Full Blueprint</span>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 rounded-lg bg-black/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        {activeSpotlight.kind}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Command & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="sticky top-20 z-30 mt-14 rounded-2xl border border-white/10 bg-[#040e1a]/85 p-4 shadow-2xl backdrop-blur-xl space-y-4"
        >
          {/* Row 1: Categories & Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count =
                  cat.id === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length;
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-400 text-[#03101b] shadow-lg shadow-cyan-400/25'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    <IconComponent className="h-3.5 w-3.5" />
                    <span>{cat.label}</span>
                    <span className={`font-mono text-[11px] ${isActive ? 'text-black/70' : 'text-gray-500'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input & View Switcher */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative min-w-[240px] flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 23+ projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/50 pl-10 pr-9 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* View Switcher */}
              <div className="flex items-center rounded-xl border border-white/10 bg-black/50 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  title="Visual Card Grid"
                  className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400 text-black shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  title="Detailed Technical Matrix"
                  className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'table'
                      ? 'bg-cyan-400 text-black shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Popular Tech Stack Filter Chips & Sort Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1 mr-1">
                <Tag className="h-3 w-3" /> Stack:
              </span>
              {popularTechFilters.map((tech) => {
                const LogoComp = getTechLogo(tech);
                const isSelected = selectedTech === tech;

                return (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(isSelected ? null : tech)}
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-violet-400 text-black shadow-sm font-bold'
                        : 'bg-white/[0.04] text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {LogoComp && <LogoComp />}
                    <span>{tech}</span>
                  </button>
                );
              })}

              {selectedTech && (
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-[11px] text-cyan-400 hover:underline ml-2"
                >
                  Clear stack
                </button>
              )}
            </div>

            {/* Sort Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400">Sort:</span>
              <button
                onClick={() => setSortBy(sortBy === 'default' ? 'title' : 'default')}
                className="text-[11px] font-semibold text-cyan-300 hover:text-white bg-white/5 px-2.5 py-1 rounded-lg border border-white/10"
              >
                {sortBy === 'default' ? 'Featured Order' : 'Alphabetical (A-Z)'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Counter & Reset Action */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
          <span>
            Displaying <strong className="text-cyan-300">{filteredProjects.length}</strong> of {projects.length} verified production platforms
          </span>
          {(activeCategory !== 'All' || searchQuery || selectedTech) && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setSelectedTech(null);
              }}
              className="text-cyan-400 hover:underline cursor-pointer font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* VIEW MODE 1: Rich Cards Grid */}
        {viewMode === 'grid' && (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const domainName = project.href
                  ? project.href.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
                  : `${project.slug}.internal`;

                return (
                  <motion.article
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: index * 0.02 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c243d]/80 via-[#06182c]/80 to-[#030d18]/80 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/50"
                  >
                    <div>
                      {/* Browser / Device Chrome Header */}
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#051424] px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-500/70" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/70" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="truncate max-w-[170px] font-mono text-[10px] text-gray-400">
                          {domainName}
                        </span>
                        <span className="text-[10px] font-semibold text-cyan-300 font-mono">
                          #{project.number}
                        </span>
                      </div>

                      {/* Thumbnail Image Container */}
                      {project.image ? (
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative h-48 w-full overflow-hidden bg-black/50 cursor-pointer"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#06182c] via-transparent to-transparent opacity-90" />

                          {/* Category Tag on Image */}
                          <div className="absolute bottom-3 left-3 rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md border border-white/10">
                            {project.kind}
                          </div>

                          {/* Quick Inspect Hover Icon */}
                          <div className="absolute top-3 right-3 rounded-lg bg-black/60 p-1.5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                            <Maximize2 className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => setSelectedProject(project)}
                          className="relative h-48 w-full overflow-hidden bg-[#030d17] p-4 flex flex-col justify-between cursor-pointer border-b border-white/5"
                        >
                          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono">
                            <span className="flex items-center gap-1.5">
                              <Terminal className="h-4 w-4" /> Next.js 14 Engine
                            </span>
                            <span className="rounded bg-cyan-400/10 px-2 py-0.5 text-[10px]">
                              100 Score
                            </span>
                          </div>
                          <div className="font-mono text-[11px] text-gray-400 space-y-1">
                            <p className="text-cyan-300">// Verified Architecture</p>
                            <p>export default function System() &#123;</p>
                            <p className="pl-4 text-emerald-400">latency: 0ms</p>
                            <p className="pl-4 text-amber-300">security: strict</p>
                            <p>&#125;</p>
                          </div>
                          <div className="rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md self-start">
                            {project.kind}
                          </div>
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Title & Status */}
                        <div className="flex items-start justify-between gap-2">
                          <h2
                            onClick={() => setSelectedProject(project)}
                            className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                          >
                            {project.title}
                          </h2>
                          <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-gray-300 whitespace-nowrap border border-white/5">
                            {project.status}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-xs leading-relaxed text-[#9cb1c9] line-clamp-2">
                          {project.description}
                        </p>

                        {/* Metrics Highlight Pill */}
                        {project.metrics && (
                          <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                            <Zap className="h-3 w-3 shrink-0 text-cyan-400" />
                            <span className="truncate">{project.metrics}</span>
                          </div>
                        )}

                        {/* Tech Stack Chips with SVGs */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 4).map((tag) => {
                            const LogoComp = getTechLogo(tag);
                            return (
                              <button
                                key={tag}
                                onClick={() => setSelectedTech(tag)}
                                className="inline-flex items-center gap-1 rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors cursor-pointer"
                              >
                                {LogoComp && <LogoComp />}
                                <span>{tag}</span>
                              </button>
                            );
                          })}
                          {project.tags.length > 4 && (
                            <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-500">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Key Verified Outcomes */}
                        <div className="mt-4 border-t border-white/5 pt-3.5">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            Verified Outcome
                          </p>
                          <div className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{project.outcomes[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="border-t border-white/10 bg-[#04101d] px-5 py-3.5 flex items-center gap-2">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-cyan-400 px-3 py-2 text-xs font-bold text-[#03101b] transition-transform hover:translate-y-[-1px] shadow-sm shadow-cyan-400/20"
                        >
                          <span>
                            {project.href.includes('github')
                              ? 'GitHub Repo'
                              : project.href.includes('google.com')
                              ? 'Google Play'
                              : 'Live Platform'}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-400">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Production Verified</span>
                        </div>
                      )}

                      {/* Specs Trigger Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        title="View Architecture Specs"
                        className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Info className="h-4 w-4" />
                      </button>

                      {/* Share / Copy Button */}
                      <button
                        onClick={() => handleCopyLink(project)}
                        title="Copy project link"
                        className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedSlug === project.slug ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Share2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* VIEW MODE 2: Detailed Technical Matrix / Table */}
        {viewMode === 'table' && (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-[#04101d]/90 shadow-2xl backdrop-blur-md">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/10 bg-white/[0.04] text-[11px] font-bold uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="py-4 px-4"># ID</th>
                  <th className="py-4 px-4">Engineered System</th>
                  <th className="py-4 px-4">Domain / Category</th>
                  <th className="py-4 px-4">Tech Architecture</th>
                  <th className="py-4 px-4">Verified SLA & Metrics</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {filteredProjects.map((project) => (
                  <tr key={project.slug} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-mono font-bold text-cyan-400">
                      #{project.number}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        {project.image ? (
                          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/40">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="40px"
                              className="object-cover object-top"
                            />
                          </div>
                        ) : (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-cyan-400/10 text-cyan-300">
                            <Terminal className="h-5 w-5" />
                          </div>
                        )}
                        <div>
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="font-bold text-white hover:text-cyan-300 text-left transition-colors cursor-pointer"
                          >
                            {project.title}
                          </button>
                          <p className="text-[11px] text-gray-500 truncate max-w-xs">{project.kind}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-gray-300">
                        {project.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[10px] text-gray-500">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-cyan-300">
                      <span className="truncate block max-w-xs">
                        {project.metrics || 'Production SLA · 99.9%'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-cyan-400 px-2.5 py-1 text-xs font-bold text-black hover:bg-cyan-300 transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="rounded-lg bg-white/5 p-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                          <Info className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center">
            <p className="text-base text-gray-300">
              No systems match your active filter criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setSelectedTech(null);
              }}
              className="primary-button mt-4 text-xs !py-2 !px-4 cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Bottom CTA Callout */}
        <section className="mt-24 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#0c243d] via-[#081b2f] to-[#041220] p-8 text-center sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <span className="eyebrow">CUSTOM ARCHITECTURE & FULL-STACK SCALING</span>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl text-white">
            Need an enterprise system engineered with these standards?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-gray-300">
            I engineer resilient web platforms, mobile streaming engines, and AI integrations tailored for sub-second speed, flawless uptime, and high conversion.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/contact" className="primary-button text-xs !py-3 !px-7 shadow-lg shadow-cyan-400/20">
              Start a Technical Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      {/* Interactive Project Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-[#0c243d] via-[#06182c] to-[#020b16] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-gray-300 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="rounded-md bg-cyan-400/20 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-cyan-400/30">
                  {selectedProject.kind}
                </span>
                <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                  {selectedProject.category}
                </span>
                <span className="rounded-md bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                  {selectedProject.status}
                </span>
                <span className="font-mono text-xs text-gray-500">#{selectedProject.number}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h2>

              {selectedProject.metrics && (
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  <span>{selectedProject.metrics}</span>
                </div>
              )}

              {/* Modal Image Showcase */}
              {selectedProject.image && (
                <div className="relative mt-5 h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top"
                  />
                </div>
              )}

              {/* Comprehensive Description & Specs */}
              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Architectural Overview
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-200">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Key Verified Engineering Outcomes
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {selectedProject.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Integrated Technology Stack
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => {
                      const LogoComp = getTechLogo(tag);
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200 border border-white/10"
                        >
                          {LogoComp && <LogoComp />}
                          <span>{tag}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="secondary-button text-xs !py-2.5 !px-5 cursor-pointer"
                >
                  Close Blueprint
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopyLink(selectedProject)}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Share System</span>
                  </button>

                  {selectedProject.href && (
                    <a
                      href={selectedProject.href}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button text-xs !py-2.5 !px-6"
                    >
                      <span>
                        {selectedProject.href.includes('github')
                          ? 'View GitHub Repository'
                          : selectedProject.href.includes('google.com')
                          ? 'Open on Google Play'
                          : 'Launch Live Production System'}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
