# Reel Director direct shop

The landing page is `/shop/reel-director`. `/shop` redirects there. The portfolio navigation includes Shop, and the existing `reel.bevelgraphics.com` redirect points to the new page.

## Configuration status (30 September 2026)

- Dedicated live PayPal app created: `Bevel Graphics Reel Director`. Existing third-party apps were not modified.
- Production hosting moved to Netlify project `bevelgraphics`, linked to `andreistanica01/portfolio` on the `main` branch. The Vercel deployment remains available as a rollback while migration settles.
- `bevelgraphics.com` remains registered and DNS-hosted at Vercel. The apex ALIAS points to `apex-loadbalancer.netlify.com`, while `www` is a CNAME to `bevelgraphics.netlify.app`. The separate `reel.bevelgraphics.com` setup was preserved.
- Netlify issued a renewable Let's Encrypt certificate for `bevelgraphics.com` and `www.bevelgraphics.com`. Both names work over HTTPS, and `www` redirects to the apex domain.
- Netlify production config: `PAYPAL_ENVIRONMENT=live`, `SHOP_SITE_URL=https://bevelgraphics.com`, and `SHOP_CHECKOUT_ENABLED=false`.
- The dedicated PayPal Live client ID and secret are stored as protected, Production-only Netlify variables. A unique protected `SHOP_SESSION_SECRET` is also configured. Secret values were not written to this repository or local environment files.
- The creator confirmed Standard v0.0.4 and Pro v0.0.3. Both archives are uploaded to the private Netlify Blobs store `reel-director-releases`; authenticated read-back SHA-256 checks match the originals (141,845,903 bytes and 180,883,450 bytes respectively). They are not public assets or Git files.
- Production now has `SHOP_DOWNLOAD_PROVIDER=netlify-blobs`, `REEL_DIRECTOR_BLOB_KEY=standard/0.0.4/reel-director.zip` and `REEL_DIRECTOR_PRO_BLOB_KEY=pro/0.0.3/reel-director-pro.zip`. Deploy `6abc1dcc9296fc0009f6f3fb` published the edge delivery implementation successfully. Hosted authorization checks pass; a complete paid Sandbox download remains to be tested. Checkout remains disabled.
- The owner requested that personal seller name/address not be published. Both production environment fields are removed; `/shop/terms` uses the Bevel Graphics brand and existing support email only. The code no longer reads those fields or makes them technical checkout prerequisites. This privacy preference does not establish compliance with applicable seller-disclosure requirements; those remain a separate matter for professional review.
- The existing PayPal Default Application sandbox credentials and a separate session secret are protected in Netlify's `branch:codex/paypal-sandbox` context only. Live credentials are unchanged. The test branch uses `PAYPAL_ENVIRONMENT=sandbox`, checkout enabled, and the exact origin `https://codex-paypal-sandbox--bevelgraphics.netlify.app`.
- Sandbox delivery points only to synthetic archives at `sandbox/2026-09-30/standard-test.zip` and `sandbox/2026-09-30/pro-test.zip` in the private store. They contain a test notice and padding, not paid addon code. Their sizes exceed the real releases: 141,846,245 and 180,883,792 bytes. Keep these branch overrides separate from production.
- Hosted sandbox order creation succeeds for both editions and redirects to `www.sandbox.paypal.com`. Cancelling a Standard order returns to the cancellation page; checking that unpaid order reports payment not confirmed without unlocking a download. Anonymous downloads return 401 for both editions.
- Sandbox deploy `6abd2a50fd279a5549f59074` (commit `82372e5`) serves `X-Robots-Tag: noindex, nofollow, nosnippet` and a robots file disallowing all paths. The Netlify TOML header alone did not cover Next.js pages, so the test branch applies the header in Next.js too. Do not merge sandbox-only configuration into production.
- End-to-end payment approval, actual full-sized ZIP delivery, interrupted-payment recovery and refund tests remain pending. PayPal Developer signed out before access to the sandbox buyer account; no sandbox payment or live charge was completed. Never use live credentials in a sandbox configuration or expose them to preview deployments.
- Local checkout tests cover payment validation, private file availability, enablement gates, edge authorization, large streams and non-publication of legacy personal seller fields. These do not confirm PayPal connectivity or full hosted delivery readiness.

## Prices and content

`lib/shop/catalog.ts` is the source for both displayed prices and the server-side PayPal order amounts. Superhive prices checked on 27 September 2026: Standard USD 12 (regular USD 16), Pro USD 16.50 (regular USD 22), a 25% promotion. These are a snapshot, not a live marketplace feed. Update both editions, sale copy and prices when the offer ends. Never take a price from the browser.

Product facts come from the current creator listing, local addon documentation and existing portfolio articles. Compatibility: Blender 4.2-5.2; Wool Dynamics requires Blender 5.2 and its optional dynamics are experimental. The local Pro manifest specifies GPL-3.0-or-later. Product images are WebP, including the on-demand showreel.

## Connect PayPal

Use `.env.example` for the configuration fields. In deployment, enter secrets into the hosting provider's environment settings, not source files or chat. No live account credentials are included in this repository.

1. Create a REST app under your own PayPal Business account in the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications). Start with Sandbox credentials.
2. Set `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_ENVIRONMENT=sandbox` and a random `SHOP_SESSION_SECRET` of at least 32 characters. For example, `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"` generates a secret locally.
3. Set `SHOP_SITE_URL` to the exact origin used by the customer. Locally this is `http://127.0.0.1:3000`. In production use the canonical HTTPS domain, `https://bevelgraphics.com`. The previous site-wide `bevel.graphics` setting was corrected to the verified live domain. Do not use a path or a different alias: origin checks and PayPal return URLs must match.
4. Review `/shop/terms`, support coverage, applicable seller/consumer disclosures and the correct tax-inclusive selling totals for the seller's circumstances before accepting payments. The current page deliberately does not publish personal seller details at the owner's request; it must not be presented as a verified compliant legal disclosure. PayPal is a processor; this integration does not calculate VAT, issue tax invoices, or establish the seller's Romanian registration status.
5. On Netlify, use the private `reel-director-releases` Blobs store and the provider/key variables listed above. The SDK uses hosting-provided credentials; never expose a storage token to the browser. The download edge function must be deployed alongside the Next.js routes. Other hosts can still use `REEL_DIRECTOR_DOWNLOAD_URL`, `REEL_DIRECTOR_PRO_DOWNLOAD_URL` and optional `SHOP_DOWNLOAD_BEARER_TOKEN` for stable private HTTPS endpoints, but that fallback is not suitable for these large ZIPs on ordinary Netlify Functions. Do not place release ZIPs in `public/` or commit them.
6. Set `SHOP_CHECKOUT_ENABLED=true`, restart, and complete a Sandbox purchase of each edition using a separate Sandbox buyer. Verify the actual correct ZIP downloads, cancel/retry behavior, and that no download works before payment. Test an issued refund and confirm it blocks new downloads.
7. Switch to the app's Live credentials and `PAYPAL_ENVIRONMENT=live` only after account, delivery and selling requirements are ready. Sandbox checkout is visibly marked. Live checkout requires HTTPS. Missing credentials, a strong session secret or a configured edition file keep direct checkout unavailable; the actual Superhive listing remains a purchasing fallback.

The confirmed release files are `Desktop/RD/Reel Director - Blender Addon v0.0.4.zip` and `Desktop/RD PRO/Reel Director PRO - Blender Addon v0.0.3.zip`. Private upload verification copies live only in ignored `.netlify/release-verification/`.

## Payment and delivery design

- The buyer chooses an edition and accepts purchase terms. A same-origin POST creates a PayPal CAPTURE order with the catalog amount and a digital-goods line item. A strongly consistent private-blob metadata lookup must succeed first (or a HEAD request for the other-host HTTPS fallback).
- The site redirects to PayPal's hosted approval page. Card details never pass through this site; guest/card eligibility is controlled by PayPal.
- PayPal returns the buyer to `/shop/reel-director/checkout`. A signed HttpOnly cookie binds the order, edition, price, currency and payment environment. A POST verifies those details with PayPal and captures an approved order using a deterministic idempotency key. Pending, mismatched or failed payments never unlock a file.
- A second signed HttpOnly cookie grants download access for 7 days in that browser. Each download rechecks the capture status with PayPal, including amount and currency, so refunded payments are rejected. The private file is streamed server-side without exposing its storage URL or bearer token.
- PayPal stores the transaction record. This initial implementation has no separate customer account, order database, automatic email delivery, tax invoice generator or webhook fulfillment. The buyer returns to the verified receipt page to download. If a callback or network response fails, retrying the same order recovers the capture without charging twice. The checkout session lasts 3 hours; later recovery, cross-device access and updates are handled by seller support using the PayPal receipt. The UI explains this.
- Netlify's ordinary Functions have a 20 MB streamed response limit, smaller than either release. The `/api/shop/download` edge function calls the Next.js route to check the signed receipt and current PayPal capture, validates the authorized edition/key, then streams the private Blob directly at the edge. Missing or mismatched authorization never reads a release. All download responses are private and non-cacheable; no public file URL is issued. Validate full hosted downloads before enabling payments, and monitor bandwidth/credit consumption.

## Verification

`node --test tests/shop.test.mjs` runs isolated mocked PayPal and storage tests. It does not move money or contact PayPal. `node scripts/check-reel-ui.mjs` uses a running local server for responsive screenshots and interaction checks; Playwright must be installed or available from the bundled workspace runtime.

Production verification on 29 September 2026 confirmed that `https://bevelgraphics.com`, the secure `www` redirect, and `https://bevelgraphics.com/shop/reel-director` are served by Netlify. Netlify reports HTTPS enabled for both custom domains. Deploy `6abc1dcc9296fc0009f6f3fb` (commit `0f92bd0`) published the private edge delivery update. Both edition download routes return 401 for anonymous and forged-receipt requests, the edge route rejects POST with 405, and responses are non-cacheable. The shop returns 200 and still shows direct checkout as unavailable. Sandbox purchase tests remain required before technical activation; removing personal fields is not a finding of legal readiness.

The full Netlify build succeeds in the cloud. A local Windows Netlify build hit OS symbolic-link permission restrictions; the edge function was separately packaged successfully using Netlify's official edge bundler. Its relative TypeScript imports require explicit `.ts` extensions.

Before live activation, a real Sandbox transaction and hosted ZIP delivery test are still required. Local mocked tests do not establish account eligibility or production payment readiness.

On 30 September 2026, `npm run test:shop` passed all 23 tests, `npm exec -- tsc --noEmit` passed, and `npm run lint` passed. The hosted sandbox checks listed above are partial integration checks, not completed purchases. Production remains disabled at deploy `6abcddc67aca3000086806e5` (commit `41da330`). The next step is to use an existing personal sandbox buyer account from the PayPal Developer dashboard, approve a sandbox purchase of each edition, and verify the received test ZIPs against these hashes:

- Standard SHA-256: `AB5B3AF264CAC40C175A9EC1D1232358559D8C62DAC38E6278249EC816A800F7`
- Pro SHA-256: `89387E254E4B14938BA639BE60C6031518896E14F6BBAECCAABEB04C806E6748`

## References

- [Current creator listing](https://superhivemarket.com/products/reel-director-automate-instagram-tiktok-yt-shorts-)
- [PayPal Standard integration](https://developer.paypal.com/studio/checkout/standard/integrate)
- [PayPal Orders API](https://developer.paypal.com/api/orders/v2)
- [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/)
- [Netlify Functions limits](https://docs.netlify.com/build/functions/configuration/)
- [Netlify Edge Functions limits](https://docs.netlify.com/build/edge-functions/limits/)
- [PayPal Romania User Agreement](https://www.paypal.com/ro/legalhub/paypal/useragreement-full)
- [Stripe Services Agreement](https://stripe.com/en-ro/legal/ssa)
- [Romanian OUG 44/2008](https://legislatie.just.ro/Public/DetaliiDocument/91808)

Having a PayPal Business account does not by itself settle registration, tax, invoicing or consumer obligations. Obtain Romanian accounting/legal guidance for the actual software sales arrangement. Stripe has not been added to this version.
