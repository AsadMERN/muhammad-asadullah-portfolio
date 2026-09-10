import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Skills | Muhammad Asadullah',
  description: 'Software engineering foundations, web development toolkit, delivery tools, and development workflow.',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
