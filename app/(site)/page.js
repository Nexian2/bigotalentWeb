import Reveal from "@/components/Reveal";
import FeatureList from "@/components/FeatureList";
import IntroOverlay from "@/components/IntroOverlay";
import { CONTACT } from "@/data/site";

const divisionsPreview = [
  {
    code: "CAD",
    title: "Creative, Animation & Design",
    text: "Desain komunikasi visual, pengembangan gim interaktif, dan produksi animasi 2D/3D untuk memperkuat daya tarik visual merek.",
  },
  {
    code: "ISD",
    title: "Information System & Development",
    text: "Rekayasa perangkat lunak modern, pengembangan aplikasi web skala bisnis, serta infrastruktur jaringan yang tangguh dan aman.",
  },
  {
    code: "MMD",
    title: "Media, Marketing & Broadcast",
    text: "Strategi komunikasi terpadu, promosi digital multi-kanal, dan produksi media penyiaran profesional untuk memperluas jangkauan pasar.",
  },
];

const services = [
  "Pengadaan produk berkualitas tinggi & terstandar",
  "Jasa konsultasi dan solusi teknis terstruktur",
  "Alur kerja yang sederhana, transparan, dan terukur",
  "Standar mutu terpercaya dengan dukungan purna jual",
];

const highlightCards = [
  {
    href: "/tentang-kami",
    eyebrow: "Profil Perusahaan",
    title: "Tentang Kami",
    text: "Kenali visi, misi, nilai, dan perjalanan PT Banantara Joury sebagai mitra solusi terintegrasi.",
    action: "Lihat Profil",
  },
  {
    href: "/produk-dan-jasa",
    eyebrow: "Produk & Jasa",
    title: "Layanan per Divisi Plus Portofolio",
    text: "Telusuri layanan tiap divisi, contoh portofolio, dan cara pembayaran yang transparan.",
    action: "Jelajahi Layanan",
  },
  {
    href: "/produk-dan-jasa#pembayaran",
    eyebrow: "Kemudahan Transaksi",
    title: "Cara Pembayaran",
    text: "Bayar fleksibel lewat transfer bank, QRIS, atau e-wallet dengan skema DP 50% & pelunasan 50%.",
    action: "Lihat Pembayaran",
  },
];

export default function Home() {
  return (
    <>
      <IntroOverlay />

      <header className="bj-hero" id="home">
        <div className="bj-hero-grid">
          <div>
            <Reveal as="span" className="bj-eyebrow">
              Produk &amp; Jasa Terintegrasi
            </Reveal>
            <Reveal as="h1" delay={80}>
              Banantara Joury Menghadirkan Solusi Efisien dan Bernilai Tambah
            </Reveal>
            <Reveal as="p" delay={160}>
              Kami menggabungkan pengadaan produk dan penyediaan jasa dalam satu ekosistem
              kerja yang terstruktur, dirancang untuk memberikan efisiensi serta nilai tambah
              nyata bagi kebutuhan bisnis Anda.
            </Reveal>
            <Reveal delay={240} className="bj-hero-actions">
              <a className="bj-btn" href="/produk-dan-jasa">
                Lihat Produk &amp; Jasa
              </a>
              <a
                className="bj-btn bj-btn-ghost"
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat WhatsApp
              </a>
            </Reveal>
          </div>
          <Reveal delay={200} className="bj-hero-visual">
            <img
              className="bj-hero-logo"
              src="/img/banantara.png"
              alt="Logo PT Banantara Joury"
              width="427"
              height="327"
            />
          </Reveal>
        </div>
      </header>

      <main>
        <section className="bj-section" id="services">
          <div className="bj-split">
            <Reveal className="bj-split-media">
              <div className="bj-image-frame">
                <img src="/img/kerdos.png" alt="Pengadaan produk Banantara Joury" />
              </div>
            </Reveal>
            <Reveal delay={120} className="bj-split-content">
              <span className="bj-eyebrow">Layanan Terpadu</span>
              <h2>Solusi Pengadaan &amp; Jasa Teknis Terstruktur</h2>
              <p>
                Mulai dari pengadaan produk berkualitas tinggi hingga penyediaan jasa konsultasi
                dan solusi teknis terstruktur. Kami hadir menyederhanakan alur kerja serta
                meningkatkan efisiensi operasional bisnis Anda dengan standar mutu terpercaya.
              </p>
              <FeatureList items={services} />
              <div className="bj-mt-4">
                <a
                  className="bj-btn"
                  href={`https://wa.me/${CONTACT.waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bj-section bj-section-alt" id="about">
          <div className="bj-split bj-split-reverse">
            <Reveal className="bj-split-content">
              <span className="bj-eyebrow">Sinergi Keahlian</span>
              <h2>Kolaborasi Tiga Pilar dari Hulu hingga Hilir</h2>
              <p>
                Banantara Joury mengintegrasikan tiga keahlian inti dalam satu mata rantai kerja:{" "}
                <strong>CAD</strong> untuk kekuatan kreatif dan visual, <strong>ISD</strong> untuk
                infrastruktur teknologi dan aplikasi, serta <strong>MMD</strong> untuk amplifikasi
                media dan penetrasi pasar.
              </p>
              <div className="bj-pill-grid bj-pill-grid-three">
                {divisionsPreview.map((item) => (
                  <div className="bj-pill-card" key={item.code}>
                    <span className="bj-pill-code">{item.code}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bj-mt-4">
                <a className="bj-btn bj-btn-ghost" href="/tentang-kami">
                  Selengkapnya Tentang Kami
                </a>
              </div>
            </Reveal>
            <Reveal delay={160} className="bj-split-media">
              <div className="bj-image-frame bj-image-center">
                <img
                  src="/img/logoh.png"
                  alt="Sinergi Tiga Divisi Banantara Joury"
                  className="bj-feature-image"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bj-section" id="explore">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Jelajahi Lebih Lanjut
            </Reveal>
            <Reveal as="h2" delay={80}>
              Pilih Informasi yang Anda Butuhkan
            </Reveal>
            <Reveal as="p" delay={160}>
              Setiap kebutuhan punya halaman khusus agar Anda dapat menemukan detail yang relevan
              dengan cepat.
            </Reveal>
          </div>

          <div className="bj-cards bj-cards-three">
            {highlightCards.map((card, index) => (
              <Reveal key={card.href} delay={index * 120}>
                <a className="bj-nav-card" href={card.href}>
                  <span className="bj-nav-card-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="bj-nav-card-action">
                    {card.action}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bj-section bj-cta-band">
          <Reveal className="bj-cta-band-inner">
            <h2>Siap Memulai Proyek Bersama Banantara Joury?</h2>
            <p>
              Diskusikan kebutuhan produk maupun jasa Anda. Tim kami siap menyusun solusi yang
              tepat sasaran dan terukur.
            </p>
            <div className="bj-cta-band-actions">
              <a
                className="bj-btn"
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Sekarang
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
