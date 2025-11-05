/* =======================================================
   ♿ TextSpeeder Accessibility + Theme Controller
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("accessibilityFrame");
  const overlay = document.getElementById("accessibilityOverlay");
  const toggle = document.getElementById("accessibilityToggle");
  const closeBtn = document.getElementById("closeAccessibility");
  const resetBtn = document.getElementById("resetAccessibility");
  const status = document.getElementById("accessibilityStatus");
  const buttons = document.querySelectorAll(".accessibility-panel button[data-mode]");
  const themeToggle = document.getElementById("themeToggle");

  /* =======================================================
     Restore Saved Accessibility Mode
     ======================================================= */
  const savedMode = localStorage.getItem("accessibilityMode") || "default";
  if (savedMode !== "default") applyMode(savedMode);

  /* =======================================================
     Accessibility Panel Controls
     ======================================================= */
  toggle.addEventListener("click", () => {
    const isOpen = frame.classList.toggle("open");
    overlay.style.display = isOpen ? "block" : "none";
  });

  closeBtn.addEventListener("click", () => {
    frame.classList.remove("open");
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    frame.classList.remove("open");
    overlay.style.display = "none";
  });

  /* =======================================================
     Mode Switching
     ======================================================= */
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      applyMode(mode);
      localStorage.setItem("accessibilityMode", mode);
    });
  });

  /* =======================================================
     Reset Accessibility Settings
     ======================================================= */
  resetBtn.addEventListener("click", () => {
    document.body.className = "";
    localStorage.removeItem("accessibilityMode");
    status.textContent = "Mode: Default";
  });

  function applyMode(mode) {
    document.body.className = document.body.classList.contains("dark-mode")
      ? "dark-mode"
      : "light-mode";
    document.body.classList.add(mode);
    const label =
      mode === "accessible-mode"
        ? "Accessible"
        : mode.replace("colorblind-", "").replace(/\b\w/g, (c) => c.toUpperCase());
    status.textContent = `Mode: ${label}`;
  }

  /* =======================================================
     🌙 DARK / LIGHT THEME TOGGLE LOGIC
     ======================================================= */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme") || (prefersDark ? "dark-mode" : "light-mode");
  document.body.classList.add(savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const nextTheme = isDark ? "light-mode" : "dark-mode";
    document.body.classList.remove(isDark ? "dark-mode" : "light-mode");
    document.body.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });

  function updateThemeIcon(mode) {
    themeToggle.textContent = mode === "dark-mode" ? "🌙" : "☀️";
  }

  /* =======================================================
     Keyboard Shortcut (Alt + A)
     ======================================================= */
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key.toLowerCase() === "a") {
      const isOpen = frame.classList.toggle("open");
      overlay.style.display = isOpen ? "block" : "none";
    }
  });

  console.log("✅ Accessibility + Theme Controller Loaded");
});
