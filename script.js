console.log("JS is working")
        
const hamburger = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

console.log(document.querySelector(".menu-toggle"));
