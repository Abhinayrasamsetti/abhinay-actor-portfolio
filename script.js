// Simple smooth reveal for the static GitHub Pages site.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".section, .work-card, .gallery-grid figure, .statement-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
