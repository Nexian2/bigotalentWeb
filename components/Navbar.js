"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/produk-dan-jasa", label: "Layanan" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

const moreLinks = [
  { href: "/produk-dan-jasa#portofolio", label: "Portofolio" },
  { href: "/produk-dan-jasa#pembayaran", label: "Cara Pembayaran" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

function isActive(pathname, href) {
  const base = href.split("#")[0];
  if (base === "/") {
    return pathname === "/";
  }
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const bar = document.getElementById("bj-loadbar");
    if (!bar || typeof window === "undefined") {
      return;
    }
    setLoading(true);
    bar.classList.add("bj-loading");
    const timer = window.setTimeout(() => {
      bar.classList.remove("bj-loading");
      setLoading(false);
    }, 600);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleNavClick = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  return (
    <>
      <div id="bj-loadbar" className="bj-loadbar" aria-hidden="true" />
      <nav className="bj-nav" aria-label="Navigasi utama">
        <div className="bj-nav-inner">
          <a className="bj-brand" href="/" onClick={handleNavClick}>
            <img
              className="bj-brand-mark"
              src="/img/banantara.png"
              alt="Logo PT Banantara Joury"
              width="42"
              height="42"
            />
            <span>Banantara Joury</span>
          </a>
          <button
            type="button"
            className="bj-toggle"
            aria-expanded={open}
            aria-controls="bj-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {loading ? "Memuat" : open ? "Tutup" : "Menu"}
          </button>
          <ul id="bj-menu" className={`bj-menu${open ? " bj-open" : ""}`}>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={isActive(pathname, link.href) ? "bj-active" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="bj-menu-more">
              <button
                type="button"
                className={`bj-more-toggle${moreOpen ? " bj-more-active" : ""}`}
                aria-expanded={moreOpen}
                aria-controls="bj-more-menu"
                onClick={() => setMoreOpen((value) => !value)}
              >
                <span>Lainnya</span>
                <svg
                  className="bj-more-caret"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <ul
                id="bj-more-menu"
                className={`bj-more-menu${moreOpen ? " bj-more-open" : ""}`}
              >
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={handleNavClick}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
