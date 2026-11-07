import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { ShopNavigation, ShopFooter } from "@/components/shop/shop-navigation"
import { AURA_PATH, AURA_BLOG_PATH, AURA_DESCRIPTION, AURA_FAQS, AURA_ASSETS, AURA_STORES, AURA_UPDATED_AT, AURA_IMAGE_ROOT } from "@/lib/shop/product-aura"
import { getAbsoluteUrl, getBreadcrumbJsonLd, ORGANIZATION_ID, WEBSITE_ID, serializeJsonLd } from "@/lib/seo"
import "../store.css"
import { AuraCheckout } from "@/components/shop/aura-checkout"
import { checkoutAvailability } from "@/lib/shop/paypal"

export const dynamic = "force-dynamic"

const title = "Product Aura: Reactive Scattering Addon for Blender"
const description = "Create reactive product scenes in Blender with Product Aura. Mix two decoration sources, control the fill and explore ten included assets. Buy on Superhive or Gumroad."
export const metadata: Metadata = {
  title: { absolute: `${title} | Bevel Graphics` }, description,
  keywords: ["Product Aura", "Blender scattering addon", "reactive product scatter", "Blender product visualization", "Bevel Graphics", "Geometry Nodes decorations"],
  alternates: { canonical: AURA_PATH },
  openGraph: { title, description, type: "website", url: AURA_PATH, locale: "en_US", images: [{ url: `${AURA_IMAGE_ROOT}product-aura.webp`, width: 1920, height: 1080, alt: "Product Aura: live reactive scattering for Blender by Bevel Graphics" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${AURA_IMAGE_ROOT}product-aura.webp`] },
}

export default function ProductAuraPage() {
  const url = getAbsoluteUrl(AURA_PATH)
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description: AURA_DESCRIPTION, inLanguage: "en", dateModified: AURA_UPDATED_AT, isPartOf: { "@id": WEBSITE_ID }, publisher: { "@id": ORGANIZATION_ID }, mainEntity: { "@id": `${url}#software` } },
    { "@type": "SoftwareApplication", "@id": `${url}#software`, name: "Product Aura", url, description: AURA_DESCRIPTION, applicationCategory: "MultimediaApplication", softwareVersion: "0.18.3", softwareRequirements: "Blender 4.2 minimum; marketplace lists Blender 4.2-5.2 with Cycles or Eevee. Check the supplied version and platform requirements before purchase.", creator: { "@id": ORGANIZATION_ID }, publisher: { "@id": ORGANIZATION_ID }, image: getAbsoluteUrl(`${AURA_IMAGE_ROOT}product-aura.webp`), sameAs: AURA_STORES.map((store) => store.url), license: "https://www.gnu.org/licenses/gpl-3.0.html", mainEntityOfPage: { "@id": `${url}#webpage` }, featureList: ["Live Flow and Clear reactions", "Two decoration sources with independent size and rotation", "Ten bundled decoration assets", "Dense Fill and Maximum Fill presets", "Follow Mesh and Solid Envelope hero shapes", "Saved presets and repeatable layout seeds", "Automatic static decoration geometry updates", "No addon count cap when Count Protection is off"] },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: AURA_FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    getBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }, { name: "Product Aura", path: AURA_PATH }]),
  ] }
  return <div className="store-page">
    <a className="rd-skip" href="#main">Skip to content</a>
    <ShopNavigation />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <main id="main">
      <section className="aura-hero">
        <Image src={`${AURA_IMAGE_ROOT}hero.webp`} alt="Lemons and citrus slices scattered around a stylized house using Product Aura in Blender" fill priority sizes="100vw" />
        <div className="store-container aura-hero-copy">
          <p className="store-kicker">Bevel Graphics / Blender addon</p>
          <h1>Product <span>Aura.</span></h1>
          <p className="aura-hero-tagline">Scatter. React. Create.</p>
          <p className="aura-hero-summary">A world around your hero. Create live, reactive decoration layouts for product renders and creative scenes.</p>
          <div className="aura-actions"><a href="#buy" className="aura-button">Get Product Aura <ArrowUpRight size={18} /></a><a href="#included-assets" className="aura-link">See the 10 assets <ArrowDown size={16} /></a></div>
          <p className="aura-hero-note">Blender 4.2-5.2 / Cycles & Eevee</p>
        </div>
      </section>
      <div className="store-container">
        <div className="aura-facts" aria-label="Product Aura at a glance"><span><strong>10</strong> included assets</span><span><strong>2</strong> decoration slots</span><span><strong>Live</strong> product reactions</span><span><strong>Your</strong> models, too</span></div>
        <section className="aura-section" id="features">
          <p className="store-kicker">The addon</p>
          <h2>Give your product a world of its own.</h2>
          <p>{AURA_DESCRIPTION}</p>
          <p>Build citrus surrounds for a drink, add botanicals to a skincare shot, or combine glass and crystal around a perfume bottle. Shape the surrounding volume, change the ingredients, and keep your original product and source objects intact.</p>
          <div className="aura-features">
            <article><h3>A layout that reacts</h3><p>Move the hero and the live layout responds. Flow moves candidates away; Clear hides unsafe placements. Allow Shrinking lets nearby decorations shrink and recover.</p></article>
            <article><h3>Two ingredients, one scene</h3><p>Combine two included assets or use compatible objects from your scene. Control their size and rotation independently, with a repeatable seed for the overall layout.</p></article>
            <article><h3>Fill with intention</h3><p>Use Dense Fill and Maximum Fill as starting points. Adjust count, size, spacing and the aura region to find the balance between a rich surround and a readable product.</p></article>
          </div>
        </section>
        <figure className="aura-visual"><Image src={`${AURA_IMAGE_ROOT}live-product-reaction.webp`} alt="Product Aura live reaction controls with coffee beans surrounding an Audi wheel" width={1920} height={1080} sizes="(max-width: 1320px) 100vw, 1280px" /><figcaption>Live product reaction, shown around a wheel. Hero Clearance controls the space around the product; Follow Mesh can make room inside openings and recesses.</figcaption></figure>
        <section className="aura-section" id="included-assets">
          <p className="store-kicker">Inside the download</p>
          <h2>Ten ingredients. Your composition.</h2>
          <p>Every decoration below is included in the addon ZIP with UVs and self-contained materials. Choose from the panel or bring your own compatible objects.</p>
          <div className="aura-asset-grid">{AURA_ASSETS.map((asset) => <figure key={asset.image}><a href={`${AURA_IMAGE_ROOT}${asset.image}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${asset.name} render at full size`}><Image src={`${AURA_IMAGE_ROOT}${asset.image}`} alt={asset.alt} width={1024} height={1024} sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 240px" /></a><figcaption>{asset.name}</figcaption></figure>)}</div>
        </section>
        <figure className="aura-visual"><Image src={`${AURA_IMAGE_ROOT}mix-decorations.webp`} alt="Product Aura mixing two decoration sources around a stylized character" width={1920} height={1080} sizes="(max-width: 1320px) 100vw, 1280px" /><figcaption>Swap and mix decorations from the panel. The requested count is shared across both sources; the seeded mix is not a fixed 50/50 split.</figcaption></figure>
        <section className="aura-section">
          <p className="store-kicker">Art-direct the surround</p>
          <h2>More control over the space between.</h2>
          <p>Keep Solid Envelope for outer-shell protection, or choose Follow Mesh when openings and recesses should hold decorations. Save your settings as a preset, try New Variation, or duplicate the aura to compare compositions.</p>
          <Image className="aura-feature-image" src={`${AURA_IMAGE_ROOT}control-the-fill.webp`} alt="Product Aura Dense Fill and Maximum Fill controls with lemon and citrus slice decorations" width={1920} height={1080} sizes="(max-width: 1320px) 100vw, 1280px" />
        </section>
        <section className="aura-section">
          <h2>Start with your scene.</h2>
          <div className="aura-features">
            <article><h3>01. Install</h3><p>In Blender Preferences, open Extensions and choose Install from Disk. Select Product Aura.zip, enable the addon, then open N &gt; Product Aura in the 3D View.</p></article>
            <article><h3>02. Create</h3><p>Select your Hero Product, add an included decoration and choose Create Product Aura. Start with 500 decorations and adjust the aura region around your composition.</p></article>
            <article><h3>03. Shape</h3><p>Apply a fill preset, adjust the clearance and mix a second decoration. Refine your own lighting, camera and animation, then render with Cycles or Eevee.</p></article>
          </div>
          <Link className="aura-link" href={AURA_BLOG_PATH}>Read the Product Aura workflow guide <ArrowRight size={16} /></Link>
        </section>
        <section className="aura-section aura-faq" id="faq">
          <h2>Before you create.</h2>
          <p>Current release: 0.18.3. Count Protection caps requested and animated output at 2,000. Turning it off removes the old 20,000-item addon limit; native Blender limits and available memory still apply. Actual placement depends on space, source geometry and clearance. Save first and increase counts gradually.</p>
          {AURA_FAQS.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </section>
      </div>
      <section className="aura-buy" id="buy"><div className="store-container">
        <p className="store-kicker">Product Aura by Bevel Graphics</p>
        <h2>Make room for your next idea.</h2>
        <AuraCheckout available={checkoutAvailability()["product-aura"]} />
        <p>Get the Blender addon and all ten decoration assets. Choose your store for current pricing, checkout and delivery.</p>
        <div className="aura-actions">{AURA_STORES.map((store, index) => <a key={store.name} href={store.url} target="_blank" rel="noopener noreferrer" className={`aura-button ${index ? "aura-secondary" : ""}`}>Buy on {store.name}<ArrowUpRight size={18} /></a>)}</div>
        <p className="aura-store-note">Product Aura 0.18.3 requires Blender 4.2 or newer. Check the supplied version and platform requirements on your chosen store before purchasing.</p>
        <Link className="aura-link" href="/shop">Explore all Bevel Graphics addons <ArrowRight size={16} /></Link>
      </div></section>
    </main>
    <ShopFooter />
  </div>
}
