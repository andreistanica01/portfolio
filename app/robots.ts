import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/content"

export default function robots(): MetadataRoute.Robots {
  if (process.env.PAYPAL_ENVIRONMENT === "sandbox") {
    return { rules: { userAgent: "*", disallow: "/" } }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
    host: SITE_CONFIG.siteUrl,
  }
}
