.welcome {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 28px;
}

.welcome-inner {
  width: min(720px, 92%);
  text-align: center;
}

.welcome-inner h2 {
  font-size: clamp(22px, 2.4vw, 34px);
  margin: 0;
}

.welcome-inner p {
  margin-top: 10px;
  opacity: 0.85;
}

.welcome-actions {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.welcome-note {
  margin-top: 18px;
  opacity: 0.85;
  display: inline-flex;
  gap: 10px;
  align-items: center;
}

.badge {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

