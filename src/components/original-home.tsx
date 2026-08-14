import { getOriginalPageMarkup, type OriginalLocale, type OriginalPageSlug } from "@/lib/original-page";
import { OriginalSiteScripts } from "./original-site-scripts";

export function OriginalHome({ locale }: { locale: OriginalLocale }) {
  return <OriginalPage locale={locale} page="home" />;
}

export function OriginalPage({ locale, page }: { locale: OriginalLocale; page: OriginalPageSlug | "home" }) {
  return (
    <>
      <div className="original-site-shell" dangerouslySetInnerHTML={{ __html: getOriginalPageMarkup(locale, page) }} />
      <OriginalSiteScripts />
    </>
  );
}
