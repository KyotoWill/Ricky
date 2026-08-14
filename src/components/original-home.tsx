import { getOriginalPageMarkup, type OriginalLocale, type OriginalPageSlug } from "@/lib/original-page";
import { OriginalSiteScripts } from "./original-site-scripts";

export function OriginalHome({ locale }: { locale: OriginalLocale }) {
  return <OriginalPage locale={locale} page="home" />;
}

export function OriginalPage({ locale, page }: { locale: OriginalLocale; page: OriginalPageSlug | "home" }) {
  return (
    <>
      <style>{`@import url("/original-assets/css/logistic-base-color-${locale === "en" ? "black" : "orange"}.css");`}</style>
      <div className="original-site-shell" dangerouslySetInnerHTML={{ __html: getOriginalPageMarkup(locale, page) }} />
      <OriginalSiteScripts locale={locale} />
    </>
  );
}
