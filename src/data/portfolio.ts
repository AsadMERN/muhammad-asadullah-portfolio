export interface ProjectItem {
  title: string;
  slug: string;
  kind: string;
  category: 'All' | 'Mobile Apps' | 'SaaS & AI Platforms' | 'Web Applications & Commerce' | 'Brand & Corporate Websites';
  status: string;
  description: string;
  longDescription?: string;
  tags: string[];
  accent: 'cyan' | 'violet' | 'amber';
  number: string;
  href?: string;
  image?: string;
  metrics?: string;
  outcomes: string[];
}

export const projects: ProjectItem[] = [
  {
    "title": "Yacine Shoot",
    "slug": "yacine-shoot",
    "kind": "Mobile App",
    "category": "Mobile Apps",
    "status": "3 Months",
    "description": "A high-performance real-time football score application delivering live match updates and notifications with sub-second latency.",
    "longDescription": "Yacine Shoot is a comprehensive mobile application designed to provide football fans with real-time match tracking, live streaming, and global league coverage. Built for scale, the platform handles massive traffic spikes during major global tournaments, ensuring that fans never miss a critical moment. It features seamless push notifications, optimized data caching, and a robust backend designed specifically for high-concurrency environments.",
    "tags": [
      "Android",
      "React Native",
      "Supabase",
      "Vercel",
      "AWS",
      "Real-time APIs"
    ],
    "accent": "cyan",
    "number": "01",
    "href": "https://play.google.com/store/apps/details?id=com.anonymous.yacineshoot",
    "image": "/projects/yacine_shoot.jpg",
    "metrics": "0ms Added Latency · 24/7 Live Streaming · 99.9% Uptime",
    "outcomes": [
      "We engineered a highly decoupled microservices architecture utilizing AWS for scalable video streaming and Vercel for edge API resolution. By leveraging Supabase for real-time database subscriptions and implementing an aggressive local caching strategy in React Native, we reduced server load by 80% while achieving sub-second latency for match updates.",
      "Engineered solutions for: During high-stakes football matches, user traffic can spike by 10,000% within seconds of a goal being scored. The existi...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "YPRO Viewer",
    "slug": "ypro-viewer",
    "kind": "Mobile App",
    "category": "Mobile Apps",
    "status": "Ongoing",
    "description": "A perfect React Native player for consuming HLS streams and mobile videos with advanced features like playback speed control and link pasting.",
    "longDescription": "YPRO Viewer provides a premium video streaming experience through a custom-built React Native media player. It allows users to play any HLS stream or mobile video simply by pasting a link. The application includes advanced playback features like adjustable play speed, robust buffering, and a comprehensive set of player controls. Constant updates are being pushed to add even more powerful features.",
    "tags": [
      "React Native",
      "Android",
      "HLS Streaming",
      "Video Player API"
    ],
    "accent": "violet",
    "number": "02",
    "href": "https://play.google.com/store/apps/details?id=com.yproviewer.ypro",
    "image": "/projects/ypro_viewer.jpg",
    "metrics": "HLS Stream Support · React Native Performance · Updates Continuous",
    "outcomes": [
      "We built a proprietary media player in React Native, optimizing it for seamless HLS consumption and direct link parsing. By integrating custom playback controls, we delivered a versatile, high-performance viewing tool that is continuously being updated with new features.",
      "Engineered solutions for: Providing ultra-fast video streaming and a perfect HLS playback experience across varying mobile network conditions, whi...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "BarkoPets",
    "slug": "barkopets",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "4 Months",
    "description": "A niche-driven pet services marketplace designed for high-conversion and specialized service matching.",
    "longDescription": "BarkoPets is a highly structured marketplace connecting pet owners with professional caregivers, groomers, and trainers. By focusing heavily on search intent and user trust, the platform features a handcrafted UI/UX, automated service listings, and verified user reviews. It operates as a fully functional digital ecosystem for the pet service industry.",
    "tags": [
      "PrestaShop",
      "Next.js",
      "Supabase",
      "PHP/MySQL",
      "SEO Architecture"
    ],
    "accent": "amber",
    "number": "03",
    "href": "https://barkopets.com",
    "image": "/projects/barko_pets.jpg",
    "metrics": "10x Service Matching · A+ SEO Authority · 100% Automated Listings",
    "outcomes": [
      "We deployed a hybrid architecture using PrestaShop for foundational commerce logic and Next.js for an ultra-fast, SEO-optimized frontend. By utilizing Supabase for user authentication and booking states, we created a frictionless onboarding flow that increased service provider registrations by 300% in the first quarter.",
      "Engineered solutions for: The pet services industry lacked a specialized, high-authority marketplace. Existing platforms were either too broad or ...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Hipo Global",
    "slug": "hipo-global",
    "kind": "Corporate Website",
    "category": "Brand & Corporate Websites",
    "status": "6 Weeks",
    "description": "A high-authority corporate business website focused on professional branding and global service presentation.",
    "longDescription": "Hipo Global serves as a premier enterprise platform designed for cross-border corporate branding. The website utilizes a clean, high-end enterprise UI combined with an aggressive SEO strategy, positioning the company as a leader in international business consulting and specialized services.",
    "tags": [
      "WordPress",
      "React Vite",
      "PHP",
      "SEO Strategy",
      "Vercel"
    ],
    "accent": "cyan",
    "number": "04",
    "href": "https://hipoglobal.com",
    "image": "/projects/hipo_global.jpg",
    "metrics": "Global Brand Positioning · 100% Responsive Design · Top 10 Search Ranking",
    "outcomes": [
      "We developed a responsive design strategy utilizing a headless WordPress backend combined with a React Vite frontend. This ensured lightning-fast load times, flawless corporate UI execution, and absolute control over on-page SEO metadata, pushing them to the top of search results in multiple countries.",
      "Engineered solutions for: The company needed to establish a premium global brand positioning that appealed to high-net-worth enterprise clients. T...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Shayon Smith",
    "slug": "shayon-smith",
    "kind": "Portfolio",
    "category": "Brand & Corporate Websites",
    "status": "4 Weeks",
    "description": "An elite personal branding website designed with conversion-focused motion and high-fidelity project storytelling.",
    "longDescription": "The Shayon Smith portfolio represents the gold standard in personal identity branding. Utilizing advanced Framer Motion transitions, the site creates dynamic, cinematic UI experiences that guide users through high-conversion funnels while maintaining an editorial, prestigious aesthetic.",
    "tags": [
      "React",
      "Next.js",
      "Framer Motion",
      "Supabase",
      "Vercel"
    ],
    "accent": "violet",
    "number": "05",
    "href": "https://shayonsmith.com",
    "image": "/projects/shayon_smith.jpg",
    "metrics": "3x Conversion Funnel · 60fps Motion UI · A+ Brand Identity",
    "outcomes": [
      "We leveraged Next.js combined with highly optimized Framer Motion orchestration to ensure animations ran at a consistent 60fps. By utilizing lazy-loaded components and strict asset optimization via Supabase and Vercel, we achieved a cinematic feel with near-instant page loads.",
      "Engineered solutions for: Building a dynamic, animation-heavy UI that communicates high-fidelity project storytelling without sacrificing mobile r...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Nubambu",
    "slug": "nubambu",
    "kind": "E-Commerce",
    "category": "Web Applications & Commerce",
    "status": "3 Months",
    "description": "A full-stack sustainable e-commerce platform built for scale, performance, and environmental impact storytelling with a powerful dashboard.",
    "longDescription": "Nubambu is a massively scalable eco-commerce platform that goes beyond standard retail by offering end-to-end order orchestration, performance-first frontend logic, and automated customer communication. The custom dashboard enables seamless management of products and integrates directly with Twilio and Resend for real-time customer updates.",
    "tags": [
      "React",
      "Node.js",
      "MongoDB",
      "Twilio",
      "Resend"
    ],
    "accent": "amber",
    "number": "06",
    "href": "https://nubambu.com",
    "image": "/projects/nubambu.jpg",
    "metrics": "1000s Scalable Orders · Automated Communication · 100% Performance-First",
    "outcomes": [
      "We developed a robust, scalable backend with Node.js and MongoDB, paired with a Next.js React frontend. We integrated Twilio for WhatsApp notifications and Resend for transactional emails, all controllable from a centralized, custom-built administrative dashboard.",
      "Engineered solutions for: Building an architecture capable of handling complex international order orchestration and messaging automation, while e...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Morse Code Translator",
    "slug": "morse-code-translator",
    "kind": "Utility Tool",
    "category": "Web Applications & Commerce",
    "status": "3 Weeks",
    "description": "A fast, reliable morse code decoder and translator built on a custom WordPress theme optimized perfectly for SEO.",
    "longDescription": "Morse Code Translate is a high-utility web application providing seamless Morse code decoding and translation. By operating on a completely custom WordPress theme built from scratch, it entirely bypasses the bloat of standard builders, ensuring perfect SEO optimization, incredible JavaScript execution performance, and a flawless user experience globally.",
    "tags": [
      "WordPress",
      "PHP",
      "MySQL",
      "Custom Theme",
      "SEO"
    ],
    "accent": "cyan",
    "number": "07",
    "href": "https://morsecodetranslates.com",
    "image": "/projects/morsecodetranslates.png",
    "metrics": "Perfect SEO Score · 100% Custom Theme · <500ms Load Time",
    "outcomes": [
      "We created a highly optimized, completely custom WordPress theme utilizing clean PHP and MySQL. We moved all translation logic to a lightweight, vanilla JavaScript module on the client side to ensure blazing-fast execution and zero server-side rendering delays.",
      "Engineered solutions for: The utility tool market is highly competitive. To outrank established competitors, the platform required pure technical ...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Pomodoro Focus Timer",
    "slug": "pomodoro-timer",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "4 Weeks",
    "description": "A beautifully optimized Pomodoro focus timer with a custom WordPress theme, ensuring excellent performance and productivity tracking.",
    "longDescription": "Pomodoro Focus Timer is a smooth, perfectly engineered productivity application built uniquely within a custom WordPress environment. With advanced SEO optimization and bespoke WordPress plugins, the platform delivers a flawless, distraction-free focus experience while dominating search engine rankings for productivity tools.",
    "tags": [
      "WordPress",
      "PHP",
      "Custom Plugins",
      "JavaScript",
      "SEO"
    ],
    "accent": "violet",
    "number": "08",
    "href": "https://pomodorofocustimer.com",
    "image": "/projects/pomodoro_timer.png",
    "metrics": "100% Smooth Timing · A+ Performance · Custom Plugins Integration",
    "outcomes": [
      "We developed custom lightweight plugins and a completely bespoke WordPress theme to handle the timing logic seamlessly. We prioritized critical CSS and deferred non-essential scripts, achieving perfect SEO optimization and a silky smooth user interface.",
      "Engineered solutions for: Providing a perfectly smooth, state-driven timer experience, typically reserved for React/Vue applications, within a Wor...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "DBK Clock-in",
    "slug": "dbk-clock-in",
    "kind": "Mobile App",
    "category": "Mobile Apps",
    "status": "Ongoing",
    "description": "A comprehensive workforce management mobile app featuring offline-first syncing, background location tracking, and AI-powered voice memos.",
    "longDescription": "DBK Clock-in is an enterprise-grade mobile application designed specifically for construction job sites. Built with React Native and Expo, the app features robust background GPS tracking for automated geofenced timekeeping, extensive offline capabilities, and comprehensive multimedia job documentation. We integrated Firebase Cloud Functions and OpenAI for intelligent voice-to-text transcriptions, with all captured media and compliance documents seamlessly syncing directly into the company's Google Drive infrastructure.",
    "tags": [
      "React Native",
      "Expo",
      "Firebase",
      "OpenAI",
      "Google Drive API"
    ],
    "accent": "amber",
    "number": "09",
    "image": "/projects/dbk_clock_in.png",
    "metrics": "Local Queue Syncing · Auto Geofencing · AI Transcriptions",
    "outcomes": [
      "We engineered a resilient offline-first architecture using a local queue system to cache time events and media, syncing automatically when connectivity returns. We optimized the background location tracking using specialized watchdogs to prevent OS hibernation. Heavy processing tasks, such as OpenAI audio transcriptions and large Google Drive file uploads, were offloaded to Firebase 2nd-Gen Cloud Functions to preserve device performance.",
      "Engineered solutions for: Construction workers frequently operate in environments with poor network connectivity, leading to delayed time logs and...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Resilis",
    "slug": "resilis",
    "kind": "B2B SaaS",
    "category": "SaaS & AI Platforms",
    "status": "6 Months",
    "description": "An AI-powered B2B platform for building Business Continuity Plans (BCP) and managing enterprise crises in real-time.",
    "longDescription": "Resilis is an advanced crisis management and resilience platform that transforms enterprise vulnerability into readiness. Built for companies, healthcare institutions, and consulting firms, the solution harnesses AI to drastically accelerate the creation of Business Continuity (PCA) and Disaster Recovery (PRA) plans. It guides organizations through ISO-compliant methodologies (ISO 22301, 27001), automatically suggesting critical processes, disruption scenarios, and customized 'reflex sheets'.",
    "tags": [
      "Python",
      "Django",
      "Bootstrap",
      "AI Integration",
      "PostgreSQL"
    ],
    "accent": "cyan",
    "number": "10",
    "href": "https://resilis.com",
    "image": "/projects/resilis.png",
    "metrics": "AI Powered Plans · ISO Compliant · Fast Deployment",
    "outcomes": [
      "We helped engineer an intuitive, modular back-end architecture using Python and Django, linking continuity planning with real-time incident management. The platform leverages an AI assistant (fully compliant with the EU AI Act) to generate customized crisis plans in days rather than weeks. In the event of a disruption, an integrated \"Crisis Mode\" dashboard allows teams to activate plans instantly, log actions transparently, and maintain secure, multi-entity collaboration.",
      "Engineered solutions for: Enterprises face increasingly frequent and severe crises, yet building and maintaining continuity plans is traditionally...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Blonk Group",
    "slug": "blonk",
    "kind": "AI Recruitment Platform",
    "category": "SaaS & AI Platforms",
    "status": "1 year",
    "description": "An AI-powered executive search ecosystem combining a swipe-based mobile matching app, a full recruiting software suite, and a privacy-first AI hiring copilot, all built to connect top talent and hiring leaders globally.",
    "longDescription": "Blonk Group is a Silicon Valley-born executive search firm that operates across three integrated platforms. The core platform (blonk.co) is a mobile-first application inspired by love-matching principles that directly connects hiring leaders and top executives via a Tinder-like swipe interface, AI-driven matching, and video profiles. SOblonk (soblonk.blonk.co) is the company's fully integrated recruiting SaaS, combining a branded career page, automatic job syndication to Google for Jobs and the Blonk App, an intelligent candidate matching engine, and an applicant tracking dashboard for HR teams. Blonk Intelligence (ai.blonk.co) is a privacy-first AI recruitment copilot, trained not by generic data but by domain professionals with deep hiring experience, supporting both recruiters and executives with AI-generated job briefs, CV summaries, interview suggestions, and automated shortlisting under full Incognito Mode encryption.",
    "tags": [
      "React Native",
      "React (Create React App)",
      "Node.js",
      "OpenAI GPT-4",
      "Mistral AI",
      "AI Matching Algorithm",
      "Google for Jobs API",
      "Video Integration",
      "MongoDB",
      "AWS",
      "Firebase"
    ],
    "accent": "violet",
    "number": "11",
    "href": "https://blonk.co",
    "image": "/projects/blonk.png",
    "metrics": "3 Integrated Platforms · GPT-4+ Mistral AI Powered · 100% Encrypted & Private Sessions",
    "outcomes": [
      "Blonk built a \"Mind + Machine\" ecosystem of three tightly connected platforms. The mobile app lets executives swipe, match, and chat directly with hiring leaders using AI pre-selection and video profiles, while staying fully anonymous until they choose to engage. SOblonk gives HR teams a one-stop recruiting software with career page builder, one-click Google for Jobs posting, AI candidate matching, and a collaborative pipeline dashboard. Blonk Intelligence layers a domain-expert-trained AI copilot on top, letting recruiters choose between GPT-4 or Mistral, generate job ads, analyze CVs, and accelerate shortlists, all with end-to-end encryption and adaptive result refinement without re-entering prompts.",
      "Engineered solutions for: Executive search remains slow, opaque, and frustrating for all parties involved. Top executives rarely apply to job post...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "FinanceIQ",
    "slug": "finance-iq",
    "kind": "Mobile App",
    "category": "Mobile Apps",
    "status": "2 Months",
    "description": "A smart financial management app designed to help users track, analyze, and manage their entire financial life in one place through a unified dashboard.",
    "longDescription": "FinanceIQ is a smart financial management app designed to help users track, analyze, and manage their entire financial life in one place. It allows users to securely connect bank accounts, investments, crypto wallets, and other assets to get a real-time view of their net worth through a unified dashboard. With features like AI-powered financial insights, asset and liability tracking, and performance monitoring, FinanceIQ simplifies complex financial data into clear, actionable information. The platform prioritizes security with bank-level encryption, read-only access, and advanced protection methods such as two-factor authentication and biometric login. Built for simplicity and efficiency, FinanceIQ enables users to make informed financial decisions, monitor growth, and stay in control of their finances anytime, anywhere.",
    "tags": [
      "React Native",
      "Firebase",
      "AI",
      "Node.js",
      "Push Notifications"
    ],
    "accent": "amber",
    "number": "12",
    "href": "https://financeiq.us/",
    "image": "/projects/finance-iq.png",
    "metrics": "100% Unified View · AI Insights · Secure Biometrics",
    "outcomes": [
      "We engineered a high-security React Native application that aggregates real-time data from various financial APIs into a single dashboard. By integrating AI-driven analysis for performance monitoring and implementing robust biometric security layers, we created a seamless and safe financial management tool.",
      "Engineered solutions for: Managing fragmented financial data across multiple bank accounts, investment platforms, and crypto wallets is a major hu...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Roost",
    "slug": "roost",
    "kind": "Mobile App",
    "category": "Mobile Apps",
    "status": "Ongoing",
    "description": "A community-driven mobile platform for off-road and dirt bike riders to plan, track, and improve their riding experiences with real-time squad coordination.",
    "longDescription": "Roost is a community-driven mobile platform built for off-road and dirt bike riders to plan, track, and improve their riding experiences. It combines real-time ride tracking, trail discovery, and squad coordination tools into a single app designed specifically for riders who operate in off-road environments. The platform allows users to explore curated trails with difficulty ratings and terrain insights, plan group rides with friends, and stay connected through integrated chat and squad planning features. During rides, it provides GPS tracking, performance telemetry, and offline navigation support to ensure riders stay informed even in remote areas with no signal. After each ride, Roost generates detailed recaps, including ride statistics, highlights, and maintenance reminders. (Note: App not yet released for public release; scheduled for 1 June 2026).",
    "tags": [
      "Firebase",
      "Next.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Push Notifications",
      "Mapbox"
    ],
    "accent": "cyan",
    "number": "13",
    "href": "https://www.rooster350.com/",
    "image": "/projects/roost_1.png",
    "metrics": "Offline Navigation · Real-time Squad Chat · June 1 2026 Release",
    "outcomes": [
      "We engineered a robust mobile ecosystem utilizing React Native and Mapbox for offline-first navigation. By integrating Firebase for real-time squad updates and Node.js for high-performance telemetry processing, we created a seamless coordination tool that works even in the most demanding environments.",
      "Engineered solutions for: Off-road riders frequently face challenges with trail visibility, poor squad coordination in remote areas, and the dange...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "DocuKar",
    "slug": "docukar",
    "kind": "SaaS Platform",
    "category": "SaaS & AI Platforms",
    "status": "3 Months",
    "description": "A comprehensive fleet compliance management platform designed for logistics and transport businesses to digitize and automate legal requirements.",
    "longDescription": "DocuKar is a fleet compliance management platform designed for businesses that operate multiple vehicles such as logistics, delivery, and transport fleets. It helps companies manage all legal and regulatory requirements in one place, including vehicle documents, RTO compliance, traffic challans, and fuel tracking. Instead of manually handling paperwork and legal follow-ups, businesses can use DocuKar to digitize and organize everything through a central dashboard. The platform also provides automated tracking for document expiry and fines, along with on-field support to assist with renewals and compliance tasks. Overall, it is built to reduce the operational burden on fleet owners, prevent penalties, and improve efficiency by simplifying compliance management.",
    "tags": [
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "Cloudinary",
      "Cron"
    ],
    "accent": "violet",
    "number": "14",
    "href": "https://docukar.com",
    "image": "/projects/docukar_home.png",
    "metrics": "0 Compliance Penalties · 100% Digitized Records · Auto Expiry Alerts",
    "outcomes": [
      "We engineered a centralized digital dashboard using Next.js and Node.js that automates the tracking of document expiry and fines. By integrating Cloudinary for secure document storage and Cron jobs for automated alerts, we transformed a manual, error-prone process into a streamlined digital workflow with real-time compliance monitoring.",
      "Engineered solutions for: Fleet owners face massive operational burdens manually handling vehicle documentation, RTO compliance, and legal follow-...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "KlickStock",
    "slug": "klickstock",
    "kind": "AI Image Platform",
    "category": "SaaS & AI Platforms",
    "status": "2 Months",
    "description": "An AI-powered professional image library with automated metadata generation and cloud-native asset management.",
    "longDescription": "KlickStock is a high-performance image management platform built for modern creative workflows. By integrating Google Gemini AI directly into the upload pipeline, the system automatically analyzes imagery to generate professional descriptions, technical tags, and SEO-optimized metadata. The architecture leverages Next.js Server Actions for a frictionless user experience, while AWS S3 and NeonDB ensure that massive libraries are managed with enterprise-grade reliability and speed.",
    "tags": [
      "Next.js",
      "Server Actions",
      "Gemini AI",
      "AWS S3",
      "NeonDB"
    ],
    "accent": "amber",
    "number": "15",
    "href": "https://klickstock2.vercel.app/",
    "image": "/projects/klickstock.png",
    "metrics": "AI Metadata · S3 Storage · Neon DB",
    "outcomes": [
      "We engineered a fully automated media pipeline using Next.js and Gemini AI. Upon upload, images are processed in real-time, with AI-generated metadata stored in a NeonDB PostgreSQL database. This allows for instant, intelligent searching and categorizing, all hosted on Vercel for maximum global performance.",
      "Engineered solutions for: Managing thousands of high-resolution images typically requires hours of manual tagging and metadata entry. Without prop...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "FixkoGM",
    "slug": "fixkogm",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "2 Months",
    "description": "A curated home services marketplace in The Gambia, connecting residents with verified plumbers, electricians, and painters.",
    "longDescription": "FixkoGM is a localized digital service directory and booking platform designed specifically for the Gambian market. Bypassing the challenges of unverified local labor, the platform connects households and businesses in Serrekunda with vetted, high-quality local professionals. It features a custom quote estimation flow, instant WhatsApp-based booking integration, and a rigorous in-house background verification process to ensure absolute reliability and safety on every job.",
    "tags": [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "WhatsApp Business API",
      "Vercel"
    ],
    "accent": "cyan",
    "number": "16",
    "href": "https://fixkogm.com",
    "image": "/projects/fixkogm.png",
    "metrics": "100% Vetted Experts · <15m Quote Match · 4.8★ Customer Rating",
    "outcomes": [
      "We designed and deployed a mobile-optimized service platform featuring a highly frictionless booking funnel and automated expert dispatching logic. By combining a lightweight quote-request flow with direct, automated WhatsApp business integrations, we allowed users to easily submit service requests and receive matched quotes from verified, police-vetted service experts within minutes.",
      "Engineered solutions for: Homeowners in The Gambia struggled to find reliable, vetted tradespeople for emergency home repairs, often suffering fro...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Pallet Supply Pros",
    "slug": "pallet-supply-pros",
    "kind": "Corporate Website",
    "category": "Brand & Corporate Websites",
    "status": "6 Weeks",
    "description": "A customized wood pallet supply and logistics platform serving businesses across York, Pennsylvania, with integrated removal services.",
    "longDescription": "Pallet Supply Pros is a specialized commercial logistics and supply chain portal engineered to optimize wood pallet procurement and recycling. Serving the industrial hubs of York, PA, the platform streamlines the entire B2B lifecycle, from configuring custom-dimension wood pallet orders to orchestrating swift, high-volume pallet removal services. The web system helps warehouse managers clear valuable floor space and secure reliable, heat-treated lumber assets via a high-conversion digital dashboard.",
    "tags": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Resend",
      "Google Maps API"
    ],
    "accent": "violet",
    "number": "17",
    "href": "https://palletsupplypros.com",
    "image": "/projects/palletsupplypros.png",
    "metrics": "60% Faster Dispatch · Custom B2B Configurator · 100s Tons Recycled",
    "outcomes": [
      "We built a dedicated, high-performance B2B platform equipped with an interactive pallet size configurator and an automated scheduling tool for commercial wood waste removal. The platform integrates instant automated email routing and SMS-based logistical dispatch, cutting down inquiry-to-delivery turnaround times by more than 60%.",
      "Engineered solutions for: Industrial supply and logistics operators in Pennsylvania lacked a fast, transparent way to order custom wood pallets or...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Crown Cleaning",
    "slug": "crown-cleaning",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "2 Months",
    "description": "A premium professional cleaning platform in Auckland, New Zealand, powered by the structured CROWN STANDARD™ hygiene system.",
    "longDescription": "Crown Cleaning is a high-authority property maintenance and sanitization platform serving residential and commercial environments throughout Auckland, New Zealand. Centered around their proprietary CROWN STANDARD™ hygiene system, the web application handles automated scheduling, detailed custom protocol design, site assessment management, and comprehensive quality assurance reporting. The platform offers specialized turnover configurations for high-traffic venues and Airbnb rentals, keeping compliance and hygiene perfectly aligned.",
    "tags": [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Framer Motion"
    ],
    "accent": "amber",
    "number": "18",
    "href": "https://crowncleaning.co.nz",
    "image": "/projects/crowncleaning.png",
    "metrics": "100% Hygiene Compliance · Auto Quality Audits · A+ Standard Rating",
    "outcomes": [
      "We engineered a sleek, premium service management platform that digitizes the CROWN STANDARD™ hygiene framework. By incorporating an automated site-assessment questionnaire, custom-protocol builders, and an interactive client portal with downloadable quality audit reports, we provided businesses with 100% transparency and absolute hygiene consistency.",
      "Engineered solutions for: Commercial venue and short-term rental owners in Auckland faced extreme inconsistency in hygiene standards and lacked ve...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Beauty Crown",
    "slug": "beauty-crown",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "1 Month",
    "description": "A perfect UI/UX custom WordPress and Elementor theme for a Dubai beauty salon with appointment booking and branch management.",
    "longDescription": "Beauty Crown is a premier beauty salon with three branches in Dubai. The website features a beautifully designed, custom WordPress theme integrated with Elementor, allowing the client to easily edit and add new sections. It includes comprehensive appointment booking, menu pricing, and detailed service listings, ensuring an exceptional user experience.",
    "tags": [
      "WordPress",
      "Elementor",
      "Custom Theme",
      "PHP",
      "UI/UX Design"
    ],
    "accent": "cyan",
    "number": "19",
    "href": "https://beautycrown.ae/",
    "image": "/projects/beautycrown.png",
    "metrics": "3 Branches Integrated · Easy Elementor Editing · Fast Booking System",
    "outcomes": [
      "We developed a custom WordPress theme specifically optimized for Elementor, enabling the client to effortlessly update content and manage services. The integration of an intuitive booking system significantly streamlined appointment scheduling across all three branches.",
      "Engineered solutions for: The salon needed a highly customizable, easy-to-manage website that allowed seamless appointment booking across multiple...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Six Link Solutions",
    "slug": "six-link-solutions",
    "kind": "Corporate Website",
    "category": "Brand & Corporate Websites",
    "status": "1 Month",
    "description": "A customized WordPress theme with perfect UI/UX for a veteran-owned professional services and consulting firm.",
    "longDescription": "Six Link Solutions delivers senior-level strategic advisory, program management, GRC, and IT & cybersecurity support. We built a custom WordPress theme hosted on Hostinger that features a flawless UI and UX. The platform effectively communicates their mission-focused solutions for government and organizations, combining analytical rigor with disciplined execution.",
    "tags": [
      "WordPress",
      "Custom Theme",
      "Hostinger",
      "UI/UX Design"
    ],
    "accent": "violet",
    "number": "20",
    "href": "https://sixlinksolutions.com/",
    "image": "/projects/sixlinksolutions.png",
    "metrics": "Custom WordPress Theme · Perfect UI & UX · Govt Targeted Design",
    "outcomes": [
      "We designed a highly professional, customized WordPress theme focused on clean aesthetics and clear messaging. Deployed on Hostinger, the site provides a perfect user experience that highlights their rigorous, outcome-driven approach to professional services.",
      "Engineered solutions for: A veteran-owned professional services firm needed a robust, trustworthy online presence to attract government and enterp...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Hausnine Homes",
    "slug": "hausnine-homes",
    "kind": "Corporate Website",
    "category": "Brand & Corporate Websites",
    "status": "3 Weeks",
    "description": "A perfectly designed house coloring and home aesthetics website.",
    "longDescription": "Hausnine Homes is a dedicated platform for house coloring and home aesthetics. The site provides a visually stunning user interface and perfect user experience to showcase high-quality house painting and design services.",
    "tags": [
      "Web Design",
      "UI/UX Design",
      "Frontend Development"
    ],
    "accent": "amber",
    "number": "21",
    "href": "https://hausninehomes.com/",
    "image": "/projects/hausninehomes.png",
    "metrics": "Perfect Site Design · A+ Visual Aesthetics · Smooth User Experience",
    "outcomes": [
      "We built a perfectly optimized site with a strong focus on high-fidelity imagery and smooth UI, allowing users to easily explore house coloring options and services.",
      "Engineered solutions for: Creating a highly visual and aesthetically pleasing digital storefront for a house coloring service that immediately com...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Custom WP Replica",
    "slug": "deeppink-gazelle",
    "kind": "Web App",
    "category": "Web Applications & Commerce",
    "status": "4 Weeks",
    "description": "A pixel-perfect Figma to custom WordPress theme conversion, tailored to exact client specifications.",
    "longDescription": "This project involved converting a complex Figma design into a fully functional, highly optimized custom WordPress theme. The final website is an exact replica of the original design, precisely meeting all client requirements while ensuring optimal performance and manageability within the WordPress ecosystem.",
    "tags": [
      "Figma",
      "WordPress",
      "Custom Theme",
      "PHP",
      "CSS"
    ],
    "accent": "cyan",
    "number": "22",
    "href": "https://deeppink-gazelle-392607.hostingersite.com/",
    "image": "/projects/deeppink_gazelle.png",
    "metrics": "100% Pixel Perfect · Figma To WordPress · Custom Theme Built",
    "outcomes": [
      "We meticulously developed a custom WordPress theme from scratch, mapping every detail of the Figma file to clean HTML, CSS, and PHP. This ensured a pixel-perfect replica that runs lightning-fast and is easily maintainable.",
      "Engineered solutions for: The client required a 100% accurate conversion from a sophisticated Figma design to a live WordPress site without relyin...",
      "Delivered with modern architecture, automated CI/CD and clean code standards."
    ]
  },
  {
    "title": "Personal Portfolio Platform",
    "slug": "muhammad-asadullah-portfolio",
    "kind": "Web Application",
    "category": "Web Applications & Commerce",
    "status": "Published",
    "description": "A responsive, accessible portfolio platform built to present software engineering projects, academic credentials, and interactive contact channels with smooth zero-reload navigation.",
    "longDescription": "Engineered with Next.js 14 App Router, TypeScript, Framer Motion, and Tailwind CSS. Features validated contact routing, instant client navigation, glassmorphism UI, and optimized static asset delivery.",
    "tags": [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "accent": "cyan",
    "number": "23",
    "href": "https://github.com/mianasad427/muhammad-asadullah-portfolio",
    "metrics": "100% Client-Side Routing · Sub-Second Load",
    "outcomes": [
      "Zero-reload client-side routing with Next.js 14 App Router",
      "Interactive contact form with real-time validation and WhatsApp direct messaging",
      "Optimized asset loading with responsive dark-mode aesthetics"
    ]
  }
];

export const capabilities = [
  'Full-Stack Web Development',
  'Software Architecture & System Design',
  'React / Next.js 14 (App Router)',
  'TypeScript & Modern JavaScript',
  'Mobile App Development (React Native & Android)',
  'Real-Time Systems & Supabase',
  'RESTful & GraphQL API Design',
  'Tailwind CSS & Modern UI/UX Design',
  'Database Modeling (PostgreSQL, Supabase, Prisma)',
  'Git, GitHub Actions & CI/CD Pipelines',
  'Performance Optimization & Core Web Vitals',
  'SEO & Accessible Web Architecture',
];

export const contactInfo = {
  name: 'Muhammad Asadullah',
  role: 'Software Engineer',
  avatar: '/asad.jpeg',
  email: 'muhammadasadullah427@gmail.com',
  phone: '+92 323 5965261',
  whatsapp: '+923235965261',
  whatsappUrl: 'https://wa.me/923235965261?text=Hi%20Muhammad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
  location: 'Faisalabad, Punjab, Pakistan',
  github: 'https://github.com/mianasad427',
  availability: 'Available for full-time engineering roles & high-impact contracts',
};
