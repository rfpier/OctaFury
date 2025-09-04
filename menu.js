document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); 
    const menuLinks = document.querySelectorAll("nav.menu ul li a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

