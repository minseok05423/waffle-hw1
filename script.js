const navbar = document.querySelector("#navbar");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  const disappearPoint = 300;

  if (scrollPosition < disappearPoint || scrollPosition < lastScrollTop) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }

  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});

const animatedElements = document.querySelectorAll(
  ".portfolio-card, .project-img1, .project-img2, .project-item, .project-image, .page-preview, .menu-preview, .devices-mockup"
);

const options = { threshold: 0.1, rootMargin: "-50px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  });
}, options);

animatedElements.forEach((element) => {
  observer.observe(element);
});
