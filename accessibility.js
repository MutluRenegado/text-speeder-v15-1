/* =======================================================
   ♿ TextSpeeder Accessibility Layer Controller (Handle Version)
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // --- Element References ---
  const frame = document.getElementById("accessibilityFrame");
  const overlay = document.getElementById("accessibilityOverlay");
  const toggle = document.getElementById("accessibilityToggle");
  const closeBtn = document.getElementById("closeAccessibility");
  const resetBtn = document.getElementById("resetAccessibility");
  const status = document.getElementById("accessibilityStatus");
  const buttons = document.querySelectorAll(".accessibility-panel button[data-mode]");

  // --- Load saved mode ---
  const savedMode = localStorage.getItem("accessibilityMode") || "default";
  if (savedMode !== "default") applyMode(savedMode);

  /* =======================================================
     PANEL CONTROL (Open / Close)
     ======================================================= */
  toggle.addEventListener("click", () => {
    const isOpen = frame.classList.toggle("open");
    overlay.style.display = isOpen ? "block" : "none";

    // Small sound or animation feedback (optional future use)
    console.log(isOpen ? "Accessibility panel opened." : "Accessibility panel closed.");
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
     MODE SELECTION (Theme Switching)
     ======================================================= */
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      applyMode(mode);
      localStorage.setItem("accessibilityMode", mode);
    });
  });

  /* =======================================================
     RESET TO DEFAULT
     ======================================================= */
  resetBtn.addEventListener("click", () => {
    document.body.className = "";
    localStorage.removeItem("accessibilityMode");
    status.textContent = "Mode: Default";
  });

  /* =======================================================
     APPLY MODE FUNCTION
     ======================================================= */
  function applyMode(mode) {
    // Clear existing mode classes
    document.body.className = "";

    // Add selected mode class
    document.body.classList.add(mode);

    // Set readable label
    const readableLabel =
      mode === "accessible-mode"
        ? "Accessible"
        : mode
            .replace("colorblind-", "")
            .replace(/\b\w/g, (c) => c.toUpperCase());

    // Update status text
    status.textContent = `Mode: ${readableLabel}`;
  }

  /* =======================================================
     OPTIONAL: KEYBOARD SHORTCUT (Alt + A)
     ======================================================= */
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key.toLowerCase() === "a") {
      const isOpen = frame.classList.toggle("open");
      overlay.style.display = isOpen ? "block" : "none";
    }
  });

  console.log("✅ Accessibility Controller Loaded");
});
