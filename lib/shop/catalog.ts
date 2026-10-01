export const REEL_DIRECTOR_PATH = "/shop/reel-director"
export const REEL_CONTENT_UPDATED_AT = "2026-10-01"
export const REEL_DESCRIPTION = "Reel Director is a Blender addon by Bevel Graphics for turning existing 3D scenes into Instagram Reels, TikTok videos, YouTube Shorts and portfolio breakdowns. It combines camera animation, object animation, clay renders, viewport styles and output tools in one panel."
export const SUPERHIVE_URL =
  "https://superhivemarket.com/products/reel-director-automate-instagram-tiktok-yt-shorts-"

// Direct-store prices; PayPal and product metadata use these server-side totals.
export const REEL_EDITIONS = [
  {
    id: "standard",
    name: "Reel Director",
    label: "Standard",
    price: "16.00",
    currency: "USD",
    description: "Your everyday toolkit for turning finished scenes into fresh content.",
    downloadEnv: "REEL_DIRECTOR_DOWNLOAD_URL",
    blobKeyEnv: "REEL_DIRECTOR_BLOB_KEY",
    filename: "reel-director.zip",
    features: [
      "32 camera movement presets",
      "17 object animations",
      "Clay, wireframe and glass breakdowns",
      "20+ viewport looks and MatCaps",
      "Reel formats, render presets and output tools",
    ],
  },
  {
    id: "pro",
    name: "Reel Director Pro",
    label: "Pro",
    price: "22.00",
    currency: "USD",
    description: "The full toolkit, with more control over every shot and surface.",
    downloadEnv: "REEL_DIRECTOR_PRO_DOWNLOAD_URL",
    blobKeyEnv: "REEL_DIRECTOR_PRO_BLOB_KEY",
    filename: "reel-director-pro.zip",
    features: [
      "Everything in Standard",
      "36 total camera moves and camera filters",
      "Per-object Clay Studio and custom presets",
      "Wool Dynamics / Native Wool Style (Blender 5.2)",
      "Lattice Surface and compositor presets",
    ],
  },
] as const

export type EditionId = (typeof REEL_EDITIONS)[number]["id"]
export function getEdition(id: string) {
  return REEL_EDITIONS.find((edition) => edition.id === id)
}

export function formatPrice(value: string) {
  return `$${Number(value).toFixed(Number(value) % 1 === 0 ? 0 : 2)}`
}

export const REEL_FAQS = [
  {
    question: "What is Reel Director?",
    answer: REEL_DESCRIPTION,
  },
  {
    question: "What is the difference between Standard and Pro?",
    answer: "Standard includes the complete content workflow, with 32 camera moves and 17 object animations. Pro includes everything in Standard, increases the camera library to 36 moves, and adds per-object Clay Studio, saved custom presets, camera filters, Wool Dynamics, Lattice Surface and compositor presets.",
  },
  {
    question: "Which Blender versions are supported?",
    answer: "The current releases support Blender 4.2 through 5.2 and work with Cycles and Eevee. Wool Dynamics (also called Native Wool Style) requires Blender 5.2. Its optional XPBD dynamics are experimental. Check the requirements of your chosen feature before purchasing.",
  },
  {
    question: "What does Wool Dynamics do in Reel Director Pro?",
    answer: "Wool Dynamics, also called Native Wool Style, creates wool-style fibers on selected mesh objects in Blender 5.2. Adjust fiber count, viewport percentage, length, thickness, irregularity, frizz, seed and color. Optional XPBD dynamics are experimental. Wool Dynamics is included in Pro, not Standard.",
  },
  {
    question: "Can I use Reel Director for architectural visualization?",
    answer: "Yes. Use camera moves for interior walkthrough-style shots, exterior reveals and product orbits, then create clay or wireframe breakdowns from the same scene. Both editions include format presets for vertical, square and landscape output. Reel Director prepares and renders content in Blender; it does not automatically publish videos to social platforms.",
  },
  {
    question: "Is this a subscription?",
    answer: "No. Each edition is a one-time purchase. It includes the addon and 12 months of product updates and support. Your purchased version does not expire when the support period ends.",
  },
  {
    question: "How do payment and delivery work?",
    answer: "When direct checkout is available, purchases use PayPal's hosted checkout. You approve payment on PayPal, then return here for a verified download of your chosen edition. Card availability depends on PayPal. When direct checkout is unavailable, use the linked Superhive listing. Keep your payment receipt for support or download recovery.",
  },
  {
    question: "Can I use the addon for client projects?",
    answer: "Yes. Reel Director is distributed under the GNU General Public License (GPL), and you can use it to create personal and commercial work. The addon license does not transfer ownership of your renders or client scenes to Bevel Graphics. Demo scenes and promotional artwork are not included unless explicitly listed in the download.",
  },
  {
    question: "How do I install it or get help?",
    answer: "Download the ZIP for your edition, open Blender Preferences, and use Install from Disk in the Add-ons section. Select the ZIP and enable Reel Director. For compatibility, installation or order help, email bevel.graphics1@gmail.com with your Blender version and, for purchase support, your PayPal receipt reference.",
  },
]
