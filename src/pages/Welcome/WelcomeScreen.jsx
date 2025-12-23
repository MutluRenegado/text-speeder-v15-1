import Slide from "../../components/Slide/Slide";
import "./welcome.css";

export default function WelcomeScreen({ onStart, onTest, onBackToIntro }) {
  return (
    <Slide>
      <div className="welcome">
        <div className="welcome-inner">
          <h2>Choose your path</h2>
          <p>
            Start the app, run a quick test, or read docs. No login required yet.
          </p>

          <div className="welcome-actions">
            <button className="btn primary" onClick={onStart}>
              Start App
            </button>
            <button className="btn" onClick={onTest}>
              Test App
            </button>
            <a className="btn ghost" href="https://example.com" target="_blank" rel="noreferrer">
              Docs
            </a>
            <button className="btn ghost" onClick={onBackToIntro}>
              Back to Intro
            </button>
          </div>

          <div className="welcome-note">
            <span className="badge">Phase 5</span>
            <span>Pure UI — no Firebase, no Stripe, no routing.</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}

