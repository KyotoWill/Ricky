import { OriginalPage } from "@/components/original-home";
import { notFound } from "next/navigation";

const services = ["sea-freight", "air-freight", "customs", "warehousing", "land-transport", "cross-border"] as const;

export function generateStaticParams() {
  return services.map((service) => ({ service }));
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  if (!services.includes(service as (typeof services)[number])) notFound();
  return <OriginalPage locale="zh-hk" page={`services/${service}` as `services/${(typeof services)[number]}`} />;
}
