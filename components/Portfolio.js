import Reveal from "@/components/Reveal";

export default function Portfolio({ items, divisionCode }) {
  return (
    <div className="bj-portfolio-grid">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 100}>
          <article className="bj-portfolio-card">
            <div className="bj-portfolio-top">
              <span className="bj-portfolio-cat">{item.category}</span>
              <span className="bj-portfolio-year">{item.year}</span>
            </div>
            <h4 className="bj-portfolio-title">{item.title}</h4>
            <p className="bj-portfolio-summary">{item.summary}</p>
            <div className="bj-portfolio-client">
              <span className="bj-portfolio-client-label">Klien</span>
              <span>{item.client}</span>
            </div>
            {divisionCode ? (
              <span className="bj-portfolio-badge">{divisionCode}</span>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
