const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: isGitHubPages ? 'export' : undefined,
	basePath: isGitHubPages ? '/muhammad-asadullah-portfolio' : '',
	assetPrefix: isGitHubPages ? '/muhammad-asadullah-portfolio/' : '',
	trailingSlash: false,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: isGitHubPages,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/webp', 'image/avif'],
	},
	headers: async () => {
		if (isDev) {
			return [];
		}
		return [
			{
				source: '/:path*',
				headers: [
					{ key: 'X-DNS-Prefetch-Control', value: 'on' },
					{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
					{ key: 'X-XSS-Protection', value: '1; mode=block' },
					{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
				],
			},
			{
				source: '/_next/static/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
		];
	},
	experimental: {
		scrollRestoration: true,
	},
};

module.exports = nextConfig;
