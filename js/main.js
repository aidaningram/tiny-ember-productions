const navbar = document.querySelector(".navbar");
const navInner = document.querySelector(".nav-inner");
const logoImg = document.querySelector(".logo img");
const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

function updateNavbar() {
    if (window.innerWidth <= 768) {
        navbar.removeAttribute("style");
        navInner.removeAttribute("style");
        logoImg.removeAttribute("style");
        navLinks.removeAttribute("style");
        return;
    }

    const scrollEnd = window.innerHeight * 0.75;

    let progress = window.scrollY / scrollEnd;
    progress = Math.min(Math.max(progress, 0), 1);

    const eased = 1 - Math.pow(1 - progress, 3);

    navbar.style.top = `${eased * 24}px`;
    navbar.style.background = `rgba(23, 28, 30, ${0.96 - eased * 0.96})`;

    navInner.style.maxWidth = `${100 - eased * 32}%`;
    navInner.style.padding = `${1.5 - eased * 0.35}rem ${5 - eased * 1.5}%`;
    navInner.style.borderRadius = `${eased * 999}px`;
    navInner.style.background = `rgba(23, 28, 30, ${0.96 + eased * 0.02})`;

    logoImg.style.height = `${70 - eased * 14}px`;
    navLinks.style.gap = `${2 + eased * 0.4}rem`;
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}

updateNavbar();
