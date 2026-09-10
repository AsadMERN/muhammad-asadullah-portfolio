import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact | Muhammad Asadullah',
	description: 'Contact Muhammad Asadullah by email, phone, or WhatsApp in Faisalabad, Pakistan.',
};

export default function ContactPage() {
	return <Contact />;
}
