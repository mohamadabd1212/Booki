import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
const VERIFIED_CLAIM = 'http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor';

async function verifyToken(token) {
  try {
    return await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
  } catch {
    return null;
  }
}

function clearCookies(response, cookieNames) {
  cookieNames.forEach(name =>
    response.cookies.set(name, '', {
      maxAge: 0,
      path: '/',
    })
  );
}

export async function middleware(req) {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get('token');
  const otpTokenCookie = cookieStore.get('otp_token');
  const resetTokenCookie = cookieStore.get('reset');
  const pathname = req.nextUrl.pathname;

  const tokensPresent = [tokenCookie, otpTokenCookie, resetTokenCookie].filter(Boolean);
  const response = NextResponse.next();

  if (tokensPresent.length > 1) {
    clearCookies(response, ['token', 'otp_token', 'reset']);
    return NextResponse.redirect(new URL('/un/login', req.url));
  }

  const isAuthPage = ['/un/login', '/un/register'].some(path => pathname.startsWith(path));
  const isOtpPage = pathname.startsWith('/un/otpValidatePassword');
  const isResetPage = pathname.startsWith('/un/resetPassword');
  const isConfirmEmailPage = pathname.startsWith('/User/VerifyEmail');
  const isProtectedPage = pathname.startsWith('/User') || pathname.startsWith('/Admin');

  async function verifyOrClear(tokenCookie) {
    if (!tokenCookie) return null;
    const decoded = await verifyToken(tokenCookie.value);
    if (!decoded) {
      clearCookies(response, ['token', 'otp_token', 'reset']);
      return null;
    }
    return decoded;
  }

  // OTP page requires valid otp_token
  if (isOtpPage) {
    const decoded = await verifyOrClear(otpTokenCookie);
    if (!decoded) return NextResponse.redirect(new URL('/un/login', req.url));
    return response;
  }

  // Reset page requires valid reset token
  if (isResetPage) {
    const decoded = await verifyOrClear(resetTokenCookie);
    if (!decoded) return NextResponse.redirect(new URL('/un/login', req.url));
    return response;
  }

  // Auth pages
  if (isAuthPage) {
    clearCookies(response, ['otp_token', 'reset']);

    if (tokenCookie) {
      const decoded = await verifyOrClear(tokenCookie);
      if (!decoded) return response; // ✅ Just stay on login page after clearing

      const roles = decoded.payload[ROLE_CLAIM] || [];
      const role = Array.isArray(roles) ? roles[0] : roles;
      return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
    }
    return response;
  }

  // Protected pages
  if (isProtectedPage) {
    const decoded = await verifyOrClear(tokenCookie);
    if (!decoded) return NextResponse.redirect(new URL('/un/login', req.url));

    const roles = decoded.payload[ROLE_CLAIM] || [];
    const role = Array.isArray(roles) ? roles[0] : roles;

    if (isConfirmEmailPage) {
      const isVerified = decoded.payload[VERIFIED_CLAIM];
      if (isVerified === 'True') {
        return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
      }
      return response;
    }

    // Role-based restriction
    if (
      (pathname.startsWith('/Admin') && role !== 'Admin') ||
      (pathname.startsWith('/User') && role !== 'User')
    ) {
      return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
    }

    return response;
  }

  return response;
}
