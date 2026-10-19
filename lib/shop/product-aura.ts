export const AURA_PATH = "/shop/product-aura"
export const AURA_BLOG_PATH = "/blog/product-aura-blender-reactive-scattering-addon"
export const AURA_UPDATED_AT = "2026-10-20"
export const AURA_IMAGE_ROOT = "/images/product-aura/"
export const AURA_DESCRIPTION = "Product Aura is a Blender addon by Bevel Graphics for creating reactive decoration layouts around a product, character or scene centerpiece. It combines live Flow and Clear modes, two decoration slots, fill presets and ten included 3D assets."
export const AURA_STORES = [
  { name: "Superhive", url: "https://superhivemarket.com/products/product-aura--reactive-product-scatter-for-blender" },
  { name: "Gumroad", url: "https://bevelgraphics.gumroad.com/l/productaura" },
] as const

export const AURA_ASSETS = [
  { name: "Lemon", image: "lemon.webp", alt: "Product Aura's included whole lemon with textured yellow peel" },
  { name: "Citrus slice", image: "citrus-slice.webp", alt: "Product Aura's included citrus slice with rind and segmented flesh" },
  { name: "Coffee bean", image: "coffee-bean.webp", alt: "Product Aura's included roasted coffee bean with detailed surface texture" },
  { name: "Cacao chunk", image: "cacao-chunk.webp", alt: "Product Aura's included chocolate cacao chunk with a broken edge" },
  { name: "Citrus leaf", image: "citrus-leaf.webp", alt: "Product Aura's included green citrus leaf with branching veins" },
  { name: "Eucalyptus leaf", image: "eucalyptus-leaf.webp", alt: "Product Aura's included eucalyptus leaf with a waxy green surface" },
  { name: "Rose petal", image: "rose-petal.webp", alt: "Product Aura's included curved pink rose petal" },
  { name: "Glass droplet", image: "glass-droplet.webp", alt: "Product Aura's included clear glass droplet with a tapered tip" },
  { name: "Satin ribbon", image: "satin-ribbon.webp", alt: "Product Aura's included champagne-colored satin ribbon loop" },
  { name: "Crystal", image: "crystal.webp", alt: "Product Aura's included faceted crystal with a pointed tip" },
] as const

export const AURA_FAQS = [
  { question: "What is Product Aura for Blender?", answer: AURA_DESCRIPTION },
  { question: "Which Blender versions and render engines does it support?", answer: "Product Aura 0.18.0 requires Blender 4.2 or newer. Superhive lists Blender 4.2 through 5.2, with Cycles and Eevee. Gumroad currently lists Blender 5.2 or newer; confirm the supplied version on your chosen store. Release 0.18.0 was tested on representative Windows builds. Mac acceptance testing for Follow Mesh and Linux qualification are still pending; check your platform before using it in production." },
  { question: "Which ten decorations are included?", answer: "Lemon, citrus slice, coffee bean, cacao chunk, citrus leaf, eucalyptus leaf, rose petal, glass droplet, satin ribbon and crystal. They are bundled in the addon ZIP with UVs and self-contained materials, so a separate asset installation is not required." },
  { question: "Can I scatter my own models and mix two assets?", answer: "Yes. Choose compatible objects from your scene in Decoration and Second Decoration, then adjust each source's size and rotation independently. Requested Count is shared between both sources; the seeded random mix is not a fixed 50/50 split. Use Refresh Decorations after editing source geometry or materials." },
  { question: "Is the live reaction a physics simulation?", answer: "No. Product Aura uses geometric reactions without a simulation bake. In the live layout, Flow moves candidates away from the hero and Clear hides unsafe placements. Allow Shrinking lets instances shrink and recover. A packed Fill Remaining Space layout keeps fixed positions; use Return to Live Layout to restore Flow." },
  { question: "Does it include the scenes shown in the previews?", answer: "The included content is the addon and its ten decoration assets. Hero products, characters, environments, camera animation and lighting shown in promotional scenes are demonstrations, not included assets unless your purchase listing explicitly says otherwise." },
  { question: "Where can I buy Product Aura?", answer: "Product Aura is available from Bevel Graphics on Superhive and Gumroad. Follow a store link below for its current price, license details, checkout and download. Purchase and delivery for Product Aura take place on your chosen marketplace." },
]
