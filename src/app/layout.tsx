import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anantalog.com"),
  title: {
    default: "Ananta Logistics | Move With Certainty",
    template: "%s | Ananta Logistics",
  },
  description:
    "Integrated ocean, air, customs, warehousing and cross-border logistics solutions built around your supply chain.",
  keywords: [
    "international logistics",
    "freight forwarding",
    "ocean freight",
    "air freight",
    "customs clearance",
    "cross-border logistics",
  ],
  openGraph: {
    type: "website",
    url: "https://www.anantalog.com",
    siteName: "Ananta Logistics",
    title: "Ananta Logistics | Move With Certainty",
    description: "One connected logistics partner from origin to destination.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ananta Logistics — Move With Certainty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananta Logistics | Move With Certainty",
    description: "One connected logistics partner from origin to destination.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
