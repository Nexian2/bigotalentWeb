import { CONTACT, SOCIAL } from "@/data/site";
import { SocialIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bj-footer-container">
      <div className="bj-footer-main">
        <div className="bj-footer-grid">
          <div className="bj-footer-col bj-footer-brand-col">
            <div className="bj-footer-brand">
              <img
                src="/img/banantara.png"
                alt="Logo PT Banantara Joury"
                width="40"
                height="40"
                className="bj-footer-logo"
              />
              <span className="bj-footer-brand-name">Banantara Joury</span>
            </div>
            <p className="bj-footer-desc">
              Penyedia solusi produk dan jasa terintegrasi yang menggabungkan keahlian manajemen teknologi, media broadcast, dan industri kreatif untuk akselerasi pertumbuhan bisnis Anda.
            </p>
            <div className="bj-footer-badges">
              <span className="bj-badge">Terintegrasi</span>
              <span className="bj-badge">Terukur</span>
              <span className="bj-badge">Tepat Waktu</span>
            </div>
          </div>

          <div className="bj-footer-col">
            <h2 className="bj-footer-heading">Navigasi</h2>
            <ul className="bj-footer-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/produk-dan-jasa">Produk &amp; Jasa</a>
              </li>
              <li>
                <a href="/tentang-kami">Tentang Kami</a>
              </li>
              <li>
                <a href="/produk-dan-jasa#portofolio">Portofolio</a>
              </li>
              <li>
                <a href="/produk-dan-jasa#pembayaran">Cara Pembayaran</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/kontak">Hubungi Kami</a>
              </li>
            </ul>
          </div>

          <div className="bj-footer-col">
            <h2 className="bj-footer-heading">Divisi & Layanan</h2>
            <ul className="bj-footer-list">
              <li>
                <a href="/produk-dan-jasa#cad">
                  <strong>CAD</strong> &mdash; DKV, Gim &amp; Animasi
                </a>
              </li>
              <li>
                <a href="/produk-dan-jasa#isd">
                  <strong>ISD</strong> &mdash; RPL &amp; Jaringan Komputer
                </a>
              </li>
              <li>
                <a href="/produk-dan-jasa#mmd">
                  <strong>MMD</strong> &mdash; Media, Promosi &amp; Broadcast
                </a>
              </li>
            </ul>
          </div>

          <div className="bj-footer-col">
            <h2 className="bj-footer-heading">Media Sosial & Kontak</h2>
            <p className="bj-footer-subtext">
              Terhubung dengan akun resmi dan kanal informasi kami:
            </p>
            <ul className="bj-footer-social">
              {SOCIAL.map((item) => (
                <li key={item.icon}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="bj-social-link"
                  >
                    <SocialIcon name={item.icon} size={15} className="bj-social-mark" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="bj-footer-contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href={`https://wa.me/${CONTACT.waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bj-footer-bottom">
        <div className="bj-footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} PT Banantara Joury. Seluruh hak cipta dilindungi.</p>
          <div className="bj-footer-links">
            <a href="/kontak" className="bj-footer-contact-link">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
