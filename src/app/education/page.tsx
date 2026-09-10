import EducationView from '@/components/views/EducationView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education & Qualifications | Muhammad Asadullah',
	description: 'Academic credentials of Muhammad Asadullah: BS Software Engineering (GCUF), FSc Pre-Engineering, and Matric Science.',
};

export default function EducationPage() {
	return <EducationView />;
}
