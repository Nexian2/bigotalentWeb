import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { CONTACT, SITE_URL } from "@/data/site";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Banantara Joury melalui WhatsApp, email, atau formulir konsultasi untuk kebutuhan pengadaan produk dan jasa terintegrasi.",
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Kontak | Banantara Joury",
    description:
      "Hubungi tim Banantara Joury untuk konsultasi pengadaan produk dan jasa terintegrasi.",
    url: `${SITE_URL}/kontak`,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/kontak/#contactpage`,
  url: `${SITE_URL}/kontak`,
  name: "Hubungi Banantara Joury",
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "PT Banantara Joury",
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
  },
};

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Terhubung dengan Banantara Joury"
        description="Punya pertanyaan tentang produk, jasa, atau penawaran? Kirimkan pesan Anda dan tim kami akan merespons melalui WhatsApp resmi."
      />

      <main>
        <ContactSection />
      </main>
    </>
  );
}
