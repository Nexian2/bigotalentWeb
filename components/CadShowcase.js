"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import PortfolioGallery from "@/components/PortfolioGallery";
import { CheckIcon, CloseIcon } from "@/components/Icons";

export default function CadShowcase({ division, groups }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="bj-split">
        <Reveal className="bj-split-media">
          <button
            type="button"
            className="bj-logo-trigger"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            <span className="bj-image-frame bj-image-center">
              <img
                src={division.logo}
                alt={`Logo divisi ${division.code} Banantara Joury`}
                className="bj-feature-image"
              />
            </span>
            <span className="bj-logo-trigger-hint">
              Lihat Portofolio
              <svg
                className="bj-logo-trigger-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
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

      {open ? (
        <div
          className="bj-portfolio-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Portofolio divisi ${division.code}`}
        >
          <div className="bj-portfolio-window">
            <header className="bj-portfolio-window-bar">
              <div className="bj-portfolio-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="bj-portfolio-window-title">
                <span className="bj-gallery-code">Portofolio {division.code}</span>
                <strong>{division.name}</strong>
              </div>
              <button
                type="button"
                className="bj-portfolio-window-close"
                onClick={() => setOpen(false)}
                aria-label="Tutup portofolio"
              >
                <CloseIcon size={18} />
              </button>
            </header>
            <div className="bj-portfolio-window-body">
              <p className="bj-gallery-brief">{division.tagline}</p>
              <PortfolioGallery groups={groups} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
