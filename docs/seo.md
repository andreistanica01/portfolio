# Search and AI discovery

The public canonical origin is `https://bevelgraphics.com`. The site serves English to every visitor, including visitors in Romania. There are no Romanian URLs or language alternates to submit for indexing.

## Content and structured data

- The root identifies Bevel Graphics consistently with `/#organization` and `/#website`, connected to its actual Instagram, ArtStation and Superhive profiles.
- Reel Director's product page describes Standard and Pro separately. Its `SoftwareApplication` entities share the catalog used by checkout. Direct-purchase `Offer` markup is emitted only for an available live edition; disabled and sandbox checkout must not advertise a live offer.
- Product descriptions, comparison details and FAQ answers are present in the initial HTML. Feature tabs remain interactive, and article FAQs use native disclosure controls.
- Blog articles show the publisher, publication date and any real update date. The two Reel Director articles link to the product page and identify the edition discussed in structured data.
- The sitemap contains canonical public pages and image URLs. Unknown modification dates are omitted. Set `updatedAt` when materially updating an article; do not change dates just to imply freshness.
- Checkout and terms pages have explicit `noindex` metadata. API routes are disallowed in robots.txt and send an `X-Robots-Tag` header. These crawl controls are not access controls; payment and download authorization is handled separately.
- The `*` robots rule permits crawling of public content, including search crawlers used by AI services. No special AI file, invented review, rating or unsupported product claim is used.

## Verification

Run `npm run build` and start the production server with `npm start`. Then run `npm run test:seo` (or set `SEO_TEST_URL` to another local preview origin). The script uses Playwright, checking all sitemap pages, metadata, canonical URLs, structured data against actual HTML, FAQs with JavaScript disabled, images, internal links, redirects, noindex rules and desktop/mobile product interactions. Screenshots are saved under ignored `.reel-qa/`.

Keep `npx tsc --noEmit` as a separate check because this project's existing Next.js config skips type checking during builds.

## After deployment

1. Verify the domain in Google Search Console and Bing Webmaster Tools, using the owner's account. Submit `https://bevelgraphics.com/sitemap.xml` in both.
2. Inspect the live product page and the Wool Dynamics article in Search Console. Check rendered content and the chosen canonical, then request indexing for the updated URLs.
3. Run Google's Rich Results Test or Schema.org Validator on the public URLs. Accurate SoftwareApplication and FAQ markup does not by itself establish eligibility for every rich-result type. Do not add fictitious ratings to satisfy optional enhancements.
4. Review indexing, search impressions, clicks and available AI citation reports over time. Code checks cannot establish that a search engine has indexed the site or will cite it.
5. Keep the dated Superhive promotion in the Wool Dynamics article and the prices in `lib/shop/catalog.ts` current when the promotion changes. Pricing verified on 29 September 2026: Standard $12 / regular $16; Pro $16.50 / regular $22.

References: [Google's AI feature guidance](https://developers.google.com/search/docs/appearance/ai-features), [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Reel Director listing](https://superhivemarket.com/products/reel-director-automate-instagram-tiktok-yt-shorts-).
