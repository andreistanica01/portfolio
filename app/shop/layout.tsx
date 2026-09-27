import localFont from "next/font/local"
import "./shop.css"

const tommy = localFont({
  src: [
    { path: "../../public/fonts/MADE TOMMY Regular.woff2", weight: "400" },
    { path: "../../public/fonts/MADE TOMMY Bold.woff2", weight: "700" },
    { path: "../../public/fonts/MADE TOMMY ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-reel",
  display: "swap",
})

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${tommy.variable} reel-shop`}>{children}</div>
}
