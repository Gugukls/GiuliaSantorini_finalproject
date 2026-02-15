
const hamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__list a");

// Menüyü aç kapa yap
hamburger.addEventListener("click", () => {
  navList.classList.toggle("is-open");
});

// Linklerden birine tıklanırsa menüyü kapat
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("is-open");
  });
});