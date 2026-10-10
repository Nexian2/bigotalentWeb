"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { CloseIcon } from "@/components/Icons";

export default function PortfolioGallery({ groups }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) {
      return;
    }
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {groups.map((group) => {
        const items =
          group.items ||
          (group.students ? group.students.flatMap((s) => s.images || []) : []);

        return (
          <div className="bj-gallery-group" key={group.group}>
            <div className="bj-gallery-group-head">
              <div>
                <span className="bj-gallery-code">{group.group}</span>
                {group.label ? <h4>{group.label}</h4> : null}
              </div>
              {group.description ? <p>{group.description}</p> : null}
            </div>

            <div className="bj-gallery-grid">
              {items.map((img, i) => (
                <Reveal key={img.src} delay={(i * 50) % 240}>
                  <button
                    type="button"
                    className="bj-gallery-item"
                    onClick={() => setLightbox(img)}
                    aria-label={`Perbesar ${img.title}`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                    />
                    <span className="bj-gallery-caption">{img.title}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}

      {lightbox ? (
        <div
          className="bj-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="bj-lightbox-close"
            aria-label="Tutup gambar"
            onClick={() => setLightbox(null)}
          >
            <CloseIcon size={22} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>{lightbox.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
