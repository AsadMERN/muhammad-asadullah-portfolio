import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mianasad427.github.io/muhammad-asadullah-portfolio/'),
  title: 'Muhammad Asadullah | Software Engineer',
  description: 'Software Engineering portfolio of Muhammad Asadullah featuring 23+ production systems across mobile, full-stack, and AI platforms.',
  keywords: ['Muhammad Asadullah', 'Software Engineering', 'GCUF', 'Faisalabad', 'React Native', 'Next.js 14'],
  authors: [{ name: 'Muhammad Asadullah' }],
  creator: 'Muhammad Asadullah',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    title: 'Muhammad Asadullah | Software Engineer',
    description: 'Software Engineer portfolio featuring 23+ production web and mobile platforms.',
    siteName: 'Muhammad Asadullah Portfolio',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#020813' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
