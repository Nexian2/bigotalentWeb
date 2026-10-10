"use client";

import { useState } from "react";
import { CONTACT } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    category: "CAD - DKV, Gim & Animasi",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }
    const text = `Halo Banantara Joury,\n\nNama: ${formData.name}\nDivisi / Layanan: ${formData.category}\nPesan: ${formData.message}\n\nSaya ingin berdiskusi mengenai kebutuhan ini. Terima kasih.`;
    const url = `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bj-section bj-contact-section" id="contact">
      <div className="bj-section-head">
        <Reveal as="span" className="bj-eyebrow">
          Contact Us
        </Reveal>
        <Reveal as="h2" delay={80}>
          Hubungi Banantara Joury
        </Reveal>
        <Reveal as="p" delay={160}>
          Kirimkan pesan langsung ke nomor WhatsApp resmi kami untuk konsultasi pengadaan produk dan jasa terpadu.
        </Reveal>
      </div>

      <div className="bj-contact-wrapper">
        <Reveal className="bj-contact-form-card">
          <h3>Kirim Pesan ke WhatsApp</h3>
          <p className="bj-form-subtitle">
            Isi formulir di bawah ini dan pesan akan otomatis terformat untuk dikirim ke WhatsApp kami.
          </p>

          <form onSubmit={handleSubmit} className="bj-form">
            <div className="bj-form-group">
              <label htmlFor="bj-name">Nama Lengkap</label>
              <input
                id="bj-name"
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={handleChange}
                className="bj-input"
              />
            </div>

            <div className="bj-form-group">
              <label htmlFor="bj-category">Kategori / Divisi</label>
              <select
                id="bj-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="bj-input"
              >
                <option value="Pengadaan Produk">Pengadaan Produk</option>
                <option value="CAD - DKV, Gim & Animasi">CAD &mdash; DKV, Gim & Animasi</option>
                <option value="ISD - RPL & Jaringan Komputer">ISD &mdash; RPL & Jaringan Komputer</option>
                <option value="MMD - Media, Promosi & Broadcast">MMD &mdash; Media, Promosi & Broadcast</option>
                <option value="Konsultasi Umum">Konsultasi Umum</option>
              </select>
            </div>

            <div className="bj-form-group">
              <label htmlFor="bj-message">Pesan / Kebutuhan</label>
              <textarea
                id="bj-message"
                name="message"
                required
                rows={4}
                placeholder="Tuliskan rincian kebutuhan atau pertanyaan Anda..."
                value={formData.message}
                onChange={handleChange}
                className="bj-input bj-textarea"
              />
            </div>

            <button type="submit" className="bj-btn bj-btn-submit">
              <span>Kirim via WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.953 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.68-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.125-.276-.2-.577-.35zM12.004 21.75c-1.748 0-3.41-.462-4.869-1.328l-.349-.208-3.62.949.965-3.528-.228-.363a9.72 9.72 0 0 1-1.492-5.187C2.411 6.643 6.71 2.344 12.004 2.344c2.564 0 4.975 1 6.788 2.813a9.553 9.553 0 0 1 2.812 6.786c0 5.295-4.298 9.807-9.6 9.807zm8.211-17.817C17.994 1.711 15.116.625 12.004.625 5.728.625.625 5.728.625 12.004c0 2.004.524 3.963 1.52 5.688L0 24l6.479-1.7c1.66.906 3.535 1.383 5.525 1.383 6.276 0 11.379-5.103 11.379-11.379 0-3.04-1.184-5.901-3.168-8.085z"/>
              </svg>
            </button>
          </form>
        </Reveal>

        <Reveal delay={160} className="bj-contact-wa-card">
          <div className="bj-wa-badge">Official WhatsApp Support</div>
          <div className="bj-wa-logo-wrapper">
            <svg className="bj-wa-large-logo" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.953 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.68-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.125-.276-.2-.577-.35zM12.004 21.75c-1.748 0-3.41-.462-4.869-1.328l-.349-.208-3.62.949.965-3.528-.228-.363a9.72 9.72 0 0 1-1.492-5.187C2.411 6.643 6.71 2.344 12.004 2.344c2.564 0 4.975 1 6.788 2.813a9.553 9.553 0 0 1 2.812 6.786c0 5.295-4.298 9.807-9.6 9.807zm8.211-17.817C17.994 1.711 15.116.625 12.004.625 5.728.625.625 5.728.625 12.004c0 2.004.524 3.963 1.52 5.688L0 24l6.479-1.7c1.66.906 3.535 1.383 5.525 1.383 6.276 0 11.379-5.103 11.379-11.379 0-3.04-1.184-5.901-3.168-8.085z"/>
            </svg>
          </div>
          <h3>Layanan WhatsApp Cepat</h3>
          <p className="bj-wa-number">{CONTACT.phoneDisplay}</p>
          <p className="bj-wa-desc">
            Hubungi tim representatif Banantara Joury secara langsung untuk diskusi cepat, penawaran harga, atau konsultasi proyek.
          </p>
          <div className="bj-wa-features">
            <div className="bj-wa-feat-item">
              <span className="bj-wa-feat-dot"></span>
              <span>Online &amp; Siap Melayani</span>
            </div>
            <div className="bj-wa-feat-item">
              <span className="bj-wa-feat-dot"></span>
              <span>Respons Langsung dari Tim Ahli</span>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT.waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bj-btn bj-btn-wa-direct"
          >
            <span>Buka Chat Langsung</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
