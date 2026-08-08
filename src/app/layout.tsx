import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anantalog.com"),
  title: { default: "Anantalog", template: "%s | Anantalog" },
  description: "Ananta International Logistics — global air, sea, road, rail, customs and warehousing services.",
  icons: { icon: "/assets/favicon.png" },
  openGraph: { title: "Ananta International Logistics", description: "Global logistics freight services", images: ["/assets/hero.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
