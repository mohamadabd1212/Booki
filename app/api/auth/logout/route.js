import { cookies } from 'next/headers';

// Export GET handler
export async function GET(req) {
  // Prepare to delete the 'token' cookie
  const cookieHeaders = new Headers();

  // Set the cookie to expire immediately, effectively deleting it
  cookieHeaders.append('Set-Cookie', 'token=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict');

  // Respond with a success message indicating the cookie has been removed
  return new Response(JSON.stringify({ message: "Token has been removed" }), {
    status: 200,
    headers: cookieHeaders, // This removes the cookie in the browser
  });
}
