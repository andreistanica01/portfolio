import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen } from "lucide-react"
import { ShopNavigation, ShopFooter } from "@/components/shop/shop-navigation"
import { OBS_PATH, OBS_BLOG_PATH, OBS_IMAGE, OBS_DESCRIPTION, OBS_FAQS, OBS_STEPS, OBS_STORE, OBS_DOCS } from "@/lib/shop/blender-to-obs"
import { getAbsoluteUrl, getBreadcrumbJsonLd, ORGANIZATION_ID, serializeJsonLd } from "@/lib/seo"
import "../store.css"
import "./obs.css"

const title = "Blender to OBS: Clean Viewport Capture Addon"
export const metadata: Metadata = {
  title: { absolute: `${title} | Bevel Graphics` }, description: OBS_DESCRIPTION,
  alternates: { canonical: OBS_PATH },
  openGraph: { title, description: OBS_DESCRIPTION, url: OBS_PATH, type: "website", images: [{ url: OBS_IMAGE, width: 2000, height: 1000, alt: "Blender to OBS clean viewport capture" }] },
  twitter: { card: "summary_large_image", title, description: OBS_DESCRIPTION, images: [OBS_IMAGE] },
}

export default function BlenderToObsPage() {
  const url = getAbsoluteUrl(OBS_PATH)
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "SoftwareApplication", "@id": `${url}#software`, name: "Blender to OBS", url, description: OBS_DESCRIPTION, softwareVersion: "0.12.2", applicationCategory: "MultimediaApplication", operatingSystem: "Windows x64; separate experimental Apple Silicon preview", softwareRequirements: "Windows: Blender 4.5 and 5.0-5.3 families with Vulkan; OBS 32.1.2 tested. Experimental Mac preview: Blender 5.2/5.3.", creator: { "@id": ORGANIZATION_ID }, image: getAbsoluteUrl(OBS_IMAGE), sameAs: [OBS_STORE], license: "https://www.gnu.org/licenses/gpl-3.0.html" },
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description: OBS_DESCRIPTION, datePublished: "2026-11-08", dateModified: "2026-11-08", inLanguage: "en", mainEntity: { "@id": `${url}#software` } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: OBS_FAQS.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    getBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }, { name: "Blender to OBS", path: OBS_PATH }]),
  ] }
  return <div className="store-page obs-page">
    <a className="rd-skip" href="#main">Skip to content</a><ShopNavigation />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <main id="main">
      <header className="store-container obs-intro">
        <p className="store-kicker">Bevel Graphics / Capture tools</p>
        <h1>Blender to OBS.</h1>
        <p className="store-intro">Keep your tools. Clean up the audience view.</p>
        <p>{OBS_DESCRIPTION}</p>
        <div className="aura-actions"><a className="aura-button" href={OBS_STORE} target="_blank" rel="noopener noreferrer">Buy on Superhive <ArrowUpRight size={18} /></a><a className="aura-link" href={OBS_DOCS} target="_blank" rel="noopener noreferrer"><BookOpen size={18} /> Setup guide</a></div>
        <p className="aura-store-note">Version 0.12.2 / Windows x64 + Vulkan / Separate experimental Mac preview</p>
      </header>
      <div className="store-container">
        <Image className="obs-cover" src={OBS_IMAGE} alt="Blender to OBS clean viewport capture addon with a Blender scene" width={2000} height={1000} priority sizes="(max-width: 1320px) 100vw, 1280px" />
        <section className="aura-section"><h2>Your workspace is not the presentation.</h2><p>Selections, gizmos and panels help you create. They are not always what your viewers need to see. Blender to OBS separates output visibility from the working interface, so a clean recording does not require hiding the tools you use.</p><div className="aura-features">
          <article><h3>The actual working viewport</h3><p>The Windows Vulkan path shares your working viewport with OBS. No second rendered viewport is created. Recording performance still depends on your scene, GPU and OBS settings.</p></article>
          <article><h3>Output-only visibility</h3><p>Choose which supported overlays, measurements, gizmos, labels and interface elements appear in OBS. Keep the working UI available in Blender.</p></article>
          <article><h3>Separate editor sources</h3><p>On Windows, add open Blender editors as individual sources. Frame a Shader Editor, Timeline or Outliner independently of the main viewport.</p></article>
        </div></section>
        <figure className="aura-visual"><Image src="/images/blender-to-obs/visibility.webp" alt="Show in OBS visibility controls for overlays, gizmos and interface elements" width={2000} height={1000} sizes="(max-width: 1320px) 100vw, 1280px" /><figcaption>Choose what the audience sees without hiding the working Blender interface. Wireframe includes native overlays.</figcaption></figure>
        <section className="aura-section"><h2>Make the lesson easier to follow.</h2><p>Show the material beside its nodes. Explain animation alongside the Timeline. Enable screencast keys when shortcuts matter. Keep a scene review uncluttered, then reveal the controls that explain a decision.</p><p>Each additional Windows capture has independent format and framing settings. Keep captured editors visible and their Blender window restored; restart capture and re-add editors after loading another file.</p></section>
        <figure className="aura-visual"><Image src="/images/blender-to-obs/editors.webp" alt="Blender editors arranged as separate sources for an OBS recording" width={2000} height={1000} sizes="(max-width: 1320px) 100vw, 1280px" /><figcaption>Multiple editor sources for tutorials, breakdowns and live demonstrations on Windows.</figcaption></figure>
        <section className="aura-section"><h2>From Blender to your recording.</h2><ol className="obs-steps">{OBS_STEPS.map(step => <li key={step}>{step}</li>)}</ol><p>Format presets resize the real viewport or editor and may resize neighboring editors. Choose Fit, Fill, Stretch or Manual placement in OBS. Recording starts in OBS, not automatically from the addon.</p><Link className="aura-link" href={OBS_BLOG_PATH}>Read the clean viewport recording guide <ArrowUpRight size={18} /></Link></section>
        <figure className="aura-visual"><Image src="/images/blender-to-obs/keys.webp" alt="Screencast key display for Blender tutorial recording" width={2000} height={1000} sizes="(max-width: 1320px) 100vw, 1280px" /><figcaption>Optional Windows screencast keys help explain the input behind the result.</figcaption></figure>
        <section className="aura-section aura-faq"><h2>Check your setup.</h2><p>The native bridge depends on Blender internals and remains experimental. Test your exact Blender build, shading mode and scene before recording an important session. No universal frame-rate or zero-overhead guarantee is made.</p>{OBS_FAQS.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      </div>
      <section className="aura-buy"><div className="store-container"><h2>Put the focus on your work.</h2><p>Get Blender to OBS from Superhive. Check the listing for current pricing, package contents and platform requirements.</p><div className="aura-actions"><a className="aura-button" href={OBS_STORE} target="_blank" rel="noopener noreferrer">Buy on Superhive <ArrowUpRight size={18} /></a><Link className="aura-link" href="/shop">Explore all addons <ArrowUpRight size={18} /></Link></div><p>Installation help: <a href="mailto:bevel.graphics1@gmail.com">bevel.graphics1@gmail.com</a></p></div></section>
    </main><ShopFooter />
  </div>
}
