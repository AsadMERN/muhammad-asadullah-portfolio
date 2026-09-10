import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Asadullah | Software Engineering Portfolio',
  description: 'Europass-style academic portfolio of Muhammad Asadullah, a Software Engineering graduate from Faisalabad, Pakistan.',
  keywords: ['Muhammad Asadullah', 'Software Engineering', 'GCUF', 'Faisalabad', 'Europass CV'],
  authors: [{ name: 'Muhammad Asadullah' }],
  creator: 'Muhammad Asadullah',
  openGraph: { type: 'profile', title: 'Muhammad Asadullah | Software Engineering Portfolio', description: 'Education, profile and contact information for Muhammad Asadullah.', siteName: 'Muhammad Asadullah Portfolio' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#061a33' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><div className="min-h-screen flex flex-col"><Navbar /><main className="flex-grow">{children}</main><Footer /></div></body></html>;
}
