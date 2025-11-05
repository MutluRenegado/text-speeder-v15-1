/* ==========================================================
   🍪 Consent Manager — Safe + Connected to GTM
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const consentBanner = document.getElementById("consentBanner");
  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");

  // Exit early if missing
  if (!consentBanner) {
    console.warn("⚠️ Consent banner not found. Skipping consent.js setup.");
    return;
  }

  // Restore state
  const savedConsent = localStorage.getItem("consentMode");
  if (savedConsent) {
    consentBanner.classList.remove("show");
  } else {
    consentBanner.classList.add("show");
  }

  function hideBanner() {
    consentBanner.classList.remove("show");
    setTimeout(() => (consentBanner.style.display = "none"), 300);
  }

  // Accept
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("consentMode", "accepted");
      hideBanner();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "consent_accepted" });
    });
  }

  // Reject
  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("consentMode", "rejected");
      hideBanner();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "consent_rejected" });
    });
  }
});

