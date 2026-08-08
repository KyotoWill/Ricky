import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "@/components/site-page";
import { content, type Locale } from "@/content";

const locales: Locale[] = ["en", "zh", "zh-hant"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) return {};
  const titles: Record<Locale, string> = { en: "Move With Certainty", zh: "稳行全球，从容抵达", "zh-hant": "穩行全球，從容抵達" };
  return {
    title: titles[lang as Locale],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", "zh-CN": "/zh", "zh-Hant": "/zh-hant", "x-default": "/en" },
    },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const locale = lang as Locale;
  return <SitePage locale={locale} copy={content[locale]} />;
}
