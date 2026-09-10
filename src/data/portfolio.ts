export const projects = [
  {
    title: 'Personal Portfolio Platform',
    kind: 'Live project',
    status: 'Published',
    description: 'A responsive, accessible portfolio built to present academic history, contact details, and professional direction with a polished Europass-inspired experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    accent: 'cyan',
    number: '01',
    href: 'https://github.com/mianasad427/muhammad-asadullah-portfolio',
    outcomes: ['Responsive multi-page interface', 'Automated production deployment', 'Privacy-conscious public profile'],
  },
  {
    title: 'Academic Result Analyzer',
    kind: 'Practice concept',
    status: 'Concept ready',
    description: 'A student-focused dashboard concept that turns marks and semester results into clear progress insights, subject comparisons, and printable summaries.',
    tags: ['React', 'Data Visualization', 'Responsive UI'],
    accent: 'violet',
    number: '02',
    href: undefined,
    outcomes: ['Result-entry workflow', 'Performance trend views', 'Mobile-first dashboard concept'],
  },
  {
    title: 'Campus Task Planner',
    kind: 'Practice concept',
    status: 'Concept ready',
    description: 'A focused planning experience for students to organize assignments, priorities, and deadlines without the clutter of a general-purpose productivity tool.',
    tags: ['TypeScript', 'UX Design', 'Local Storage'],
    accent: 'amber',
    number: '03',
    href: undefined,
    outcomes: ['Priority-based task flow', 'Deadline overview', 'Accessible interaction design'],
  },
] as const;

export const capabilities = ['Software Engineering', 'Problem Solving', 'Responsive Web Design', 'TypeScript', 'React / Next.js', 'Git & GitHub'];
