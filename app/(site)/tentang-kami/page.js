import Reveal from "@/components/Reveal";
import FeatureList from "@/components/FeatureList";
import PageHero from "@/components/PageHero";
import { CONTACT, SITE_URL } from "@/data/site";
import { divisions } from "@/data/divisions";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Profil PT Banantara Joury: pengenalan perusahaan, visi, misi, nilai, serta sinergi tiga divisi CAD, ISD, dan MMD dalam menghadirkan solusi produk dan jasa terintegrasi.",
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    title: "Tentang Kami | Banantara Joury",
    description:
      "Kenali visi, misi, nilai, dan perjalanan PT Banantara Joury sebagai mitra solusi produk dan jasa terintegrasi.",
    url: `${SITE_URL}/tentang-kami`,
  },
};

const values = [
  {
    title: "Integritas",
    text: "Menjunjung kejujuran, transparansi, dan tanggung jawab pada setiap proses kerja dan komunikasi dengan klien.",
  },
  {
    title: "Kualitas",
    text: "Menjaga standar mutu di setiap lini pekerjaan, mulai dari perencanaan, eksekusi, hingga serah terima hasil.",
  },
  {
    title: "Kolaborasi",
    text: "Menggabungkan keahlian lintas divisi dalam satu alur kerja yang saling mendukung dan terpadu.",
  },
  {
    title: "Inovasi",
    text: "Terus mengadopsi teknologi dan pendekatan baru agar solusi yang diberikan tetap relevan dan berdaya saing.",
  },
];

const milestones = [
  {
    step: "01",
    title: "Fondasi Keahlian",
    text: "Berawal dari kompetensi di bidang kreatif, teknologi informasi, dan media yang tumbuh seiring kebutuhan mitra.",
  },
  {
    step: "02",
    title: "Integrasi Tiga Divisi",
    text: "Menyatukan CAD, ISD, dan MMD dalam satu ekosistem kerja agar pengadaan produk dan jasa berjalan efisien.",
  },
  {
    step: "03",
    title: "Kemitraan Berkelanjutan",
    text: "Membangun hubungan jangka panjang dengan klien melalui pelayanan terukur dan dukungan purna jual.",
  },
];

const advantages = [
  "Satu pintu untuk pengadaan produk dan penyediaan jasa",
  "Tim ahli di bidang desain, teknologi, dan media",
  "Alur kerja terstruktur dengan indikator kinerja jelas",
  "Komitmen tenggat waktu dan jaminan dukungan purna jual",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/tentang-kami/#aboutpage`,
  url: `${SITE_URL}/tentang-kami`,
  name: "Tentang Banantara Joury",
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function TentangKamiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <PageHero
        eyebrow="Profil Perusahaan"
        title="Mengenal PT Banantara Joury"
        description="Banantara Joury adalah penyedia solusi produk dan jasa terintegrasi yang menggabungkan keahlian industri kreatif, teknologi informasi, dan media untuk menghadirkan nilai tambah nyata bagi bisnis Anda."
      >
        <a className="bj-btn" href="/produk-dan-jasa">
          Lihat Produk &amp; Jasa
        </a>
        <a className="bj-btn bj-btn-ghost" href="/kontak">
          Hubungi Kami
        </a>
      </PageHero>

      <main>
        <section className="bj-section" id="profil">
          <div className="bj-split">
            <Reveal className="bj-split-media">
              <div className="bj-image-frame bj-image-center">
                <img
                  src="/img/logoh.png"
                  alt="Identitas visual PT Banantara Joury"
                  className="bj-feature-image"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="bj-split-content">
              <span className="bj-eyebrow">Tentang Perusahaan</span>
              <h2>Mitra Solusi Produk &amp; Jasa yang Terintegrasi</h2>
              <p>
                PT Banantara Joury hadir untuk menjawab kebutuhan bisnis akan penyedia yang mampu
                menangani pengadaan produk sekaligus penyediaan jasa dalam satu koordinasi. Dengan
                menggabungkan kompetensi desain kreatif, rekayasa teknologi, serta produksi dan
                pemasaran media, kami menghadirkan alur kerja yang lebih sederhana, transparan, dan
                terukur.
              </p>
              <p>
                Kami percaya bahwa hasil terbaik lahir dari proses yang rapi. Karena itu setiap
                pekerjaan dirancang dengan ruang lingkup yang jelas, indikator kinerja yang
                terukur, dan komunikasi yang terbuka bersama klien.
              </p>
              <FeatureList items={advantages} />
            </Reveal>
          </div>
        </section>

        <section className="bj-section bj-section-alt" id="visi-misi">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Arah Perusahaan
            </Reveal>
            <Reveal as="h2" delay={80}>
              Visi &amp; Misi Kami
            </Reveal>
          </div>

          <div className="bj-vm-grid">
            <Reveal className="bj-vm-card">
              <span className="bj-vm-label">Visi</span>
              <p>
                Menjadi mitra solusi produk dan jasa terintegrasi yang terpercaya, unggul dalam
                kualitas, serta tumbuh bersama bisnis dan institusi di Indonesia.
              </p>
            </Reveal>
            <Reveal delay={120} className="bj-vm-card">
              <span className="bj-vm-label">Misi</span>
              <ul className="bj-vm-list">
                <li>Menyediakan pengadaan produk berkualitas dengan standar mutu terjamin.</li>
                <li>Menghadirkan jasa terstruktur yang tepat waktu dan terukur.</li>
                <li>Mengembangkan kompetensi lintas divisi secara berkelanjutan.</li>
                <li>Membangun hubungan kemitraan jangka panjang berbasis kepercayaan.</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="bj-section" id="nilai">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Nilai Inti
            </Reveal>
            <Reveal as="h2" delay={80}>
              Prinsip yang Kami Pegang
            </Reveal>
            <Reveal as="p" delay={160}>
              Nilai-nilai ini menjadi dasar dalam setiap keputusan dan pekerjaan tim Banantara Joury.
            </Reveal>
          </div>

          <div className="bj-cards bj-cards-three">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="bj-value-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bj-section bj-section-alt" id="sinergi">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Sinergi Divisi
            </Reveal>
            <Reveal as="h2" delay={80}>
              Tiga Pilar Keahlian
            </Reveal>
            <Reveal as="p" delay={160}>
              Setiap divisi memiliki kapabilitas spesifik yang saling melengkapi dari hulu ke hilir.
            </Reveal>
          </div>

          <div className="bj-cards bj-cards-three">
            {divisions.map((division, index) => (
              <Reveal key={division.id} delay={index * 120}>
                <div className="bj-card bj-card-static">
                  <img src={division.logo} alt={`Logo divisi ${division.code}`} />
                  <h3 className="bj-card-title">{division.code}</h3>
                  <span className="bj-card-tag">{division.name}</span>
                  <p className="bj-card-tagline">{division.tagline}</p>
                  <div className="bj-card-action">
                    <a className="bj-card-btn-text" href={`/produk-dan-jasa#${division.id}`}>
                      Detail Layanan
                      <svg
                        width="15"
                        height="15"
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
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bj-section" id="perjalanan">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Perjalanan
            </Reveal>
            <Reveal as="h2" delay={80}>
              Langkah Pertumbuhan Kami
            </Reveal>
          </div>

          <div className="bj-workflow-grid bj-workflow-grid-three">
            {milestones.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div className="bj-workflow-card">
                  <div className="bj-workflow-header">
                    <span className="bj-workflow-num">{item.step}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bj-section bj-cta-band">
          <Reveal className="bj-cta-band-inner">
            <h2>Ayo Berkolaborasi dengan Banantara Joury</h2>
            <p>
              Sampaikan kebutuhan Anda dan kami akan membantu merumuskan solusi yang paling sesuai.
            </p>
            <div className="bj-cta-band-actions">
              <a
                className="bj-btn"
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat WhatsApp
              </a>
              <a className="bj-btn bj-btn-ghost" href="/produk-dan-jasa">
                Lihat Produk &amp; Jasa
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
