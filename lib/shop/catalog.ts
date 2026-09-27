export const REEL_DIRECTOR_PATH = "/shop/reel-director"
export const SUPERHIVE_URL =
  "https://superhivemarket.com/products/reel-director-automate-instagram-tiktok-yt-shorts-"

// Prices checked against the live Superhive listing on 2026-09-27.
// Update this catalog when the promotion changes; PayPal uses these server-side totals.
export const REEL_EDITIONS = [
  {
    id: "standard",
    name: "Reel Director",
    label: "Standard",
    price: "12.00",
    regularPrice: "16.00",
    currency: "USD",
    description: "Your everyday toolkit for turning finished scenes into fresh content.",
    downloadEnv: "REEL_DIRECTOR_DOWNLOAD_URL",
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
    price: "16.50",
    regularPrice: "22.00",
    currency: "USD",
    description: "The full toolkit, with more control over every shot and surface.",
    downloadEnv: "REEL_DIRECTOR_PRO_DOWNLOAD_URL",
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
    answer: "Reel Director is a Blender addon by Bevel Graphics for making short-form 3D content from existing scenes. It combines camera moves, object animation, clay breakdowns, viewport looks, render presets and output tools in one panel. Use it for Instagram Reels, TikTok, YouTube Shorts and portfolio breakdowns.",
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
    question: "Is this a subscription?",
    answer: "No. Each edition is a one-time purchase. It includes the addon and 12 months of product updates and support. Your purchased version does not expire when the support period ends.",
  },
  {
    question: "How do payment and delivery work?",
    answer: "Direct purchases use PayPal's hosted checkout. You approve payment on PayPal, then return here for a verified download of your chosen edition. Card availability is determined by PayPal for your location and account. No Superhive account is needed for a direct purchase. Keep your PayPal receipt for support or download recovery.",
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
