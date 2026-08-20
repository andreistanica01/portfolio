import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const GEO_COOKIE_MAX_AGE = 60 * 60 * 24 * 30
const DEFAULT_LOCALE = "en"

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  const country = request.headers.get("x-vercel-ip-country")
  const region = request.headers.get("x-vercel-ip-country-region")
  const city = request.headers.get("x-vercel-ip-city")
  response.cookies.set("preferred-locale", DEFAULT_LOCALE, {
    path: "/",
    maxAge: GEO_COOKIE_MAX_AGE,
    sameSite: "lax",
  })

  if (country) {
    response.cookies.set("visitor-country", country, {
      path: "/",
      maxAge: GEO_COOKIE_MAX_AGE,
      sameSite: "lax",
    })
  }

  if (region) {
    response.cookies.set("visitor-region", region, {
      path: "/",
      maxAge: GEO_COOKIE_MAX_AGE,
      sameSite: "lax",
    })
  }

  if (city) {
    response.cookies.set("visitor-city", city, {
      path: "/",
      maxAge: GEO_COOKIE_MAX_AGE,
      sameSite: "lax",
    })
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
