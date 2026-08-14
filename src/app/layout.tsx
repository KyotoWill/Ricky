/* eslint-disable @next/next/no-css-tags -- The original legacy stylesheet bundle must be served verbatim; Turbopack cannot parse its vendor CSS. */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anantalog.com"),
  title: { default: "Ananta International Logistics", template: "%s | Ananta International Logistics" },
  description: "Ananta International Logistics — global air, sea, road, rail, customs and warehousing services.",
  icons: { icon: "/assets/favicon.png" },
  openGraph: {
    title: "Ananta International Logistics",
    description: "Global logistics freight services",
    images: ["/assets/hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="stylesheet" href="/original-assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/original-assets/css/plugin.min.css" />
        <link rel="stylesheet" href="/original-assets/css/default.css" />
        <link rel="stylesheet" href="/original-assets/css/logistic-style.css" />
        <link rel="stylesheet" href="/original-assets/css/responsive.css" />
        <link rel="stylesheet" href="/original-assets/css/logistic-responsive.css" />
        <link rel="stylesheet" href="/original-assets/css/logistic-base-color-orange.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
