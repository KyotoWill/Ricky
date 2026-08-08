import { SitePage } from "@/components/site-page";
import { content } from "@/content";

export default function Home() {
  return <SitePage locale="en" copy={content.en} />;
}
