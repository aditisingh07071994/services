// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

export async function middleware(request) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  if (!token) {
    // If no token, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the token
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    
    // Check for admin role
    if (payload.role !== 'admin') {
      // If not admin, redirect to homepage
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    // If admin, allow the request to continue
    return NextResponse.next();

  } catch (err) {
    // If token is invalid (expired, etc.), redirect to login
    console.error('Middleware error:', err.message);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// This "matcher" tells the middleware to run ONLY on these paths
export const config = {
  matcher: [
    '/admin/:path*',       // Protect all admin pages
    '/api/admin/:path*'  // Protect all admin API routes
  ],
};