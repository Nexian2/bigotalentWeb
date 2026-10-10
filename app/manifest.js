import { SITE_NAME, SITE_DESCRIPTION } from "@/data/site";

export default function manifest() {
  return {
    id: "/",
    name: SITE_NAME,
    short_name: "Banantara",
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#F5F5F5",
    theme_color: "#1B5E20",
    lang: "id-ID",
    dir: "ltr",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/img/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/img/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
