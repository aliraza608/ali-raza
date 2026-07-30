// ==========================
// ALI RAZA PORTFOLIO V2.0
// Part 1
// ==========================

// AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Typing Effect

const text = [
    "Artificial Intelligence Student",
    "Website Developer",
    "Meta Ads Expert",
    "AI Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            setTimeout(type, 300);

        }, 1800);

    } else {

        setTimeout(type, 100);

    }

})();

// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// Close Menu After Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Navbar Shadow on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ==========================
// Console Message
// ==========================

console.log("Ali Raza Portfolio V2.0 Loaded Successfully 🚀");