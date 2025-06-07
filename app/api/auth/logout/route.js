import { cookies } from 'next/headers';
import { NextResponse } from "next/server";


export async function GET(req) {
  try{
    const response =new NextResponse(JSON.stringify("Logged Out Succefully" ),
      { status: 200 }
    );
    response.cookies.delete("token", { path: "/" });
    return response;
  }
  catch(error){
    return new NextResponse(JSON.stringify("Invalid Request"), { status: 500 });
  }
  
}
