import "server-only";

import { readFileSync } from "node:fs";
import path from "node:path";

export type OriginalLocale = "en" | "zh-hk" | "zh-cn";

export const originalPageSlugs = [
  "about",
  "services",
  "office",
  "contact",
  "quote",
  "career",
  "incoterms",
  "container-size",
  "forms-downloads",
  "services/sea-freight",
  "services/air-freight",
  "services/customs",
  "services/warehousing",
  "services/land-transport",
  "services/cross-border",
] as const;

export type OriginalPageSlug = (typeof originalPageSlugs)[number];

const pageFiles: Record<OriginalPageSlug | "home", string> = {
  home: "home",
  about: "about",
  services: "services",
  office: "office",
  contact: "contact",
  quote: "quote",
  career: "career",
  incoterms: "incoterms",
  "container-size": "container-size",
  "forms-downloads": "forms-downloads",
  "services/sea-freight": "service-sea-freight",
  "services/air-freight": "service-air-freight",
  "services/customs": "service-customs",
  "services/warehousing": "service-warehousing",
  "services/land-transport": "service-land-transport",
  "services/cross-border": "service-cross-border",
};

const localeHome: Record<OriginalLocale, string> = {
  en: "/en/",
  "zh-hk": "/",
  "zh-cn": "/zh-cn/",
};

const withLocale = (locale: OriginalLocale, slug: string) => {
  const prefix = locale === "zh-hk" ? "" : `/${locale}`;
  return `${prefix}/${slug}/`.replace(/\/+/g, "/");
};

function rewriteRoutes(markup: string, locale: OriginalLocale) {
  const rewrites: Array<[RegExp, string]> = [
    [/https:\/\/(?:www\.)?anantalog\.com\/(?:About-Us\/37|%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91\/43|%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC\/44)\/page/gi, withLocale(locale, "about")],
    [/https:\/\/(?:www\.)?anantalog\.com\/services(?:\?category=\d+)?/gi, withLocale(locale, "services")],
    [/https:\/\/(?:www\.)?anantalog\.com\/(?:Our-offices\/41|%E8%A1%8D%E4%BA%9E%E8%BE%A6%E5%85%AC%E5%AE%A4\/45)\/page/gi, withLocale(locale, "office")],
    [/https:\/\/(?:www\.)?anantalog\.com\/contact/gi, withLocale(locale, "contact")],
    [/https:\/\/(?:www\.)?anantalog\.com\/quote/gi, withLocale(locale, "quote")],
    [/https:\/\/(?:www\.)?anantalog\.com\/career/gi, withLocale(locale, "career")],
    [/https:\/\/(?:www\.)?anantalog\.com\/(?:Incoterms\/54|%E5%9C%8B%E9%9A%9B%E8%B2%BF%E6%98%93%E8%A1%93%E8%AA%9E%E8%A7%A3%E9%87%8B%E9%80%9A%E5%89%87\/52|56)\/page/gi, withLocale(locale, "incoterms")],
    [/https:\/\/(?:www\.)?anantalog\.com\/(?:Container-size\/55|%E9%9B%86%E8%A3%85%E7%AE%B1%E5%B0%BA%E5%AF%B8\/(?:53|57))\/page/gi, withLocale(locale, "container-size")],
    [/https:\/\/(?:www\.)?anantalog\.com\/(?:Forms-downloads\/39|%E8%A1%A8%E6%A0%BC%E4%B8%8B%E8%BD%BD\/50)\/page/gi, withLocale(locale, "forms-downloads")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:297|290|302)/gi, withLocale(locale, "services/sea-freight")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:289|291|303)/gi, withLocale(locale, "services/air-freight")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:298|292|304)/gi, withLocale(locale, "services/customs")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:299|293|305)/gi, withLocale(locale, "services/warehousing")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:300|294|306)/gi, withLocale(locale, "services/land-transport")],
    [/https:\/\/(?:www\.)?anantalog\.com\/service\/[^"']+\/(?:301|295|307)/gi, withLocale(locale, "services/cross-border")],
  ];

  for (const [pattern, replacement] of rewrites) markup = markup.replace(pattern, replacement);
  return markup;
}

function localizeHomepage(markup: string, locale: OriginalLocale) {
  if (locale === "en") return markup;
  const isSimplified = locale === "zh-cn";
  const replacements: Array<[string, string]> = [
    ["Who we are", isSimplified ? "关于我们" : "關於我們"],
    [
      "We keep things simple, putting you in control so you can make informed choices",
      isSimplified ? "我们简化流程，让您掌控全局并作出明智选择" : "我們簡化流程，讓您掌控全局並作出明智選擇",
    ],
    ["what we do", isSimplified ? "我们的服务" : "我們的服務"],
    ["Our Services", isSimplified ? "我们的服务" : "我們的服務"],
    ["We work with you to achieve your goals", isSimplified ? "我们与您携手实现目标" : "我們與您攜手實現目標"],
    ["THow we do", isSimplified ? "专业、高效、可靠" : "專業、高效、可靠"],
    ["How we do", isSimplified ? "我们的工作方式" : "我們的工作方式"],
    ["Our Approach", isSimplified ? "我们的方法" : "我們的方法"],
    ["Contact us for help.", isSimplified ? "需要帮助？请联系我们。" : "需要協助？請聯絡我們。"],
    ["Contact Us", isSimplified ? "联系我们" : "聯絡我們"],
  ];
  for (const [source, translated] of replacements) markup = markup.replaceAll(source, translated);
  return markup;
}

export function getOriginalPageMarkup(locale: OriginalLocale, page: OriginalPageSlug | "home") {
  const pageFile = pageFiles[page];
  const filename = path.join(process.cwd(), "reference", "original", `${pageFile}-${locale}.html`);
  let document: string | undefined;
  for (const fallbackLocale of [locale, "en", "zh-hk"] as const) {
    try {
      document = readFileSync(path.join(process.cwd(), "reference", "original", `${pageFile}-${fallbackLocale}.html`), "utf8");
      break;
    } catch {}
  }
  if (!document) throw new Error(`Original page snapshot was not found for ${page}`);
  const body = document.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (!body) throw new Error(`Original body was not found in ${filename}`);

  let markup = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<!--\s*announcement banner section start[\s\S]*?announcement banner section end\s*-->/gi, "")
    .replace(/<!--\s*preloader section start[\s\S]*?preloader section end\s*-->/gi, "")
    .replace(/<input type="hidden" name="_token"[^>]*>/gi, "")
    .replace(/action="https:\/\/(?:www\.)?anantalog\.com\/[^"]*"/gi, 'action="#" data-replica-form')
    .replaceAll("https://www.anantalog.com/assets/front/", "/original-assets/")
    .replaceAll("https://anantalog.com/assets/front/", "/original-assets/")
    .replaceAll("https://www.anantalog.com/assets/", "/assets/")
    .replaceAll("https://anantalog.com/assets/", "/assets/")
    .replaceAll("/original-assets/img/69e7a3997bc1b.png", "/assets/logo.jpg")
    .replaceAll("/original-assets/img/69e7a5dddf9a4.png", "/assets/logo.jpg")
    .replace(
      /https:\/\/(?:www\.)?anantalog\.com\/changelanguage\/en/gi,
      page === "home" ? localeHome.en : withLocale("en", page),
    )
    .replace(
      /https:\/\/(?:www\.)?anantalog\.com\/changelanguage\/zh_hk/gi,
      page === "home" ? localeHome["zh-hk"] : withLocale("zh-hk", page),
    )
    .replace(
      /https:\/\/(?:www\.)?anantalog\.com\/changelanguage\/zh_cn/gi,
      page === "home" ? localeHome["zh-cn"] : withLocale("zh-cn", page),
    );

  if (page === "services") {
    markup = markup
      .replace(/<span>t\.me\/foxystresser<\/span>/gi, "<span>Our Services</span>")
      .replace(/<h1>t\.me\/foxystresser<\/h1>/gi, "<h1>We work with you to achieve your goals</h1>");
  } else if (page === "contact") {
    markup = markup.replaceAll("t.me/foxystresser", "Contact Us");
  } else if (page === "quote") {
    markup = markup.replaceAll("t.me/foxystresser", "Request a Quote");
  } else if (page.startsWith("services/")) {
    markup = markup.replaceAll("t.me/foxystresser", "Service Details");
  } else {
    markup = markup.replaceAll("t.me/foxystresser", "Ananta International Logistics");
  }

  if (page === "home") markup = localizeHomepage(markup, locale);

  markup = rewriteRoutes(markup, locale)
    .replace(/href="https:\/\/(?:www\.)?anantalog\.com\/login"/gi, `href="${localeHome[locale]}"`)
    .replace(/href="https:\/\/(?:www\.)?anantalog\.com\/?"/gi, `href="${localeHome[locale]}"`);

  return markup;
}

export function isOriginalPageSlug(value: string): value is OriginalPageSlug {
  return originalPageSlugs.includes(value as OriginalPageSlug);
}
