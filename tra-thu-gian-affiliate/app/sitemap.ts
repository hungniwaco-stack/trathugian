import type { MetadataRoute } from "next";
import { posts } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trathugian.shop";
  const staticRoutes = [
    "",
    "/tra-ngu-ngon",
    "/giam-stress",
    "/review-tra",
    "/healthy-lifestyle",
    "/kien-thuc-tra",
    "/ve-chung-toi",
    "/tac-gia/minh-thu",
    "/chinh-sach-affiliate",
    "/lien-he",
    "/dieu-khoan-su-dung"
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const postEntries = posts.map((post) => ({
    url: `${base}/bai-viet/${post.slug}/`,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [...staticEntries, ...postEntries];
}

