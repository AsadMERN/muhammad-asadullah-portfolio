import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Security and lightweight rate-limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 180;
const ipRequestMap = new Map<string, { count: number; timestamp: number }>();

function cleanupExpiredEntries(now: number) {
	if (ipRequestMap.size > 2000) {
		for (const [ip, data] of ipRequestMap.entries()) {
			if (now - data.timestamp > RATE_LIMIT_WINDOW) {
				ipRequestMap.delete(ip);
			}
		}
	}
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Ignore static assets, next internal files, and public images
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/projects') ||
		pathname.startsWith('/favicon.ico') ||
		pathname.endsWith('.webp') ||
		pathname.endsWith('.png') ||
		pathname.endsWith('.jpg') ||
		pathname.endsWith('.svg') ||
		pathname.endsWith('.css') ||
		pathname.endsWith('.js')
	) {
		return NextResponse.next();
	}

	const response = NextResponse.next();

	// Security Headers
	response.headers.set('X-DNS-Prefetch-Control', 'on');
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

	// Soft rate limiting
	const ip = request.ip || 'anonymous-client';
	const now = Date.now();
	cleanupExpiredEntries(now);

	const requestData = ipRequestMap.get(ip) || { count: 0, timestamp: now };
	if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
		requestData.count = 0;
		requestData.timestamp = now;
	}

	requestData.count++;
	ipRequestMap.set(ip, requestData);

	if (requestData.count > MAX_REQUESTS) {
		return new NextResponse('Too Many Requests', {
			status: 429,
			headers: {
				'Retry-After': '60',
				'Content-Type': 'text/plain',
			},
		});
	}

	// Prevent common attack patterns
	const lowerUrl = pathname.toLowerCase();
	const blockedPatterns = ['/wp-admin', '/wp-login', '/admin', '.php', '.env'];
	if (blockedPatterns.some((pattern) => lowerUrl.includes(pattern))) {
		return NextResponse.rewrite(new URL('/not-found-trigger', request.url));
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!_next/static|_next/image|favicon.ico).*)',
	],
};