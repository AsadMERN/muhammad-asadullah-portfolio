'use client';

import { motion } from 'framer-motion';

export default function Loading() {
	return (
		<div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 bg-transparent overflow-hidden">
			<motion.div
				className="h-full bg-gradient-to-r from-transparent via-[#55d9ff] to-[#8b7cff]"
				initial={{ x: '-100%' }}
				animate={{ x: '100%' }}
				transition={{
					repeat: Infinity,
					duration: 1,
					ease: 'easeInOut',
				}}
			/>
		</div>
	);
}