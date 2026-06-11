const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const heroHeight = window.innerHeight;

    if (window.scrollY > heroHeight - 100) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
});

document.addEventListener("mousemove", (event) => {
    if (event.clientY < 80) {
        navbar.classList.remove("hidden");
    } else if (window.scrollY > window.innerHeight - 100) {
        navbar.classList.add("hidden");
    }
});
