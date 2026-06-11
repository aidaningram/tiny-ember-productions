const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const heroHeight = window.innerHeight;

    if (window.scrollY > heroHeight - 100) {
        navbar.classList.add("compact");
    } else {
        navbar.classList.remove("compact");
    }
});
