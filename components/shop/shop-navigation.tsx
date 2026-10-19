import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ShopNavigation() {
  return <header className="store-header">
    <Link href="/" className="store-brand">Bevel Graphics</Link>
    <nav aria-label="Shop navigation">
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Journal</Link>
      <Link href="/" className="store-portfolio"><ArrowLeft size={15} /> Portfolio</Link>
    </nav>
  </header>
}

export function ShopFooter() {
  return <footer className="store-footer store-container">
    <Link href="/">Bevel Graphics</Link>
    <a href="mailto:bevel.graphics1@gmail.com">Product support</a>
    <Link href="/shop">All addons</Link>
  </footer>
}
