import path from "node:path"
import fs from "node:fs/promises"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next")] }))
const desktop = path.resolve("..")
const output = path.resolve("public/images/product-aura")
const sources = [
  ["Flora/thb.png", "hero.webp", 2560],
  ["Flora/Social Media/thbfab.jpg", "product-aura.webp", 1920],
  ["Flora/Social Media/p1fab.jpg", "live-product-reaction.webp", 1920],
  ["Flora/Social Media/p2fab.jpg", "control-the-fill.webp", 1920],
  ["Flora/Social Media/p3fab.jpg", "mix-decorations.webp", 1920],
  ...[
    ["lemon", "lemon"], ["citrus slice", "citrus-slice"],
    ["coffee bean", "coffee-bean"], ["choco chunk", "cacao-chunk"],
    ["leaf", "citrus-leaf"], ["eucal leaf", "eucalyptus-leaf"],
    ["rose leaf", "rose-petal"], ["glass droplet", "glass-droplet"],
    ["satin ribbon", "satin-ribbon"], ["crystal", "crystal"],
  ].map(([source, name]) => [`PA Recordings/${source}.png`, `${name}.webp`, 1024]),
]

await fs.mkdir(output, { recursive: true })
for (const [source, name, width] of sources) {
  const result = await sharp(path.join(desktop, source))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 92, effort: 6 })
    .toFile(path.join(output, name))
  console.log(`${name}: ${result.width}x${result.height}, ${Math.round(result.size / 1024)} KB`)
}
