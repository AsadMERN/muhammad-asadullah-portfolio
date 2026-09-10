import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Muhammad Asadullah | Software Engineering Graduate',
	description: 'Professional profile of Muhammad Asadullah, a Software Engineering graduate based in Faisalabad, Pakistan.',
};

export default function AboutPage() {
	return <About />;
}
