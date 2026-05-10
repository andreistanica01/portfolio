import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const GEO_COOKIE_MAX_AGE = 60 * 60 * 24 * 30
const SUPPORTED_LOCALES = new Set(["en", "ro"])

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  const country = request.headers.get("x-vercel-ip-country")
  const region = request.headers.get("x-vercel-ip-country-region")
  const city = request.headers.get("x-vercel-ip-city")
  const existingLocale = request.cookies.get("preferred-locale")?.value
  const localeOverride = request.nextUrl.searchParams.get("lang")

  if (localeOverride && SUPPORTED_LOCALES.has(localeOverride)) {
    response.cookies.set("preferred-locale", localeOverride, {
      path: "/",
      maxAge: GEO_COOKIE_MAX_AGE,
      sameSite: "lax",
    })
  } else if (!existingLocale || !SUPPORTED_LOCALES.has(existingLocale)) {
    const autoDetectedLocale = country?.toUpperCase() === "RO" ? "ro" : "en"

    response.cookies.set("preferred-locale", autoDetectedLocale, {
      path: "/",
      maxAge: GEO_COOKIE_MAX_AGE,
      sameSite: "lax",
    })
  }

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
