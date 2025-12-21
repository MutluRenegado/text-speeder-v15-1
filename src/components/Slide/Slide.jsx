import "./slide.css";

export default function Slide({ children }) {
  return (
    <section className="slide-wrap">
      <div className="slide-frame">{children}</div>
    </section>
  );
}

