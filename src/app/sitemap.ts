import type { MetadataRoute } from "next";

const siteUrl = "https://jamesosullivan.space";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/highlights", "/mathematics", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
