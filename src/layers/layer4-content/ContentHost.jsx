<<<<<<< HEAD
import "./ContentHost.css";

import Intro from "../../pages/Intro/Intro";
import WelcomeScreen from "../../pages/Welcome/WelcomeScreen";

export default function ContentHost({ view, onNavigate, theme }) {
  return (
    <div className="app-frame">
      {/* MAIN CONTENT */}
      <main className="main-content">
        {view === "intro" && (
          <Intro
            theme={theme}
            onContinue={() => onNavigate("welcome")}
          />
        )}

        {view === "welcome" && (
          <WelcomeScreen
            onStart={() => onNavigate("app")}
            onTest={() => onNavigate("test")}
          />
        )}

        {view === "app" && (
          <>
            <h1 style={{ color: "white" }}>Main App Loaded</h1>
            <p style={{ color: "#a3a7b7" }}>View: {view}</p>
          </>
        )}
      </main>
=======
import Intro from "../../pages/Intro/Intro";
import WelcomeScreen from "../../pages/Welcome/WelcomeScreen";
import Slide from "../../components/Slide/Slide";

export default function ContentHost({ view, onNavigate }) {
  return (
    <main className="layer layer-content" role="main">
      {view === "intro" && (
        <Intro onContinue={() => onNavigate("welcome")} />
      )}
>>>>>>> 8e79745e87badcd7c4e044857485b368390e6414

      {view === "welcome" && (
        <WelcomeScreen
          onStart={() => onNavigate("app")}
          onTest={() => onNavigate("test")}
          onBackToIntro={() => onNavigate("intro")}
        />
      )}

<<<<<<< HEAD
      {/* ALWAYS-VISIBLE HANDLE */}
      <div className="asset-handle">☰</div>
    </div>
=======
      {view === "app" && (
        <Slide>
          <div className="screen-placeholder">
            <h2>App Screen (Phase 7 placeholder)</h2>
            <p>This is where TextSpeeder core app will live.</p>
            <button className="btn" onClick={() => onNavigate("welcome")}>
              Back to Welcome
            </button>
          </div>
        </Slide>
      )}

      {view === "test" && (
        <Slide>
          <div className="screen-placeholder">
            <h2>Test Screen (Phase 7 placeholder)</h2>
            <p>Demo / test mode goes here.</p>
            <button className="btn" onClick={() => onNavigate("welcome")}>
              Back to Welcome
            </button>
          </div>
        </Slide>
      )}
    </main>
>>>>>>> 8e79745e87badcd7c4e044857485b368390e6414
  );
}
