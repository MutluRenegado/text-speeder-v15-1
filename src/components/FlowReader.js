import React, { useState, useEffect, useRef } from "react";

const FlowReader = ({ text, speed = 300, highlight }) => {
  const [index, setIndex] = useState(0);
  const words = text.trim().split(/\s+/);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!words.length) return;
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 >= words.length ? 0 : prev + 1));
    }, (60 / speed) * 1000);
    return () => clearInterval(interval);
  }, [speed, text]);

  useEffect(() => {
    if (!trackRef.current) return;
    const spans = trackRef.current.querySelectorAll("span");
    spans.forEach((s, i) => s.classList.toggle("highlight", i === index));
    const current = spans[index];
    if (current) {
      current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end", // ensures start from right
      });
    }
  }, [index]);

  return (
    <div className="flow-viewport">
      <div ref={trackRef} className="flow-track">
        {words.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
};

export default FlowReader;
