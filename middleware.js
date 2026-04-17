import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/content-generator.html') {
    const token = request.nextUrl.searchParams.get('token');
    if (token !== 'ga-tools-2026') {
      return new NextResponse('Niet toegestaan', { status: 401 });
    }
  }

  return NextResponse.next();
}
