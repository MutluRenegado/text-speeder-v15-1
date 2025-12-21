export default function AccessibilityLayer() {
  return (
    <div className="layer layer-a11y" role="region" aria-label="Accessibility">
      <div className="a11y-bar">
        <span className="a11y-dot" aria-hidden="true" />
        <span className="a11y-text">Accessibility Layer (reserved)</span>
      </div>
    </div>
  );
}
