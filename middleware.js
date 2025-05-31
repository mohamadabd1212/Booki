import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

async function verifyToken(token) {
  try {
    return await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
  } catch (error) {
    return null;
  }
}

function clearAllCookies(response) {
  response.cookies.set('token', '', { maxAge: 0 });
  response.cookies.set('otp_token', '', { maxAge: 0 });
  response.cookies.set('reset', '', { maxAge: 0 });
}

function clearOtpResetCookies(response) {
  response.cookies.set('otp_token', '', { maxAge: 0 });
  response.cookies.set('reset', '', { maxAge: 0 });
}

export async function middleware(req) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  const otpToken = cookieStore.get('otp_token');
  const resetToken = cookieStore.get('reset');
  const pathname = req.nextUrl.pathname;

  const tokensPresent = [token, otpToken, resetToken].filter(Boolean);
  if (tokensPresent.length > 1) {
    const response = NextResponse.redirect(new URL('/un/login', req.url));
    clearAllCookies(response);
    return response;
  }

  const response = NextResponse.next();

  const isAuthPage = ['/un/login', '/un/register'].some(path => pathname.startsWith(path));
  const isOtpPage = pathname.startsWith('/un/otpValidatePassword');
  const isResetPage = pathname.startsWith('/un/resetPassword');
  const isConfirmEmailPage = pathname.startsWith('/User/VerifyEmail');

  // 🔐 OTP page check
  if (isOtpPage) {
    if (!otpToken || !(await verifyToken(otpToken.value))) {
      clearAllCookies(response);
      return NextResponse.redirect(new URL('/un/login', req.url));
    }
    return response;
  }

  // 🔐 Reset page check
  if (isResetPage) {
    if (!resetToken || !(await verifyToken(resetToken.value))) {
      clearAllCookies(response);
      return NextResponse.redirect(new URL('/un/login', req.url));
    }
    return response;
  }

  // 🛂 Auth pages: clear otp/reset, and redirect if already logged in
  if (isAuthPage) {
    clearOtpResetCookies(response);

    if (token) {
      const decoded = await verifyToken(token.value);
      if (decoded) {
        const roles = decoded.payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || [];
        const role = Array.isArray(roles) ? roles[0] : roles;
        return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
      } else {
        clearAllCookies(response);
        return NextResponse.redirect(new URL('/un/login', req.url));
      }
    }

    return response;
  }

  // 🔐 Confirm Email page check (check Verified payload)
  

  // 🛂 Protected area check
  if (!token && (pathname.startsWith('/User') || pathname.startsWith('/Admin'))) {
    clearAllCookies(response);
    return NextResponse.redirect(new URL('/un/login', req.url));
  }

  if (token) {
    const decoded = await verifyToken(token.value);
    if (!decoded) {
      clearAllCookies(response);
      return NextResponse.redirect(new URL('/un/login', req.url));
    }

    const roles = decoded.payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || [];
    const role = Array.isArray(roles) ? roles[0] : roles;

    const roleRoutes = {
      Admin: '/Admin',
      User: '/User',
    };

    for (const [r, pathPrefix] of Object.entries(roleRoutes)) {
      if (pathname.startsWith(pathPrefix) && r !== role) {
        return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
      }
    }
    if (isConfirmEmailPage && token) {
      const decoded = await verifyToken(token.value);
  
      if (!decoded) {
        clearAllCookies(response);
        return NextResponse.redirect(new URL('/un/login', req.url));
      }
  
      // Check if the "Verified" field in the JWT payload is true
      const isVerified = decoded.payload['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
  
      if (isVerified === "True") {
        // If Verified is true, redirect to user dashboard (or any protected route)
        return NextResponse.redirect(new URL(`/${role}/dashboard`, req.url));
      }
  
      // Allow access to the confirmEmail page if Verified is false
      return response;
    }
  }

  return response;
}
