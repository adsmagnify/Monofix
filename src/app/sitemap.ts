import type { MetadataRoute } from "next";
import { services } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://monofixpackaging.com";
  const paths = [
    "",
    "/about",
    "/why-monofix",
    "/services",
    "/gallery",
    "/sustainability",
    "/insights",
    "/case-studies",
    "/contact",
    "/packaging-made-easy",
    ...services.map((service) => `/services/${service.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
