"use client";

import { useState, useEffect } from "react";
import { CONTACT } from "@/data/site";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${CONTACT.waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Banantara Joury"
      className={`bj-float-wa${visible ? " bj-float-visible" : ""}`}
    >
      <span className="bj-float-wa-ping"></span>
      <svg
        className="bj-float-wa-icon"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.953 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.68-2.089-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.125-.276-.2-.577-.35zM12.004 21.75c-1.748 0-3.41-.462-4.869-1.328l-.349-.208-3.62.949.965-3.528-.228-.363a9.72 9.72 0 0 1-1.492-5.187C2.411 6.643 6.71 2.344 12.004 2.344c2.564 0 4.975 1 6.788 2.813a9.553 9.553 0 0 1 2.812 6.786c0 5.295-4.298 9.807-9.6 9.807zm8.211-17.817C17.994 1.711 15.116.625 12.004.625 5.728.625.625 5.728.625 12.004c0 2.004.524 3.963 1.52 5.688L0 24l6.479-1.7c1.66.906 3.535 1.383 5.525 1.383 6.276 0 11.379-5.103 11.379-11.379 0-3.04-1.184-5.901-3.168-8.085z" />
      </svg>
      <span className="bj-float-wa-text">Chat WhatsApp</span>
    </a>
  );
}
