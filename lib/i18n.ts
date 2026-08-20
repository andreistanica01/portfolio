export type Locale = "en" | "ro"

const DEFAULT_LOCALE: Locale = "en"

export async function getRequestLocale(): Promise<Locale> {
  return DEFAULT_LOCALE
}
