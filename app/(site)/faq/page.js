import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { faqs } from "@/data/faq";
import { CONTACT, SITE_URL } from "@/data/site";

export const metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan seputar layanan, alur kerja, dan cara menghubungi Banantara Joury.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Banantara Joury",
    description:
      "Jawaban singkat mengenai layanan, alur kerja, dan cara menghubungi tim Banantara Joury.",
    url: `${SITE_URL}/faq`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq/#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Pusat Bantuan"
        title="Pertanyaan yang Sering Diajukan"
        description="Temukan jawaban singkat mengenai layanan, alur kerja, pembayaran, dan cara menghubungi tim Banantara Joury."
      />

      <main>
        <section className="bj-section" id="faq">
          <div className="bj-faq-list">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 60}>
                <details className="bj-faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <span className="bj-faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bj-section bj-cta-band">
          <Reveal className="bj-cta-band-inner">
            <h2>Masih Ada Pertanyaan?</h2>
            <p>Tim kami siap membantu menjawab kebutuhan spesifik Anda secara langsung.</p>
            <div className="bj-cta-band-actions">
              <a
                className="bj-btn"
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tanya via WhatsApp
              </a>
              <a className="bj-btn bj-btn-ghost" href="/kontak">
                Halaman Kontak
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
