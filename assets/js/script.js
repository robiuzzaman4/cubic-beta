// SELECT MENU BUTTON & NAV LIST
const menuBtn = document.querySelector("#menuBtn");
const navList = document.querySelector("#navList");

// ADD EVENT LISTENER ON MENU BUTTON & SHOWING RESPONSIVE NAV BAR
menuBtn.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
});