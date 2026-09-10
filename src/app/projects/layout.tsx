import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Muhammad Asadullah',
  description: 'Live development work and clearly labelled practice concepts by Software Engineering graduate Muhammad Asadullah.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
