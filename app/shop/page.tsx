import { permanentRedirect } from "next/navigation"
import { REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"

export default function ShopPage() {
  permanentRedirect(REEL_DIRECTOR_PATH)
}
