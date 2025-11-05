/* =======================================================
   ♿ TextSpeeder Accessibility Layer Controller
   ======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const layer = document.getElementById("accessibilityLayer");
  const frame = layer.querySelector("#accessibilityFrame");
  const overlay = layer.querySelector("#accessibilityOverlay");
  const toggle = layer.querySelector("#accessibilityToggle");
  const closeBtn = layer.querySelector("#closeAccessibility");
  const resetBtn = layer.querySelector("#resetAccessibility");
  const status = layer.querySelector("#accessibilityStatus");
  const buttons = layer.querySelectorAll(".accessibility-panel button");

  // Restore saved mode from localStorage
  const savedMode = localStorage.getItem("accessibilityMode") || "default";
  if (savedMode !== "default") applyMode(savedMode);

  /* --- Toggle Panel --- */
  toggle.addEventListener("click", () => {
    const open = frame.classList.toggle("open");
    overlay.style.display = open ? "block" : "none";
  });

  closeBtn.addEventListener("click", () => {
    frame.classList.remove("open");
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    frame.classList.remove("open");
    overlay.style.display = "none";
  });

  /* --- Mode Buttons --- */
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      applyMode(mode);
      localStorage.setItem("accessibilityMode", mode);
    });
  });

  /* --- Reset --- */
  resetBtn.addEventListener("click", () => {
    document.body.className = "";
    localStorage.removeItem("accessibilityMode");
    status.textContent = "Mode: Default";
  });

  /* --- Apply Mode Function --- */
  function applyMode(mode) {
    document.body.className = "";
    document.body.classList.add(mode);
    status.textContent =
      mode === "accessible-mode"
        ? "Mode: Accessible"
        : "Mode: " +
          mode
            .replace("colorblind-", "")
            .replace(/\b\w/g, (c) => c.toUpperCase());
  }
});

