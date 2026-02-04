const hamburger = document.getElementById("phHamburger");
const nav = document.getElementById("phNav");
const dropdown = document.getElementById("phDropdown");
const dropBtn = document.getElementById("phDropBtn");

/* MOBILE: hamburger menu */
hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* DESKTOP: hover dropdown */
// dropdown.addEventListener("mouseenter", () => {
//   if (window.innerWidth > 900) {
//     dropdown.classList.add("active");
//   }
// });

// dropdown.addEventListener("mouseleave", () => {
//   if (window.innerWidth > 900) {
//     dropdown.classList.remove("active");
//   }
// });

/* MOBILE: click dropdown */
dropBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});

/* RESET STATES ON RESIZE */
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    nav.classList.remove("open");
    dropdown.classList.remove("active");
  }
});


// SCROLL ANIMATIONN


const cards = document.querySelectorAll(".facility-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = "1";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});
