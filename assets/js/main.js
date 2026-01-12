// start  Initialize Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// end lenis scrollTopBtn
const scrollTopBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("show", window.pageYOffset > 300);
});

// aso Animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    const sectionDelay = index * 200;

    const classesToAnimate = [
      ".main-title",
      ".category-card",
      ".featured_main",
      ".test-slider",
      ".career-tag",
      ".main-heading",
      ".content-wrapper",
      ".partners-carousel",
      ".section-header",
      ".work-img",
      ".work-info",
      ".app-content",
      ".mobile-img",
      ".accordion-item",
      ".faq-image-wrapper",
      ".hero_about",
      ".position-relative",
      ".content_about",
      ".section-label",
      ".display_contact",
      ".main_test_servies",
      ".subtitle",
      ".call-btn",
      ".form-control",
      ".upload-btn",
      ".form-select",
      ".image-container",
      ".card_test_servies",
      ".page-title",
      ".page-subtitle",
      ".lab-card",
    ];

    classesToAnimate.forEach((selector) => {
      const elements = section.querySelectorAll(selector);
      ScrollReveal().reveal(elements, {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        easing: "ease-out",
        interval: 200,
        delay: sectionDelay,
        opacity: 0,
        reset: true,
      });
    });
  });
});

// model user

document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarSupportedContent");
  const navbarToggler = document.querySelector(".navbar-toggler");

  if (navbarCollapse) {
    navbarCollapse.addEventListener("click", function (e) {
      if (e.target === this || e.target.classList.contains("navbar-collapse")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  }

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});

// model search
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const suggestionTags = document.querySelectorAll(".suggestion-tag");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      if (this.value.length > 2) {
        searchResults.classList.remove("d-none");
      } else {
        searchResults.classList.add("d-none");
      }
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch(this.value);
      }
    });
  }

  suggestionTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      searchInput.value = this.textContent;
      performSearch(this.textContent);
    });
  });

  function performSearch(query) {
    console.log("البحث عن: " + query);
  }

  const searchModal = document.getElementById("searchModal");
  if (searchModal) {
    searchModal.addEventListener("shown.bs.modal", function () {
      searchInput.focus();
      searchInput.value = "";
      searchResults.classList.add("d-none");
    });
  }
});

//

$(document).ready(function () {
  $(".slider").slick({
    rtl: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: false,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

// btn scroll

// Show/hide button on scroll
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Initialize map centered on Riyadh, Saudi Arabia
const map = L.map("map").setView([24.7136, 46.6753], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
  maxZoom: 19,
}).addTo(map);

// Add marker for Riyadh
const marker = L.marker([24.7136, 46.6753]).addTo(map);
marker.bindPopup("<b>الرياض</b><br>عاصمة المملكة العربية السعودية").openPopup();

// City coordinates for Saudi Arabia
const cities = {
  riyadh: [24.7136, 46.6753],
  jeddah: [21.5433, 39.1728],
  mecca: [21.3891, 39.8579],
  medina: [24.5247, 39.5692],
  dammam: [26.4207, 50.0888],
  khobar: [26.2172, 50.1971],
  taif: [21.2703, 40.4158],
};

// Handle city selection
document.getElementById("city").addEventListener("change", function (e) {
  const city = e.target.value;
  if (cities[city]) {
    map.setView(cities[city], 10);
    marker.setLatLng(cities[city]);
    marker
      .bindPopup("<b>" + e.target.options[e.target.selectedIndex].text + "</b>")
      .openPopup();
  }
});

// Handle form submission
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      address: document.getElementById("address").value,
    };

    console.log("Form Data:", formData);

    // Show success message
    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";

    // Reset form
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
