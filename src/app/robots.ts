import type { MetadataRoute } from "next";

import { site } from "@/data/store";

/** デモの間は各ページの noindex で検索から外すため、クロール自体は止めません */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: site.isDemo ? undefined : `${site.url}/sitemap.xml`,
  };
}
