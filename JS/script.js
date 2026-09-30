document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation Menu ---
  const burgerBtn = document.querySelector(".burger-btn");
  const navbar = document.querySelector(".navbar");

  if (burgerBtn && navbar) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("show");
      burgerBtn.textContent = isOpen ? "✕" : "☰";
      burgerBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- Scroll Spy (Intersection Observer) ---
  const sections = document.querySelectorAll("section, footer");
  const navLinks = document.querySelectorAll(".nav-links a");

  const sectionToNavMap = {
    hero: "solutions",
    rating: "solutions",
    trusted: "solutions",
    solutions: "solutions",
    reminder: "solutions",
    sales: "solutions",
    pricing: "pricing",
    about: "about",
    resources: "resources",
    "asked-ques": "resources",
    contact: "contact",
  };

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            const targetNavId = sectionToNavMap[currentId];
            if (targetNavId) {
              navLinks.forEach((link) => {
                const isMatch = link.getAttribute("href") === `#${targetNavId}`;
                link.classList.toggle("active", isMatch);
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // --- Scroll to Pricing Section ---
  const pricingSection = document.querySelector(".pricing-section");
  const scrollToPricingBtns = document.querySelectorAll(".get-start-btn, .free-trial");

  if (pricingSection) {
    scrollToPricingBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // --- External Demo Video Link ---
  const demoBtns = document.querySelectorAll(".demo-btn");
  demoBtns.forEach((demo) => {
    demo.addEventListener("click", () => {
      window.open(
        "https://youtu.be/X2aL1E_5190?si=DkNy_ET22JTEznVc",
        "_blank",
        "noopener,noreferrer"
      );
    });
  });

  // --- Pricing Toggle (Monthly / Yearly) ---
  const monthlyBtn = document.querySelector(".monthly-btn");
  const yearlyBtn = document.querySelector(".yearly-btn");
  const priceTags = document.querySelectorAll(".price");

  const prices = {
    monthly: ["$29/mo", "$79/mo", "$99/mo"],
    yearly: ["$240/yr", "$640/yr", "$790/yr"],
  };

  const setBillingCycle = (cycle) => {
    if (!monthlyBtn || !yearlyBtn) return;
    const isYearly = cycle === "yearly";

    yearlyBtn.classList.toggle("selected", isYearly);
    yearlyBtn.classList.toggle("non-selected", !isYearly);
    monthlyBtn.classList.toggle("selected", !isYearly);
    monthlyBtn.classList.toggle("non-selected", isYearly);

    priceTags.forEach((tag, index) => {
      if (prices[cycle][index]) {
        tag.textContent = prices[cycle][index];
      }
    });
  };

  if (monthlyBtn && yearlyBtn) {
    yearlyBtn.addEventListener("click", () => setBillingCycle("yearly"));
    monthlyBtn.addEventListener("click", () => setBillingCycle("monthly"));
  }

  // --- Scroll to Contact / Footer ---
  const planBtns = document.querySelectorAll(".plan-btn");
  const footer = document.querySelector("footer");

  if (footer) {
    planBtns.forEach((plan) => {
      plan.addEventListener("click", () => {
        footer.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // --- Footer Terms & Privacy Alerts ---
  const serviceBtn = document.querySelector(".service-btn");
  const privacyBtn = document.querySelector(".privacy-btn");

  if (serviceBtn) {
    serviceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Thank you for visiting Nexa AI! This is a demo SaaS portfolio landing page. All terms and conditions are for demonstration purposes only."
      );
    });
  }

  if (privacyBtn) {
    privacyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Your privacy is important to us. This is a demo website and no personal data or cookies are collected or stored."
      );
    });
  }
});