import { SITE_URL } from "@/data/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/produk-dan-jasa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tentang-kami", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontak", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => {
    const url = `${SITE_URL}${route.path}`;
    return {
      url,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          "id-ID": url,
        },
      },
    };
  });
}
