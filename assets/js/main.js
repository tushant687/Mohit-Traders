document.addEventListener('DOMContentLoaded', () => {
  console.log('Website is ready ✅');

  // Example: show an alert
  // alert("Welcome to SM SONS Industries & Trader!");

  // Example: change navbar color on scroll
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });
});
