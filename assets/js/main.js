document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");

    if (!nav) return;

    let ticking = false;

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    nav.classList.toggle("shadow", window.scrollY > 50);
                    ticking = false;
                });

                ticking = true;
            }
        },
        { passive: true }
    );
});
