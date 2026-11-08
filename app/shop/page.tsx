import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ShopNavigation, ShopFooter } from "@/components/shop/shop-navigation"
import { REEL_DIRECTOR_PATH, REEL_EDITIONS, formatPrice } from "@/lib/shop/catalog"
import { AURA_PATH, AURA_IMAGE_ROOT } from "@/lib/shop/product-aura"
import { getAbsoluteUrl, getBreadcrumbJsonLd, serializeJsonLd } from "@/lib/seo"
import "./store.css"

const title = "Blender Addons: Capture, Scattering & Animation"
const description = "Explore Blender to OBS, Product Aura and Reel Director by Bevel Graphics: clean viewport capture, reactive scattering and scene animation tools."
export const metadata: Metadata = {
  title: { absolute: `${title} | Bevel Graphics` }, description,
  alternates: { canonical: "/shop" },
  openGraph: { title, description, url: "/shop", type: "website", images: ["/images/product-aura/product-aura.webp"] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/product-aura/product-aura.webp"] },
}

export default function ShopPage() {
  const products = [
    { name: "Blender to OBS", path: "/shop/blender-to-obs", image: "/images/blender-to-obs/cover.webp", tag: "Clean viewport capture", text: "Keep your working tools while controlling the audience view. Capture your viewport and separate Blender editors in OBS.", detail: "Available on Superhive" },
    { name: "Product Aura", path: AURA_PATH, image: `${AURA_IMAGE_ROOT}product-aura.webp`, tag: "Reactive scattering", text: "Build a world around your hero. Live decoration layouts, two asset slots, and ten included ingredients.", detail: "Available on Superhive & Gumroad" },
    { name: "Reel Director", path: REEL_DIRECTOR_PATH, image: "/images/secondary/reel-director-thumbnail.webp", tag: "Animation & scene breakdowns", text: "Turn finished Blender scenes into new content with camera moves, clay renders and creative surface tools.", detail: `Standard ${formatPrice(REEL_EDITIONS[0].price)} / Pro ${formatPrice(REEL_EDITIONS[1].price)}` },
  ]
  return <div className="store-page">
    <ShopNavigation />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
      "@context": "https://schema.org", "@graph": [
        { "@type": "CollectionPage", "@id": getAbsoluteUrl("/shop#webpage"), url: getAbsoluteUrl("/shop"), name: title, description,
          mainEntity: { "@type": "ItemList", itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: getAbsoluteUrl(product.path) })) } },
        getBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }]),
      ],
    }) }} />
    <main className="store-container store-index">
      <p className="store-kicker">Bevel Graphics / Creator tools</p>
      <h1>Blender addons.</h1>
      <p className="store-intro">Made for the scenes you want to create next.</p>
      <div className="store-products">
        {products.map((product, index) => <article key={product.path} className="store-product">
          <Link href={product.path} className="store-product-image" aria-label={`Explore ${product.name}`}>
            <Image src={product.image} alt={`${product.name} Blender addon by Bevel Graphics`} width={1920} height={1080} priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" />
          </Link>
          <div className="store-product-copy">
            <p className="store-kicker">{product.tag}</p>
            <h2><Link href={product.path}>{product.name}<ArrowUpRight size={25} /></Link></h2>
            <p>{product.text}</p>
            <span>{product.detail}</span>
          </div>
        </article>)}
      </div>
    </main>
    <ShopFooter />
  </div>
}
