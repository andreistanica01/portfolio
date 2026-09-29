import { getStore } from "@netlify/blobs"
import type { Config, Context } from "@netlify/edge-functions"
import { getEdition } from "../../lib/shop/catalog"
import { BLOB_PROVIDER, DELIVERY_HEADER, RELEASE_STORE, privateDownloadHeaders } from "../../lib/shop/delivery"

export default async function download(request: Request, context: Context) {
  if (request.method !== "GET") {
    return new Response(null, { status: 405, headers: { ...privateDownloadHeaders, Allow: "GET" } })
  }

  // The Next.js route validates the signed receipt and current PayPal capture.
  // Keeping the bytes at the edge avoids the regular function response limit.
  const authorization = await context.next()
  if (!authorization.ok || authorization.headers.get(DELIVERY_HEADER) !== BLOB_PROVIDER) return authorization

  try {
    const payload = await authorization.json()
    const edition = getEdition(payload.edition)
    if (!edition || payload.edition !== new URL(request.url).searchParams.get("edition") ||
        !payload.key || payload.key !== Netlify.env.get(edition.blobKeyEnv)) {
      throw new Error("Invalid delivery configuration")
    }
    const file = await getStore({ name: RELEASE_STORE, consistency: "strong" }).get(payload.key, { type: "stream" })
    if (!file) throw new Error("Release unavailable")
    return new Response(file, { headers: {
      ...privateDownloadHeaders,
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${edition.filename}"`,
    } })
  } catch {
    return Response.json({ error: "Your download is temporarily unavailable. Contact bevel.graphics1@gmail.com with your PayPal receipt. Do not purchase again." }, {
      status: 502, headers: privateDownloadHeaders,
    })
  }
}

export const config: Config = { path: "/api/shop/download" }
