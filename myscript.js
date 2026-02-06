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




  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-track img");

    if (!track || slides.length === 0) return;

    let index = 0;
    const totalSlides = slides.length;

    setInterval(() => {
      index = (index + 1) % totalSlides;
      track.style.transform = `translateX(-${index * 100}%)`;
      track.style.transition = "transform 0.6s ease-in-out";
    }, 2500); // 1 second
  });




  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".btn-primary");
    const modal = document.getElementById("admissionModal");
    const closeBtn = document.getElementById("closeModal");

    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });



