import AboutView from '@/components/views/AboutView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About Muhammad Asadullah | Software Engineer',
	description: 'Professional profile of Muhammad Asadullah, a Software Engineering graduate from GCUF based in Faisalabad, Pakistan.',
};

export default function AboutPage() {
	return <AboutView />;
}
