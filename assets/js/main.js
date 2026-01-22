// start Initialize Lenis
if (typeof Lenis !== "undefined") {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
// end lenis

// scrollTopBtn
const scrollTopBtn = document.querySelector(".scroll-top");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.pageYOffset > 300);
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// AOS Animation
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
      if (elements.length && typeof ScrollReveal !== "undefined") {
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
      }
    });
  });
});

// navbar collapse
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  if (navbarCollapse && typeof bootstrap !== "undefined") {
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
      if (window.innerWidth < 992 && navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});

// search modal
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const suggestionTags = document.querySelectorAll(".suggestion-tag");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      if (this.value.length > 2) {
        searchResults?.classList.remove("d-none");
      } else {
        searchResults?.classList.add("d-none");
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
      if (searchInput) {
        searchInput.value = this.textContent;
        performSearch(this.textContent);
      }
    });
  });

  function performSearch(query) {
    console.log("البحث عن: " + query);
  }

  const searchModal = document.getElementById("searchModal");
  if (searchModal) {
    searchModal.addEventListener("shown.bs.modal", function () {
      if (searchInput) {
        searchInput.focus();
        searchInput.value = "";
      }
      searchResults?.classList.add("d-none");
    });
  }
});

// slick slider
$(document).ready(function () {
  if ($(".slider").length) {
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
  }
});

/* ======================
   Leaflet Map (SAFE)
====================== */
if (typeof L !== "undefined" && document.getElementById("map")) {
  const map = L.map("map").setView([24.7136, 46.6753], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  const marker = L.marker([24.7136, 46.6753]).addTo(map);
  marker
    .bindPopup("<b>الرياض</b><br>عاصمة المملكة العربية السعودية")
    .openPopup();

  const cities = {
    riyadh: [24.7136, 46.6753],
    jeddah: [21.5433, 39.1728],
    mecca: [21.3891, 39.8579],
    medina: [24.5247, 39.5692],
    dammam: [26.4207, 50.0888],
    khobar: [26.2172, 50.1971],
    taif: [21.2703, 40.4158],
  };

  const citySelect = document.getElementById("city");
  if (citySelect) {
    citySelect.addEventListener("change", function (e) {
      const city = e.target.value;
      if (cities[city]) {
        map.setView(cities[city], 10);
        marker.setLatLng(cities[city]);
        marker
          .bindPopup(
            "<b>" + e.target.options[e.target.selectedIndex].text + "</b>",
          )
          .openPopup();
      }
    });
  }
}

// Handle form submission
const form = document.getElementById("registrationForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      fullname: document.getElementById("fullname")?.value,
      email: document.getElementById("email")?.value,
      phone: document.getElementById("phone")?.value,
      city: document.getElementById("city")?.value,
      address: document.getElementById("address")?.value,
    };

    console.log("Form Data:", formData);

    const successMsg = document.getElementById("successMsg");
    if (successMsg) {
      successMsg.style.display = "block";
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    }

    this.reset();
  });
}

// language selector
const langBtn = document.querySelector(".lang-btn");
const langList = document.querySelector(".lang-list");
const currentLang = document.querySelector(".current-lang");
const currentFlag = document.querySelector(".current-flag");
const arrow = langBtn.querySelector(".arrow");

langBtn.addEventListener("click", () => {
  langList.classList.toggle("show");
  arrow.style.transform = langList.classList.contains("show")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});

langList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    currentLang.textContent = item.textContent.trim();
    currentFlag.src = item.dataset.flag;
    langList.classList.remove("show");
    arrow.style.transform = "rotate(0deg)";
    console.log("Language selected:", item.dataset.lang);
    hideCurrentLang();
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-selector")) {
    langList.classList.remove("show");
    arrow.style.transform = "rotate(0deg)";
  }
});

function hideCurrentLang() {
  const langItems = document.querySelectorAll(".lang-list li");
  langItems.forEach((li) => {
    if (li.getAttribute("data-lang") === currentLang.textContent.trim()) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }
  });
}
hideCurrentLang();

// filters
const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const rangeProgress = document.getElementById("rangeProgress");
const currentPrice = document.getElementById("currentPrice");

function updatePriceRange() {
  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  if (minVal > maxVal - 10) {
    rangeMin.value = maxVal - 10;
    minVal = maxVal - 10;
  }

  priceMin.value = minVal;
  priceMax.value = maxVal;

  const minPercent = (minVal / rangeMin.max) * 100;
  const maxPercent = (maxVal / rangeMax.max) * 100;

  rangeProgress.style.right = minPercent + "%";
  rangeProgress.style.left = 100 - maxPercent + "%";

  currentPrice.textContent = `${minVal} - ${maxVal} ر.س`;
}

rangeMax.addEventListener("input", updatePriceRange);
rangeMin.addEventListener("input", updatePriceRange);

priceMin.addEventListener("input", function () {
  let val = parseInt(this.value) || 0;
  if (val < 0) val = 0;
  if (val > 1000) val = 1000;
  rangeMin.value = val;
  updatePriceRange();
});

priceMax.addEventListener("input", function () {
  let val = parseInt(this.value) || 1000;
  if (val < 0) val = 0;
  if (val > 1000) val = 1000;
  rangeMax.value = val;
  updatePriceRange();
});

updatePriceRange();

// filter sidebar mobile
document.addEventListener("DOMContentLoaded", function () {
  setupMobileFilters();
  initFilterToggles();
});

function setupMobileFilters() {
  const filterToggleBtn = document.createElement("button");
  filterToggleBtn.className = "filter-toggle-btn";
  filterToggleBtn.innerHTML = '<i class="fas fa-filter"></i> الفلاتر';

  const productsContainer = document.querySelector(".col-lg-9");
  if (productsContainer) {
    productsContainer.insertBefore(
      filterToggleBtn,
      productsContainer.firstChild,
    );
  }

  const overlay = document.createElement("div");
  overlay.className = "filter-overlay";
  document.body.appendChild(overlay);

  const filterSidebar = document.querySelector(".filter-sidebar");
  if (filterSidebar) {
    const header = document.createElement("div");
    header.className = "filter-sidebar-header";
    header.innerHTML = `
      <h5>تصفية المنتجات</h5>
      <button class="filter-close-btn">
        <i class="fas fa-times"></i>
      </button>
    `;
    filterSidebar.insertBefore(header, filterSidebar.firstChild);
  }

  filterToggleBtn.addEventListener("click", openFilters);
  overlay.addEventListener("click", closeFilters);

  const closeBtn = document.querySelector(".filter-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeFilters);
  }
}

function openFilters() {
  const sidebar = document.querySelector(".filter-sidebar");
  const overlay = document.querySelector(".filter-overlay");

  if (sidebar && overlay) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("filter-open");
  }
}

function closeFilters() {
  const sidebar = document.querySelector(".filter-sidebar");
  const overlay = document.querySelector(".filter-overlay");

  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("filter-open");
  }
}

function toggleSection(header) {
  const content = header.nextElementSibling;
  const icon = header.querySelector("i");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

function initFilterToggles() {
  const filterContents = document.querySelectorAll(".filter-content");
  filterContents.forEach((content) => {
    content.style.maxHeight = content.scrollHeight + "px";
  });
}

function applyFilters() {
  const filters = {
    types: [],
    qualities: [],
    sizes: [],
    priceMin: parseInt(document.getElementById("priceMin").value) || 0,
    priceMax: parseInt(document.getElementById("priceMax").value) || 1000,
  };

  ["medjool", "ajwa", "sukkari", "barhi", "khudri"].forEach((id) => {
    if (document.getElementById(id)?.checked) {
      filters.types.push(id);
    }
  });

  ["premium", "first", "second"].forEach((id) => {
    if (document.getElementById(id)?.checked) {
      filters.qualities.push(id);
    }
  });

  ["size500", "size1kg", "size5kg"].forEach((id) => {
    if (document.getElementById(id)?.checked) {
      filters.sizes.push(id);
    }
  });

  console.log("Applied Filters:", filters);

  if (window.innerWidth < 992) {
    closeFilters();
  }
}

// pagination
const totalPages = 47;
let currentPage = 1;

function renderPagination() {
  const paginationEl = document.getElementById("pagination");
  paginationEl.innerHTML = "";

  const prevBtn = createPageItem("prev");
  prevBtn.onclick = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };
  paginationEl.appendChild(prevBtn);

  paginationEl.appendChild(
    createPageItem(1, currentPage === 1 ? "active" : ""),
  );

  if (currentPage > 3) {
    paginationEl.appendChild(createPageItem("...", "dots"));
  }

  let startPage = Math.max(2, currentPage - 1);
  let endPage = Math.min(totalPages - 1, currentPage + 1);

  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages - 1);
  }

  if (currentPage >= totalPages - 2) {
    startPage = Math.max(2, totalPages - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationEl.appendChild(
      createPageItem(i, currentPage === i ? "active" : ""),
    );
  }

  if (currentPage < totalPages - 2) {
    paginationEl.appendChild(createPageItem("...", "dots"));
  }

  if (totalPages > 1) {
    paginationEl.appendChild(
      createPageItem(totalPages, currentPage === totalPages ? "active" : ""),
    );
  }

  const nextBtn = createPageItem("next");
  nextBtn.onclick = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };
  paginationEl.appendChild(nextBtn);
}

function createPageItem(content, className) {
  const item = document.createElement("div");
  item.className = `page-item ${className}`;
  item.textContent = content;

  if (className !== "dots" && className !== "prev" && className !== "next") {
    item.onclick = () => goToPage(content);
  }

  return item;
}

function goToPage(page) {
  currentPage = page;
  document.getElementById("currentPageDisplay").textContent = page;
  renderPagination();
}

renderPagination();
