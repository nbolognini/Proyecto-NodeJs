window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#0E281F";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });



  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
      if (navbar.classList.contains("expanded")) {
        navbar.classList.remove("expanded");
      } else {
        navbar.classList.add("expanded");
      }
    });
  });