import type { MetadataRoute } from "next";
import { marca } from "@geio/tokens";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${marca.site}/sitemap.xml`,
  };
}
