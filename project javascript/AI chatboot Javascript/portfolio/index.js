const navlinks = document.getElementById("nav-links");
const menubtn = document.getElementById("menu-btn");
const menubtnIcon = menubtn.querySelector("i");

menubtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menubtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menubtnIcon.setAttribute("class", "ri-menu-3-line");
});