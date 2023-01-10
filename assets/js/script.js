const menuBtn = document.querySelector("#menuBtn");
const navList = document.querySelector("#navList");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
});