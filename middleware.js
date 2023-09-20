import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname == "/") {
    if (request.cookies.get("accessToken")) {
      return NextResponse.redirect(new URL("/Dashboard/Types", request.url));
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/Dashboard")) {
    if (request.cookies.get("accessToken")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/", "/Dashboard/:path*"],
};
