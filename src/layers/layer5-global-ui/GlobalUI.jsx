export default function GlobalUI({ theme, setTheme }) {
  return (
    <div className="layer layer-global-ui" aria-hidden="false">
      <div className="global-ui">
        <div className="global-ui__brand">TextSpeeder</div>

        <button
          className="chip"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          Theme: {theme}
        </button>
      </div>
    </div>
  );
}
