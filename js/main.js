// ================== NEW

const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("#nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector("#nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ================== SWIPER JS ================= */
let swiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});

/* ==================== MIXITUP =================== */
var mixerProducts = mixitup(".product__content", {
    selectors: {
        target: ".product__card",
    },
    animation: {
        duration: 300,
    },
});

/* Link active products */
const linkProduct = document.querySelectorAll(".product__item");

function activeProduct() {
    linkProduct.forEach((link) => link.classList.remove("active-product"));
    this.classList.add("active-product");
}
linkProduct.forEach((link) => link.addEventListener("click", activeProduct));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// SCROLL REVEAL JS =================================
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
});

// Home section
sr.reveal(".home-sub");
sr.reveal(".home__title", { delay: 500 });
sr.reveal(".home__description", { delay: 600 });
sr.reveal(".home-btn", { delay: 700 });
sr.reveal(".home__value-number, .home__value-description", {
    delay: 800,
    interval: 100,
});
sr.reveal(".line-h", { delay: 800 });
sr.reveal(".home__img", { delay: 800 });

// About section
sr.reveal(".about__data", { origin: "right" });
sr.reveal(".about__img", { origin: "left" });

// Brands Section
sr.reveal(".brands__content", { interval: 100 });

// Why Section
sr.reveal(".why__data");

// Popular Section
sr.reveal(".popular h2");
sr.reveal(".popular__cards", { delay: 500, origin: "right" });

// Newsletter Section
sr.reveal(".newsletter__data", { origin: "bottom" });

// Product Section
sr.reveal(".product__subtitle");
sr.reveal(".products h2", { delay: 500 });
sr.reveal(".product__filters", { delay: 600 });
sr.reveal(".product__card", { delay: 700, interval: 100 });

// App Section
sr.reveal(".app__container", { origin: "bottom" });
sr.reveal(".app__data", { delay: 500, origin: "left" });
sr.reveal(".app__img", { delay: 500, origin: "right" });

// Footer Section
sr.reveal(".footer-box", { interval: 100 });
sr.reveal(".footer-box", { interval: 100 });
sr.reveal(".copyright", { delay: 500, origin: "bottom" });