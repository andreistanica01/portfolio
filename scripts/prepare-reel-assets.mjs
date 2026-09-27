import path from "node:path"
import fs from "node:fs/promises"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"
const require = createRequire(import.meta.url)
const directory = path.dirname(fileURLToPath(import.meta.url))
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next")] }))

const desktop = path.resolve(directory, "../..")
const output = path.resolve(directory, "../public/images/reel-director")
const sources = [
  ["Lansare Reel Director/3.png", "hero-wire.webp", 2400],
  ["Lansare Reel Director/2.png", "hero-clay.webp", 2400],
  ["Lansare Reel Director/5agx.png", "hero-night.webp", 2400],
  ["cloudflare/hero-full.gif", "demo-poster.webp", 1600],
  ["Lansare Reel Director/superhive/Superhive2.jpg", "camera-hq.webp", 2400],
  ["Lansare Reel Director/superhive/Superhive4.jpg", "clay-hq.webp", 2400],
  ["Lansare Reel Director/superhive/SUPERHIVE PRO WOOL DYNAMICS.jpg", "wool-hq.webp", 2400],
  ["Lansare Reel Director/superhive/SUPERHIVE PRO LATTICE MODIFIER.jpg", "lattice-hq.webp", 2400],
  ["Lansare Reel Director/superhive/SUPERHIVE PRO COMPOSITING PRESETS.jpg", "compositing-hq.webp", 2400],
]

async function main() {
  await fs.mkdir(output, { recursive: true })
  for (const [source, name, width] of sources) {
    const isScreenshot = name.endsWith("-hq.webp")
    if (process.argv.includes("--screenshots-only") && !isScreenshot) continue
    const metadata = await sharp(path.join(desktop, source)).metadata()
    await sharp(path.join(desktop, source), { page: Math.floor((metadata.pages || 1) * 0.6), pages: 1 })
      .resize({ width, withoutEnlargement: true })
      .webp(isScreenshot ? { lossless: true, effort: 6 } : { quality: 84 })
      .toFile(path.join(output, name))
  }
  if (process.argv.includes("--screenshots-only")) {
    console.log("Full-resolution, lossless WebP screenshots prepared.")
    return
  }
  await sharp(path.join(desktop, "cloudflare/hero-full.gif"), { animated: true })
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 65, effort: 4 })
    .toFile(path.join(output, "showreel.webp"))
  console.log("Reel Director WebP assets prepared.")
}

main().catch((error) => { console.error(error); process.exitCode = 1 })
