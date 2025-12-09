import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to TextSpeeder v15.1</h1>
      <p>Increase reading speed, generate summaries, and improve memory retention.</p>

      <button className="landing-btn" onClick={() => navigate("/reading")}>
        Start Reading
      </button>
    </div>
  );
}
