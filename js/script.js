(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "tkdp-lang";

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "ja");
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (saved === "en" || saved === "ja") applyLang(saved);

  var langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-lang") === "en" ? "en" : "ja";
      applyLang(current === "ja" ? "en" : "ja");
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
