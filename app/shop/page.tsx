import { redirect } from "next/navigation"
import { REEL_DIRECTOR_PATH } from "@/lib/shop/catalog"

export default function ShopPage() {
  redirect(REEL_DIRECTOR_PATH)
}
