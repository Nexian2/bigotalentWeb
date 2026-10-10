import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import CadShowcase from "@/components/CadShowcase";
import IsdShowcase from "@/components/IsdShowcase";
import MmdShowcase from "@/components/MmdShowcase";
import { CheckIcon } from "@/components/Icons";
import { CONTACT, SITE_URL } from "@/data/site";
import { divisions } from "@/data/divisions";
import { portfolio } from "@/data/portfolio";
import { cadPortfolioGroups } from "@/data/cad-portfolio";
import { isdPortfolioGroups } from "@/data/isd-portfolio";
import { mmdVideos } from "@/data/mmd-video";
import { paymentMethods, paymentTerms, paymentNotes } from "@/data/payment";

export const metadata = {
  title: "Produk & Jasa",
  description:
    "Produk dan jasa Banantara Joury per divisi: CAD (DKV, gim & animasi), ISD (software & jaringan), MMD (media & broadcast), lengkap dengan portofolio dan cara pembayaran (transfer, QRIS, e-wallet).",
  alternates: {
    canonical: "/produk-dan-jasa",
  },
  openGraph: {
    title: "Produk & Jasa | Banantara Joury",
    description:
      "Telusuri layanan tiap divisi, portofolio proyek, serta cara pembayaran transfer, QRIS, dan e-wallet.",
    url: `${SITE_URL}/produk-dan-jasa`,
  },
};

const paymentIcons = {
  bank: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path d="M3 21h18" />
    </svg>
  ),
  qris: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3M20 14v3M14 20h6v-3" />
    </svg>
  ),
  wallet: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1" />
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <circle cx="16" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const portfolioByDivision = (id) =>
  portfolio.find((group) => group.divisionId === id)?.items ?? [];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/produk-dan-jasa/#collection`,
  url: `${SITE_URL}/produk-dan-jasa`,
  name: "Produk & Jasa Banantara Joury",
  about: { "@id": `${SITE_URL}/#organization` },
  hasPart: divisions.map((division) => ({
    "@type": "Service",
    name: division.name,
    description: division.tagline,
    serviceType: division.scope,
    provider: { "@id": `${SITE_URL}/#organization` },
  })),
};

export default function ProdukDanJasaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Produk & Jasa"
        title="Layanan Tiap Divisi, Portofolio, dan Cara Pembayaran"
        description="Banantara Joury menyediakan pengadaan produk serta jasa terintegrasi melalui tiga divisi unggulan. Telusuri cakupan layanan, contoh pekerjaan, dan kemudahan transaksi kami."
      >
        <a className="bj-btn" href="#cad">
          Mulai dari Divisi CAD
        </a>
        <a className="bj-btn bj-btn-ghost" href="#pembayaran">
          Cara Pembayaran
        </a>
      </PageHero>

      <main>
        {divisions.map((division, index) => {
          const alt = index % 2 === 1;
          const items = portfolioByDivision(division.id);
          return (
            <section
              key={division.id}
              id={division.id}
              className={`bj-section${alt ? " bj-section-alt" : ""}`}
            >
              <div className="bj-section-head">
                <Reveal as="span" className="bj-eyebrow">
                  Divisi {division.code}
                </Reveal>
                <Reveal as="h2" delay={80}>
                  {division.name}
                </Reveal>
                <Reveal as="p" delay={160}>
                  {division.lead}
                </Reveal>
              </div>

              {division.id === "cad" ? (
                <CadShowcase division={division} groups={cadPortfolioGroups} />
              ) : division.id === "isd" ? (
                <IsdShowcase division={division} groups={isdPortfolioGroups} />
              ) : division.id === "mmd" ? (
                <MmdShowcase division={division} videos={mmdVideos} />
              ) : (
                <div className="bj-split">
                  <Reveal className="bj-split-media">
                    <div className="bj-image-frame bj-image-center">
                      <img
                        src={division.logo}
                        alt={`Logo divisi ${division.code} Banantara Joury`}
                        className="bj-feature-image"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={120} className="bj-split-content">
                    <span className="bj-eyebrow">Cakupan Keahlian</span>
                    <h2 className="bj-h3">Pilar Layanan Utama</h2>
                    <div className="bj-pillar-flow">
                      {division.pillars.map((pillar, idx) => (
                        <div className="bj-pillar-flow-item" key={pillar.title}>
                          <div className="bj-pillar-head">
                            <span className="bj-pillar-idx">0{idx + 1}</span>
                            <h4>{pillar.title}</h4>
                          </div>
                          <p className="bj-pillar-desc">{pillar.desc}</p>
                          <ul className="bj-deliverables-list">
                            {pillar.deliverables.map((item) => (
                              <li key={item}>
                                <span className="bj-deliv-dot">
                                  <CheckIcon size={13} strokeWidth={3.2} />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              )}

              {division.id !== "isd" && division.id !== "cad" ? (
                <div className="bj-subsection">
                  <div className="bj-subsection-head">
                    <h3 className="bj-article-heading">Portofolio {division.code}</h3>
                    <span className="bj-subsection-note">Contoh pekerjaan representatif</span>
                  </div>
                  <Portfolio items={items} divisionCode={division.code} />
                </div>
              ) : null}

              <div className="bj-subsection">
                <h3 className="bj-article-heading">Teknologi &amp; Standar Industri</h3>
                <ul className="bj-chips bj-chips-large">
                  {division.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="bj-mt-4">
                  <a
                    className="bj-btn"
                    href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(
                      `Halo Banantara Joury, saya ingin berkonsultasi mengenai kebutuhan divisi ${division.code} (${division.name}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasi Divisi {division.code}
                  </a>
                </div>
              </div>
            </section>
          );
        })}

        <section className="bj-section" id="diskon">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Promo &amp; Diskon
            </Reveal>
            <Reveal as="h2" delay={80}>
              Penawaran Khusus
            </Reveal>
            <Reveal as="p" delay={160}>
              Informasi promo dan diskon akan tersedia di sini. Saat ini belum ada penawaran aktif,
              silakan hubungi kami untuk mendiskusikan kebutuhan Anda.
            </Reveal>
          </div>

          <Reveal className="bj-empty-state">
            <span className="bj-empty-badge">Coming Soon</span>
            <p>
              Program diskon per divisi sedang dalam proses finalisasi. Hubungi tim kami untuk
              mendapatkan informasi terbaru.
            </p>
            <a
              className="bj-btn bj-btn-ghost"
              href={`https://wa.me/${CONTACT.waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tanya Promo Terbaru
            </a>
          </Reveal>
        </section>

        <section className="bj-section bj-section-alt" id="pembayaran">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Cara Pembayaran
            </Reveal>
            <Reveal as="h2" delay={80}>
              Metode &amp; Skema Pembayaran
            </Reveal>
            <Reveal as="p" delay={160}>
              Kami mempermudah transaksi dengan pilihan metode pembayaran yang fleksibel serta
              skema DP 50% dan pelunasan 50%.
            </Reveal>
          </div>

          <div className="bj-cards bj-cards-three">
            {paymentMethods.map((method, index) => (
              <Reveal key={method.id} delay={index * 100}>
                <div className="bj-pay-card">
                  <span className="bj-pay-icon">{paymentIcons[method.icon]}</span>
                  <h3>{method.label}</h3>
                  <p>{method.description}</p>
                  <ul className="bj-pay-chips">
                    {method.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="bj-terms-grid">
            {paymentTerms.map((term, index) => (
              <Reveal key={term.step} delay={index * 120}>
                <div className="bj-term-card">
                  <span className="bj-term-num">{term.step}</span>
                  <div>
                    <h3>{term.title}</h3>
                    <p>{term.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="bj-pay-note">
            <div className="bj-pay-note-head">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Catatan Penting</span>
            </div>
            <ul className="bj-pay-note-list">
              {paymentNotes.map((note) => (
                <li key={note}>
                  <span className="bj-features-bullet" aria-hidden="true">
                    <CheckIcon size={12} strokeWidth={3.5} />
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="bj-pay-cta">
            <p>Butuh penawaran harga atau rincian pembayaran khusus?</p>
            <div className="bj-cta-band-actions">
              <a
                className="bj-btn"
                href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(
                  "Halo Banantara Joury, saya ingin menanyakan rincian harga dan cara pembayaran."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Minta Penawaran
              </a>
              <a className="bj-btn bj-btn-ghost" href="/kontak">
                Hubungi Kami
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
