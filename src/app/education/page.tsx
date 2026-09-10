import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education | Muhammad Asadullah',
	description: 'Academic record of Muhammad Asadullah: BS Software Engineering, FSc Pre-Engineering, and Matric Science (Biology).',
};

export default function EducationPage() {
	return <Education />;
}
