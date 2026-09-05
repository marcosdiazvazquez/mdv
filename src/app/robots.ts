import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/graphql",
    },
    sitemap: new URL("/sitemap.xml", RESUME_DATA.personalWebsiteUrl).toString(),
  };
}
