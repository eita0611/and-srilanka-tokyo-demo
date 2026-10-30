import type { MetadataRoute } from "next";

import { site } from "@/data/store";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.isDemo ? [] : [{ url: site.url }];
}
