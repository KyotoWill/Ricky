import { OriginalPage } from "@/components/original-home";
import { isOriginalPageSlug, originalPageSlugs } from "@/lib/original-page";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return originalPageSlugs.map((slug) => ({ slug: slug.split("/") }));
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug.join("/");
  if (!isOriginalPageSlug(slug)) notFound();
  return <OriginalPage locale="en" page={slug} />;
}
