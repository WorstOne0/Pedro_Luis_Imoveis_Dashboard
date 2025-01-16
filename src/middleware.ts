// Next
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

const root = "/";
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isRoot = path === root;
  const isPublicRoute = publicRoutes.includes(path);

  const cookie2 = cookies().get("accessToken")?.value;
  console.log("asdaaaaaaaaaaa", cookie2);
  console.log("path", path);

  return NextResponse.next();

  if (isPublicRoute) return NextResponse.next();

  const cookie = cookies().get("accessToken")?.value;
  const session = verifyToken(cookie);

  // Redirect to /login if the user is not authenticated
  if (!session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isRoot) return NextResponse.redirect(new URL("/dashboard", req.nextUrl));

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
