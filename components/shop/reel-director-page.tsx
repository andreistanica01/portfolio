"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Box, Camera, Check, ChevronDown, Clapperboard, Download, Film, Layers3, LoaderCircle, LockKeyhole, Mail, MoveUpRight, Play, ShieldCheck, Sparkles, X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SITE_CONFIG } from "@/lib/content"
import { REEL_DESCRIPTION, REEL_EDITIONS, REEL_FAQS, SUPERHIVE_URL, formatPrice, getEdition, type EditionId } from "@/lib/shop/catalog"

type Availability = { standard: boolean; pro: boolean; environment: "sandbox" | "live" }
const imagePath = "/images/reel-director/"
const looks = [
  { name: "Wireframe", image: "hero-wire.webp", color: "#447dcc", alt: "Blue clay and gold wireframe architectural render created with Reel Director" },
  { name: "Clay", image: "hero-clay.webp", color: "#e5c9dc", alt: "Soft clay render of a modern house, trees and terrace created with Reel Director" },
  { name: "Night", image: "hero-night.webp", color: "#954dd7", alt: "Violet night render of a house with gold wireframe details created with Reel Director" },
]
const workflows = [
  { id: "camera", label: "Camera movement", icon: Camera, title: "Give every angle a story.", text: "Orbits, reveals, hero shots and architectural moves. Choose a preset, then shape the pace, framing and focus around your scene.", detail: "32 moves in Standard / 36 in Pro", image: "camera-hq.webp", alt: "Reel Director camera animation controls in Blender", pro: false },
  { id: "clay", label: "Clay Studio", icon: Layers3, title: "Let the process take the spotlight.", text: "Strip back materials, bring out the wireframe, or build a glass look. Pro adds independent styling for each object and custom presets saved inside your blend file.", detail: "Clay / wireframe / glass / restoration", image: "clay-hq.webp", alt: "Clay and wireframe styling controls in Reel Director for Blender", pro: false },
  { id: "wool", label: "Wool Dynamics", icon: Sparkles, title: "Make familiar forms feel unexpected.", text: "Give selected objects a soft wool-style surface. Control density, length, thickness, frizz and color, with optional experimental XPBD dynamics for secondary motion.", detail: "Pro feature / Blender 5.2 required", image: "wool-hq.webp", alt: "Native Wool Style surface and wool controls in Reel Director Pro", pro: true },
  { id: "lattice", label: "Lattice Surface", icon: Box, title: "Find a new structure in your scene.", text: "Turn selected meshes into geometric surface studies. Adjust triangle or quad patterns, strut thickness and nested layers while keeping the original shell when you need it.", detail: "Pro feature / triangle and quad structures", image: "lattice-hq.webp", alt: "Lattice Surface geometric structure generated on an object in Blender", pro: true },
  { id: "compositing", label: "Compositing", icon: Film, title: "Finish with a little more character.", text: "Fine film grain, soft diffusion, anamorphic streaks and more. Apply a compositor look, dial in its intensity, or remove it and return to your original setup.", detail: "Pro feature / reversible compositor looks", image: "compositing-hq.webp", alt: "Reel Director Pro cinematic compositor presets in Blender", pro: true },
]
const comparison = [
  ["Camera movement presets", "32", "36"],
  ["Object animations", "17", "17"],
  ["20+ viewport looks and MatCaps", true, true],
  ["Clay, wireframe and glass tools", true, true],
  ["Reel formats, render presets and cleanup", true, true],
  ["Per-object Clay Studio and custom presets", false, true],
  ["Premium camera moves and filters", false, true],
  ["Wool Dynamics and Lattice Surface", false, true],
  ["Compositor presets", false, true],
] as const

export function ReelDirectorPage({ availability }: { availability: Availability }) {
  const [look, setLook] = useState(0)
  const [workflow, setWorkflow] = useState("camera")
  const [demoOpen, setDemoOpen] = useState(false)
  const [edition, setEdition] = useState<EditionId | null>(null)
  const [accepted, setAccepted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState("")
  const checkoutTrigger = useRef<HTMLElement | null>(null)
  const demoTrigger = useRef<HTMLElement | null>(null)
  const selected = edition ? getEdition(edition)! : null

  function openCheckout(id: EditionId) {
    checkoutTrigger.current = document.activeElement as HTMLElement | null
    setEdition(id)
    setAccepted(false)
    setError("")
  }

  async function checkout() {
    if (!edition || !accepted || pending) return
    setPending(true)
    setError("")
    try {
      const response = await fetch("/api/shop/paypal", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edition, acceptedTerms: accepted }),
      })
      const data = await response.json()
      if (!response.ok || !data.approvalUrl) throw new Error(data.error || "Checkout is unavailable. Please try again.")
      window.location.assign(data.approvalUrl)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Checkout is unavailable. Please try again.")
      setPending(false)
    }
  }

  return <>
    <a className="rd-skip" href="#main">Skip to content</a>
    <header className="rd-header">
      <Link href="/" className="rd-brand" aria-label="Bevel Graphics portfolio"><Clapperboard size={23} /><span>Bevel<span className="rd-brand-light"> Graphics</span><small>CREATOR TOOLS</small></span></Link>
      <nav aria-label="Product navigation" className="rd-nav">
        <a href="#features">Features</a><a href="#looks">Looks</a><a href="#pricing">Compare editions</a><a href="#faq">FAQ</a>
      </nav>
      <a href="#pricing" className="rd-button rd-button-small">Get Reel Director <ArrowUpRight size={16} /></a>
    </header>

    <main id="main">
      <section className={`rd-hero ${look === 1 ? "rd-hero-light" : ""}`} aria-label="Reel Director">
        {looks.map((item, index) => <Image key={item.name} src={`${imagePath}${item.image}`} alt={item.alt} fill priority={index === 0} sizes="100vw" className={`rd-hero-image ${index === look ? "is-visible" : ""}`} aria-hidden={index !== look} />)}
        <div className="rd-hero-shade" />
        <div className="rd-hero-content rd-container">
          <p className="rd-eyebrow"><span className="rd-status-dot" /> YOUR SCENE. YOUR NEXT REEL.</p>
          <h1>Reel<br />Director<span className="rd-period">.</span></h1>
          <p className="rd-hero-description">Made for the work<br />you want people to see.</p>
          <p className="rd-hero-copy">Camera moves, clay breakdowns and bold new looks.<br className="rd-desktop-break" /> Turn your Blender scenes into content worth sharing.</p>
          <div className="rd-hero-actions">
            <a href="#pricing" className="rd-button">Get Reel Director <ArrowUpRight size={19} /></a>
            <button className="rd-button rd-button-glass" onClick={(event) => { demoTrigger.current = event.currentTarget; setDemoOpen(true) }}><Play size={16} fill="currentColor" /> Watch it in action</button>
          </div>
          <p className="rd-hero-footnote">Blender 4.2-5.2 <span>/</span> One-time purchase <span>/</span> From {formatPrice(REEL_EDITIONS[0].price)}</p>
        </div>
        <div className="rd-hero-bottom rd-container">
          <a href="#features" className="rd-scroll-link"><ArrowDown size={17} /> Explore the toolkit</a>
          <div className="rd-look-control"><span>ONE SCENE. DIFFERENT LOOKS.</span><div role="group" aria-label="Render look">{looks.map((item, index) => <button key={item.name} onClick={() => setLook(index)} aria-pressed={look === index}><i style={{ background: item.color }} />{item.name}</button>)}</div></div>
        </div>
      </section>

      <section className="rd-facts" aria-label="Addon at a glance">
        <div className="rd-container rd-facts-grid">
          <div><strong>32<span>/36</span></strong><p>Standard / Pro camera moves</p></div>
          <div><strong>17</strong><p>Object animations</p></div>
          <div><strong>20+</strong><p>Viewport looks</p></div>
          <div><strong>1</strong><p>Connected Blender workflow</p></div>
        </div>
      </section>

      <section id="features" className="rd-section rd-container">
        <div className="rd-section-heading"><div><p className="rd-eyebrow">01 / THE TOOLKIT</p><h2>You made the scene.<br /><span>Now make more of it.</span></h2></div><p>{REEL_DESCRIPTION}</p></div>
        <Tabs value={workflow} onValueChange={setWorkflow} className="rd-workflow-tabs">
          <TabsList className="rd-tabs-list" aria-label="Explore Reel Director features">{workflows.map(({ id, label, icon: Icon, pro }) => <TabsTrigger className="rd-tab" key={id} value={id}><Icon size={17} /><span>{label}</span>{pro && <small>PRO</small>}</TabsTrigger>)}</TabsList>
        {workflows.map((feature) => <TabsContent key={feature.id} value={feature.id} forceMount hidden={workflow !== feature.id}>
        <div className="rd-feature" id={`feature-${feature.id}`} aria-live="polite">
          <div className="rd-feature-media"><Image src={`${imagePath}${feature.image}`} width={2400} height={1200} alt={feature.alt} sizes="(max-width: 800px) 100vw, 65vw" /></div>
          <div className="rd-feature-copy"><span className="rd-detail">{feature.pro ? "REEL DIRECTOR PRO" : "IN BOTH EDITIONS"}</span><h3>{feature.title}</h3><p>{feature.text}</p><span className="rd-feature-note">{feature.detail}</span><a href="#pricing" className="rd-text-link">Find your edition <ArrowUpRight size={17} /></a></div>
        </div>
        </TabsContent>)}
        </Tabs>
        <div className="rd-workflow-strip">
          <div><span>01</span><h3>Frame it.</h3><p>Vertical, square or landscape. Set the format, frame rate and duration.</p></div>
          <div><span>02</span><h3>Direct it.</h3><p>Add a camera move. Animate objects. Give the scene a new look.</p></div>
          <div><span>03</span><h3>Share it.</h3><p>Render your sequence or hero frame, then bring it to your edit.</p></div>
        </div>
      </section>

      <section id="looks" className="rd-looks-section">
        <div className="rd-container">
          <div className="rd-section-heading"><div><p className="rd-eyebrow">02 / A DIFFERENT PERSPECTIVE</p><h2>One project.<br /><span>More reasons to stop scrolling.</span></h2></div><p>Your materials tell one story. Clay, wireframe and stylized viewport looks reveal another.</p></div>
          <div className="rd-look-gallery">{looks.map((item, index) => <button key={item.name} className="rd-look-item" onClick={() => { setLook(index); document.getElementById("main")?.scrollIntoView({ behavior: "smooth" }) }} aria-label={`Preview ${item.name.toLowerCase()} render at the top of the page`}><div><Image src={`${imagePath}${item.image}`} width={1200} height={600} alt={item.alt} sizes="(max-width: 600px) 90vw, 33vw" /><span><MoveUpRight size={20} /></span></div><p><span>0{index + 1} / {item.name}</span><span>REEL DIRECTOR</span></p></button>)}</div>
          <div className="rd-looks-caption"><p>Built for architectural visualization, product showcases and 3D process breakdowns.</p><Link href="/blog/how-clay-renders-improve-visual-hooks-for-3d-artists" className="rd-text-link">The art of the breakdown <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="rd-pro-section rd-container">
        <div className="rd-pro-heading"><span className="rd-pro-tag">GO PRO</span><h2>A little more control.<br />A lot more possibility.</h2><p>For the shots that need an extra layer of character.</p></div>
        <div className="rd-pro-grid">
          <article><div className="rd-pro-photo"><Image src={`${imagePath}wool-hq.webp`} alt="Green wool-style fibers on a science-fiction interior with Reel Director Pro controls" width={2400} height={1200} sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="rd-pro-title"><h3>Wool Dynamics</h3><span>BLENDER 5.2</span></div><p>Soft surfaces. Adjustable fibers. A tactile new direction for your existing models.</p></article>
          <article><div className="rd-pro-photo"><Image src={`${imagePath}lattice-hq.webp`} alt="Geometric Lattice Surface structures created with Reel Director Pro in Blender" width={2400} height={1200} sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="rd-pro-title"><h3>Lattice Surface</h3><span>PRO EXCLUSIVE</span></div><p>Turn solid forms into intricate structures, with control over density, thickness and layers.</p></article>
        </div>
        <Link href="/blog/reel-director-pro-wool-dynamics-blender-addon" className="rd-text-link">Explore the Pro workflow <ArrowUpRight size={17} /></Link>
      </section>

      <section id="pricing" className="rd-pricing-section">
        <div className="rd-container">
          <div className="rd-pricing-heading"><p className="rd-eyebrow">03 / MAKE IT PART OF YOUR WORKFLOW</p><h2>Choose your Reel Director.</h2><p>Buy directly from the artist who built it.</p></div>
          <div className="rd-pricing-grid">{REEL_EDITIONS.map((item) => <article key={item.id} id={item.id} className={`rd-price-card ${item.id === "pro" ? "rd-price-pro" : ""}`}>
            <div className="rd-price-top"><span>{item.id === "pro" ? "THE COMPLETE CREATIVE TOOLKIT" : "THE EVERYDAY CONTENT TOOLKIT"}</span>{item.id === "pro" && <Sparkles size={21} />}</div>
            <h3>{item.name}</h3><p className="rd-price-description">{item.description}</p>
            <div className="rd-price"><strong>{formatPrice(item.price)}</strong><div><span>USD / one-time</span></div></div>
            <button className={`rd-button rd-buy ${item.id === "standard" ? "rd-button-outline" : ""}`} onClick={() => openCheckout(item.id)}>Buy {item.name} <ArrowUpRight size={19} /></button>
            <ul>{item.features.map((text) => <li key={text}><Check size={17} /><span>{text}</span></li>)}</ul>
            <p className="rd-support-note">12 months of support and product updates</p>
          </article>)}</div>
          <div className="rd-checkout-trust"><span><LockKeyhole size={16} /> Checkout with PayPal</span><span><Download size={16} /> Digital download</span><span><ShieldCheck size={16} /> No subscription</span></div>
          <p className="rd-pricing-note">{!availability.standard && !availability.pro && "Direct checkout is temporarily unavailable. Both editions are available on Superhive. "}Prices in USD. Any currency conversion is shown by PayPal. <a href={SUPERHIVE_URL} target="_blank" rel="noopener noreferrer">View the Superhive listing <ArrowUpRight size={13} /></a></p>
          <details className="rd-compare"><summary>Compare every feature <ChevronDown size={19} /></summary><div className="rd-table-scroll"><table><caption className="sr-only">Reel Director Standard and Pro feature comparison</caption><thead><tr><th scope="col">The toolkit</th><th scope="col">Standard</th><th scope="col">Pro</th></tr></thead><tbody>{comparison.map(([name, standard, pro]) => <tr key={name}><th scope="row">{name}</th>{[standard, pro].map((value, index) => <td key={index}>{typeof value === "boolean" ? value ? <><Check size={17} /><span className="sr-only">Included</span></> : <><X size={15} /><span className="sr-only">Not included</span></> : value}</td>)}</tr>)}</tbody></table></div></details>
        </div>
      </section>

      <section id="faq" className="rd-section rd-container rd-faq-section">
        <div><p className="rd-eyebrow">04 / GOOD TO KNOW</p><h2>A few things<br />before you create.</h2><p>Something else on your mind?</p><a href={`mailto:${SITE_CONFIG.email}`} className="rd-text-link">Ask the creator <Mail size={16} /></a></div>
        <div className="rd-faq-list">{REEL_FAQS.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="rd-maker-band"><div className="rd-container"><Clapperboard size={34} /><div><p className="rd-eyebrow">MADE BY BEVEL GRAPHICS</p><h2>From one 3D artist to another.</h2><p>Built from a hands-on Blender and architectural visualization workflow, to help your work go further.</p></div><Link href="/#work" className="rd-text-link">Meet the work behind the tools <ArrowUpRight size={18} /></Link></div></section>
    </main>

    <footer className="rd-footer rd-container"><Link href="/" className="rd-brand">Bevel Graphics</Link><span>Reel Director / Creator tools for Blender</span><div><Link href="/shop/terms">Purchase terms & privacy</Link><a href={`mailto:${SITE_CONFIG.email}`}>Support <ArrowUpRight size={13} /></a></div></footer>

    <Dialog open={demoOpen} onOpenChange={setDemoOpen}><DialogContent className="rd-demo-dialog" onCloseAutoFocus={(event) => { event.preventDefault(); demoTrigger.current?.focus() }}><DialogTitle>Reel Director in action</DialogTitle><DialogDescription>Camera movement and scene breakdowns, made in Blender.</DialogDescription>{demoOpen && <Image src={`${imagePath}showreel.webp`} width={1200} height={675} alt="Animated Reel Director demonstration showing a 3D architectural scene and camera workflow" unoptimized />}</DialogContent></Dialog>

    <Dialog open={edition !== null} onOpenChange={(open) => { if (!open && !pending) setEdition(null) }}><DialogContent className="rd-checkout-dialog" showCloseButton={!pending} onCloseAutoFocus={(event) => { event.preventDefault(); checkoutTrigger.current?.focus() }}>
      <DialogTitle>Make it yours.</DialogTitle><DialogDescription>One-time purchase. Your next Blender workflow.</DialogDescription>
      {selected && <>
        <div className="rd-checkout-summary"><div><Clapperboard size={24} /><div><strong>{selected.name}</strong><span>Blender addon / digital download</span></div></div><strong>{formatPrice(selected.price)}<small>USD</small></strong></div>
        <p className="rd-checkout-compatibility">Blender 4.2-5.2. {edition === "pro" && "Wool Dynamics requires Blender 5.2. "}Includes 12 months of support and updates.</p>
        {availability[selected.id] ? <>
          {availability.environment === "sandbox" && <p className="rd-notice">Test checkout. No real payment will be taken.</p>}
          <label className="rd-consent"><input type="checkbox" checked={accepted} disabled={pending} onChange={(event) => setAccepted(event.target.checked)} /><span>I have checked compatibility and agree to the <Link href="/shop/terms" target="_blank">purchase terms and privacy notice</Link>.</span></label>
          <button className="rd-button rd-paypal" disabled={!accepted || pending} onClick={checkout}>{pending ? <LoaderCircle size={18} className="rd-spin" /> : <LockKeyhole size={18} />} {pending ? "Opening PayPal..." : `Pay ${formatPrice(selected.price)} with PayPal`} {!pending && <ArrowRight size={18} />}</button>
          <p className="rd-secure-note">Payment is approved on PayPal. Your card details are never entered on this website.</p>
        </> : <><p className="rd-notice">Direct checkout is temporarily unavailable. You can still get {selected.name} on Superhive.</p><a href={SUPERHIVE_URL} target="_blank" rel="noopener noreferrer" className="rd-button rd-buy">Buy on Superhive <ArrowUpRight size={18} /></a><a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`${selected.name} direct purchase`)}`} className="rd-text-link">Ask about buying directly <Mail size={16} /></a></>}
        {error && <p role="alert" className="rd-error">{error}</p>}
      </>}
    </DialogContent></Dialog>
  </>
}
