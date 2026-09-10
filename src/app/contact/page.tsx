import ContactView from '@/components/views/ContactView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Muhammad Asadullah | Software Engineer',
	description: 'Get in touch with Muhammad Asadullah via verified contact form, direct email, or instant WhatsApp for engineering roles and collaborations.',
};

export default function ContactPage() {
	return <ContactView />;
}
