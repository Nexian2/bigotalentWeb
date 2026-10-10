"use client";

import { useState, useEffect } from "react";
import { divisions } from "@/data/divisions";
import { CONTACT } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon, CloseIcon } from "@/components/Icons";

export default function Divisions() {
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [fullscreenDivision, setFullscreenDivision] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (fullscreenDivision) {
          setFullscreenDivision(null);
        } else if (selectedDivision) {
          setSelectedDivision(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDivision, fullscreenDivision]);

  useEffect(() => {
    if (selectedDivision || fullscreenDivision) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDivision, fullscreenDivision]);

  const openPreview = (division) => {
    setSelectedDivision(division);
  };

  const openFullscreen = (division) => {
    setSelectedDivision(null);
    setFullscreenDivision(division);
  };

  return (
    <section className="bj-section bj-section-alt" id="divisi">
      <div className="bj-section-head">
        <Reveal as="span" className="bj-eyebrow">
          Divisi Unggulan
        </Reveal>
        <Reveal as="h2" delay={80}>
          Tiga Pilar Kekuatan Banantara
        </Reveal>
        <Reveal as="p" delay={160}>
          Setiap divisi dirancang dengan kapabilitas spesifik yang saling terhubung, menghadirkan eksekusi proyek yang solid dari tahap konsep visual, infrastruktur sistem, hingga penetrasi media.
        </Reveal>
      </div>

      <div className="bj-cards bj-cards-three">
        {divisions.map((division, index) => (
          <Reveal key={division.id} delay={index * 120}>
            <div
              className="bj-card"
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Buka detail divisi ${division.code}`}
              onClick={() => openPreview(division)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openPreview(division);
                }
              }}
            >
              <img src={division.logo} alt={`Logo divisi ${division.code}`} />
              <h3 className="bj-card-title">{division.code}</h3>
              <span className="bj-card-tag">{division.scope}</span>
              <p className="bj-card-tagline">{division.tagline}</p>
              <div className="bj-card-action">
                <span className="bj-card-btn-text">
                  Eksplorasi Lengkap
                  <ArrowRightIcon size={15} />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {selectedDivision && (
        <div
          className="bj-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedDivision(null)}
        >
          <div
            className="bj-modal-box bj-render-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bj-render-indicator">
              <div className="bj-render-beam"></div>
            </div>

            <button
              type="button"
              className="bj-modal-close"
              aria-label="Tutup jendela"
              onClick={() => setSelectedDivision(null)}
            >
              <CloseIcon size={18} />
            </button>

            <div className="bj-modal-header">
              <img
                src={selectedDivision.logo}
                alt=""
                className="bj-modal-logo"
                width="56"
                height="56"
              />
              <div>
                <span className="bj-modal-code">{selectedDivision.code}</span>
                <h3 className="bj-modal-title">{selectedDivision.name}</h3>
                <span className="bj-modal-scope">{selectedDivision.scope}</span>
              </div>
            </div>

            <div className="bj-modal-body">
              <p className="bj-modal-lead">{selectedDivision.lead}</p>
              <p className="bj-modal-summary">{selectedDivision.description}</p>

              <div className="bj-modal-section-subtitle">Pilar Layanan Utama</div>
              <div className="bj-detail-list">
                {selectedDivision.pillars.map((pillar) => (
                  <div key={pillar.title} className="bj-detail-item">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bj-modal-footer">
              <button
                type="button"
                className="bj-btn bj-btn-ghost"
                onClick={() => setSelectedDivision(null)}
              >
                Tutup
              </button>
              <button
                type="button"
                className="bj-btn"
                onClick={() => openFullscreen(selectedDivision)}
              >
                <span>Pelajari Rincian Lengkap</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {fullscreenDivision && (
        <div
          className="bj-modal-backdrop bj-deep-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setFullscreenDivision(null)}
        >
          <div
            className="bj-deep-sheet bj-render-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bj-render-indicator">
              <div className="bj-render-beam"></div>
            </div>

            <div className="bj-fullscreen-header">
              <div className="bj-fullscreen-brand">
                <img
                  src={fullscreenDivision.logo}
                  alt=""
                  className="bj-fullscreen-logo"
                  width="48"
                  height="48"
                />
                <div>
                  <span className="bj-fullscreen-code">{fullscreenDivision.code}</span>
                  <h2>{fullscreenDivision.name}</h2>
                  <span className="bj-fullscreen-scope">{fullscreenDivision.scope}</span>
                </div>
              </div>
              <button
                type="button"
                className="bj-fullscreen-close-btn"
                aria-label="Tutup tampilan penuh"
                onClick={() => setFullscreenDivision(null)}
              >
                <CloseIcon size={16} />
                <span>Tutup</span>
              </button>
            </div>

            <div className="bj-fullscreen-content">
              <div className="bj-article-section">
                <p className="bj-article-lead">{fullscreenDivision.lead}</p>
                <p className="bj-article-body">{fullscreenDivision.description}</p>
              </div>

              <div className="bj-article-section">
                <h3 className="bj-article-heading">Cakupan Keahlian &amp; Deliverables Utama</h3>
                <div className="bj-pillar-flow">
                  {fullscreenDivision.pillars.map((pillar, idx) => (
                    <div className="bj-pillar-flow-item" key={pillar.title}>
                      <div className="bj-pillar-head">
                        <span className="bj-pillar-idx">0{idx + 1}</span>
                        <h4>{pillar.title}</h4>
                      </div>
                      <p className="bj-pillar-desc">{pillar.desc}</p>
                      <div className="bj-deliverables-wrap">
                        <span className="bj-deliverables-label">Output &amp; Hasil Nyata:</span>
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
                    </div>
                  ))}
                </div>
              </div>

              <div className="bj-article-section">
                <h3 className="bj-article-heading">Alur Kerja &amp; Standar Eksekusi</h3>
                <div className="bj-process-flow">
                  {fullscreenDivision.process.map((item) => (
                    <div className="bj-process-flow-item" key={item.step}>
                      <div className="bj-process-num">{item.step}</div>
                      <div>
                        <h4>{item.phase}</h4>
                        <p>{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bj-article-section">
                <h3 className="bj-article-heading">Teknologi &amp; Standar Industri</h3>
                <ul className="bj-chips bj-chips-large">
                  {fullscreenDivision.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="bj-fullscreen-cta">
                <p>Siap berkolaborasi atau membutuhkan solusi dari divisi {fullscreenDivision.code}?</p>
                <div className="bj-fullscreen-cta-actions">
                  <a
                    href={`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(`Halo Banantara Joury, saya ingin berkonsultasi mengenai kebutuhan divisi ${fullscreenDivision.code} (${fullscreenDivision.name}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bj-btn"
                  >
                    Konsultasi {fullscreenDivision.code} via WhatsApp
                  </a>
                  <button
                    type="button"
                    className="bj-btn bj-btn-ghost"
                    onClick={() => setFullscreenDivision(null)}
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
