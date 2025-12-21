import Intro from "../../pages/Intro/Intro";
import WelcomeScreen from "../../pages/Welcome/WelcomeScreen";
import Slide from "../../components/Slide/Slide";

export default function ContentHost({ view, onNavigate }) {
  return (
    <main className="layer layer-content" role="main">
      {view === "intro" && (
        <Intro onContinue={() => onNavigate("welcome")} />
      )}

      {view === "welcome" && (
        <WelcomeScreen
          onStart={() => onNavigate("app")}
          onTest={() => onNavigate("test")}
          onBackToIntro={() => onNavigate("intro")}
        />
      )}

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
  );
}
