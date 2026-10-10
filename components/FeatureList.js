import { CheckIcon } from "@/components/Icons";

export default function FeatureList({ items, className = "" }) {
  return (
    <ul className={`bj-features${className ? ` ${className}` : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="bj-features-bullet" aria-hidden="true">
            <CheckIcon size={12} strokeWidth={3.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
