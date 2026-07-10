import type { MetadataRoute } from "next";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date()
    }
  ];
}
