import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// These are our non-English locales
const locales = ['es', 'pt', 'ja', 'fr', 'de', 'id', 'hi', 'zh', 'ko'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for API routes, Next.js internal files, images, sitemap, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/images/') ||
    pathname.includes('/fonts/') ||
    pathname.includes('og-image') ||
    pathname.includes('sitemap') ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)
  ) {
    return NextResponse.next();
  }

  // Check if the URL already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If already visiting a locale, just proceed.
  if (pathnameHasLocale) return NextResponse.next();

  // If user visits the root page '/', redirect them to their native language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      // e.g. "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      const preferredLangs = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim().toLowerCase().substring(0, 2));
      
      for (const lang of preferredLangs) {
        if (locales.includes(lang)) {
          // Temporarily redirect them to their native language site.
          // Using 302 Found so search engines don't hardcode the redirect for English bots.
          const url = request.nextUrl.clone();
          url.pathname = `/${lang}`;
          return NextResponse.redirect(url);
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|_next|images).*)',
  ],
};
