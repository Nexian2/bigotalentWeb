import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  CONTACT,
  SOCIAL,
} from "@/data/site";
import { divisions } from "@/data/divisions";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Banantara Joury - Produk & Jasa Terintegrasi",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    template: "%s | Banantara Joury",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    icon: [
      { url: "/img/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/img/favicon-32.png",
    apple: [
      { url: "/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banantara Joury | Layanan Produk dan Jasa Terintegrasi",
    description: SITE_DESCRIPTION,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1B5E20" },
    { media: "(prefers-color-scheme: dark)", color: "#0E2417" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "PT Banantara Joury",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/icon-512.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  areaServed: "ID",
  knowsAbout: SITE_KEYWORDS,
  sameAs: SOCIAL.map((item) => item.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT.phoneE164,
      email: CONTACT.email,
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Layanan ${SITE_NAME}`,
  itemListElement: divisions.map((division, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: division.name,
      description: division.tagline,
      serviceType: division.scope,
      areaServed: "ID",
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const noJsRevealFallback = `<style>.bj-reveal{opacity:1!important;transform:none!important;transition:none!important}</style>`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={manrope.variable}>
      <body className={manrope.className}>
        <noscript dangerouslySetInnerHTML={{ __html: noJsRevealFallback }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, servicesSchema]),
          }}
        />
      </body>
    </html>
  );
}
