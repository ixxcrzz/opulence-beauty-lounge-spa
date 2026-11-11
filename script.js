
// Smooth reveal animation when sections enter the screen

const revealElements = document.querySelectorAll(
  ".intro, .section-heading, .service-card, .promo, .gallery-grid img, .contact"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach((element) => {
  observer.observe(element);
});
