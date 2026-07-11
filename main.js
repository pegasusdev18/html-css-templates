document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menuToggle");
  var primaryNav = document.getElementById("primaryNav");

  menuToggle.addEventListener("click", function () {
    var isActive = primaryNav.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  var navLinks = primaryNav.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      primaryNav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  var accordionItems = document.querySelectorAll(".accordion-item");

  function closeItem(item) {
    var panel = item.querySelector(".accordion-panel");
    item.classList.remove("active");
    panel.style.maxHeight = null;
  }

  function openItem(item) {
    var panel = item.querySelector(".accordion-panel");
    item.classList.add("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  accordionItems.forEach(function (item) {
    var header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      var isActive = item.classList.contains("active");

      accordionItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          closeItem(otherItem);
        }
      });

      if (isActive) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });

    if (item.classList.contains("active")) {
      var panel = item.querySelector(".accordion-panel");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  window.addEventListener("resize", function () {
    accordionItems.forEach(function (item) {
      if (item.classList.contains("active")) {
        var panel = item.querySelector(".accordion-panel");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
});
