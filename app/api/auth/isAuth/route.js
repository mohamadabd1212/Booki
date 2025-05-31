import { cookies } from 'next/headers';


// Export GET handler
export async function GET(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    return new Response(JSON.stringify(null), { status: 401 });
  }

  try {
    return new Response(JSON.stringify("verified"), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify( null ), { status: 401 });
  }
}