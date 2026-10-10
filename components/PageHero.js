import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <header className="bj-page-hero">
      <div className="bj-page-hero-inner">
        {eyebrow ? (
          <Reveal as="span" className="bj-eyebrow">
            {eyebrow}
          </Reveal>
        ) : null}
        <Reveal as="h1" delay={80}>
          {title}
        </Reveal>
        {description ? (
          <Reveal as="p" delay={160}>
            {description}
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={240} className="bj-page-hero-actions">
            {children}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
