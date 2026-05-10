import { cookies, headers } from "next/headers"

export type Locale = "en" | "ro"

const DEFAULT_LOCALE: Locale = "en"

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const headerStore = await headers()

  const preferredLocale = cookieStore.get("preferred-locale")?.value
  if (preferredLocale === "ro" || preferredLocale === "en") {
    return preferredLocale
  }

  const visitorCountry =
    cookieStore.get("visitor-country")?.value ??
    headerStore.get("x-vercel-ip-country")

  if (visitorCountry?.toUpperCase() === "RO") {
    return "ro"
  }

  return DEFAULT_LOCALE
}
