import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const domain = process.env.DOMAIN;

export default middleware = async (req) => {
  try {
    const url = req?.url;
    if (!url.includes("/dashboard")) return NextResponse.next();

    const token = cookies().get("token")?.value
    if(!token)  return NextResponse.redirect(`${domain}/login`);
    const res = await fetch(`${domain}/api/auth`, {
      method: "GET",
      cache: "no-store",
      headers:{
        "authorization":`Bearer ${token}`
      }
    });
    if (!res.ok) return NextResponse.redirect(`${domain}/login`);
    return NextResponse.next();
  } catch (error) {
    console.log(error?.message);
    return NextResponse.redirect(`${domain}/`);
  }
};
