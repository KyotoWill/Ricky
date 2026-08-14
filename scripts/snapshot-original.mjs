import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://www.anantalog.com";
const root = process.cwd();
const referenceDir = path.join(root, "reference", "original");
const assetDir = path.join(root, "public", "original-assets");

await mkdir(referenceDir, { recursive: true });
await mkdir(assetDir, { recursive: true });

async function request(url, cookie = "") {
  const response = await fetch(url, {
    redirect: "manual",
    headers: cookie ? { cookie, "user-agent": "Ananta migration backup" } : { "user-agent": "Ananta migration backup" },
  });
  return response;
}

const localePages = {
  en: {
    home: "/",
    about: "/About-Us/37/page",
    services: "/services",
    office: "/Our-offices/41/page",
    contact: "/contact",
    quote: "/quote",
    login: "/login",
    incoterms: "/Incoterms/54/page",
    "container-size": "/Container-size/55/page",
    "forms-downloads": "/Forms-downloads/39/page",
    "service-sea-freight": "/service/SEA-FREIGHT-SERVICES/297",
    "service-air-freight": "/service/AIR-FREIGHT-SERVICES/289",
    "service-customs": "/service/Customs-Declaration/298",
    "service-warehousing": "/service/Warehousing-services/299",
    "service-land-transport": "/service/Land-transport/300",
    "service-cross-border": "/service/Cross-border-transportation/301",
  },
  zh_hk: {
    home: "/",
    about: "/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91/43/page",
    services: "/services",
    office: "/%E8%A1%8D%E4%BA%9E%E8%BE%A6%E5%85%AC%E5%AE%A4/45/page",
    contact: "/contact",
    quote: "/quote",
    login: "/login",
    career: "/career",
    incoterms: "/%E5%9C%8B%E9%9A%9B%E8%B2%BF%E6%98%93%E8%A1%93%E8%AA%9E%E8%A7%A3%E9%87%8B%E9%80%9A%E5%89%87/52/page",
    "container-size": "/%E9%9B%86%E8%A3%85%E7%AE%B1%E5%B0%BA%E5%AF%B8/53/page",
    "service-sea-freight": "/service/%E8%A1%8D%E4%BA%9E%E6%B5%B7%E9%81%8B/290",
    "service-air-freight": "/service/%E7%A9%BA%E9%81%8B/291",
    "service-customs": "/service/%E5%A0%B1%E9%97%9C/292",
    "service-warehousing": "/service/%E5%80%89%E5%BA%AB%E6%9C%8D%E5%8B%99/293",
    "service-land-transport": "/service/%E9%99%B8%E8%B7%AF%E9%81%8B%E8%BC%B8/294",
    "service-cross-border": "/service/%E8%B7%A8%E9%82%8A%E5%A2%83%E9%81%8B%E8%BC%B8/295",
  },
  zh_cn: {
    home: "/",
    about: "/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/44/page",
    services: "/services",
    contact: "/contact",
    quote: "/quote",
    login: "/login",
    career: "/career",
    incoterms: "/56/page",
    "container-size": "/%E9%9B%86%E8%A3%85%E7%AE%B1%E5%B0%BA%E5%AF%B8/57/page",
    "forms-downloads": "/%E8%A1%A8%E6%A0%BC%E4%B8%8B%E8%BD%BD/50/page",
    "service-sea-freight": "/service/%E6%B5%B7%E8%BF%90/302",
    "service-air-freight": "/service/%E7%A9%BA%E8%BF%90/303",
    "service-customs": "/service/%E6%8A%A5%E5%85%B3%E6%9C%8D%E5%8A%A1/304",
    "service-warehousing": "/service/%E4%BB%93%E5%BA%93%E6%9C%8D%E5%8A%A1/305",
    "service-land-transport": "/service/%E9%99%86%E8%B7%AF%E8%BF%90%E8%BE%93/306",
    "service-cross-border": "/service/%E8%B7%A8%E8%BE%B9%E5%A2%83%E8%BF%90%E8%BE%93/307",
  },
};

async function fetchLocale(locale) {
  const change = await request(`${origin}/changelanguage/${locale}`);
  const setCookies = change.headers.getSetCookie?.() ?? [change.headers.get("set-cookie") ?? ""];
  const cookie = setCookies.filter(Boolean).map((value) => value.split(";", 1)[0]).join("; ");
  const name = locale.replace("_", "-");
  const documents = [];
  for (const [page, pathname] of Object.entries(localePages[locale])) {
    const response = await request(`${origin}${pathname}`, cookie);
    if (!response.ok) {
      console.warn(`Skipped page ${response.status}: ${locale}/${page}`);
      continue;
    }
    const html = sanitizeSnapshot(await response.text(), page);
    await writeFile(path.join(referenceDir, `${page}-${name}.html`), html, "utf8");
    documents.push(html);
  }
  return documents;
}

function sanitizeSnapshot(html, page) {
  let clean = html
    .replace(/<!--\s*announcement banner section start[\s\S]*?announcement banner section end\s*-->/gi, "")
    .replace(/https:\/\/(?:www\.)?anantalog\.com\/assets\/front\/img\/69e7a(?:3997bc1b|5dddf9a4)\.png/gi, "/assets/logo.jpg");
  if (page === "services") {
    clean = clean
      .replace(/<span>t\.me\/foxystresser<\/span>/gi, "<span>Our Services</span>")
      .replace(/<h1>t\.me\/foxystresser<\/h1>/gi, "<h1>We work with you to achieve your goals</h1>");
  } else if (page === "contact") {
    clean = clean.replaceAll("t.me/foxystresser", "Contact Us");
  } else if (page === "quote") {
    clean = clean.replaceAll("t.me/foxystresser", "Request a Quote");
  } else if (page.startsWith("service-")) {
    clean = clean.replaceAll("t.me/foxystresser", "Service Details");
  } else {
    clean = clean.replaceAll("t.me/foxystresser", "Ananta International Logistics");
  }
  return clean.replaceAll("t.me/foxystresser", "Ananta International Logistics");
}

function assetUrls(text, base = `${origin}/`) {
  const urls = new Set();
  const absolute = /https?:\/\/(?:www\.)?anantalog\.com\/assets\/front\/[^"'\s)]+/g;
  for (const match of text.matchAll(absolute)) urls.add(match[0].replaceAll("&amp;", "&"));
  const cssUrl = /url\((['"]?)([^'"\)]+)\1\)/g;
  for (const match of text.matchAll(cssUrl)) {
    if (match[2].startsWith("data:")) continue;
    const resolved = new URL(match[2], base).href;
    if (resolved.startsWith(`${origin}/assets/front/`)) urls.add(resolved);
  }
  return new Set([...urls].filter((url) => !/\/img\/69e7a(?:3997bc1b|5dddf9a4)\.png$/i.test(url)));
}

function localPath(url) {
  const parsed = new URL(url);
  let relative = parsed.pathname.replace(/^\/assets\/front\//, "");
  if (parsed.pathname.endsWith("logistic-base-color.php")) {
    relative = parsed.searchParams.get("color") === "000000"
      ? "css/logistic-base-color-black.css"
      : "css/logistic-base-color-orange.css";
  }
  return path.join(assetDir, ...relative.split("/"));
}

const pages = (await Promise.all([fetchLocale("en"), fetchLocale("zh_hk"), fetchLocale("zh_cn")])).flat();
const pending = new Set(pages.flatMap((html) => [...assetUrls(html)]));
pending.add(`${origin}/assets/front/css/logistic-base-color.php?color=000000&color1=000000`);
pending.add(`${origin}/assets/front/css/logistic-base-color.php?color=FF5E14&color1=121C45`);

const downloaded = new Set();
while (pending.size) {
  const url = pending.values().next().value;
  pending.delete(url);
  if (downloaded.has(url)) continue;
  downloaded.add(url);
  const response = await fetch(url, { headers: { "user-agent": "Ananta migration backup" } });
  if (!response.ok) {
    console.warn(`Skipped ${response.status}: ${url}`);
    continue;
  }
  const output = localPath(url);
  await mkdir(path.dirname(output), { recursive: true });
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("text/css") || url.includes(".css") || url.includes("base-color.php")) {
    const css = await response.text();
    await writeFile(output, css, "utf8");
    for (const nested of assetUrls(css, url)) if (!downloaded.has(nested)) pending.add(nested);
  } else {
    await writeFile(output, Buffer.from(await response.arrayBuffer()));
  }
}

console.log(`Saved ${pages.length} localized pages and ${downloaded.size} original assets.`);
