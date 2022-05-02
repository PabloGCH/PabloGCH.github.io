var sidebar = document.getElementById("sidebar");
var sidebarLinkCollection = document.getElementsByClassName("sidebar-nav-link");
var sidebarLinks = Array.from(sidebarLinkCollection);

//Se asegura que los links tengan los atributos correctos para colapsar el sidebar
function setLinks() {
    sidebarLinks.forEach(link => {
        link.setAttribute("data-bs-toggle","collapse");
        link.setAttribute("data-bs-target","#sidebar");
        link.setAttribute("aria-expanded","true");
    });
}
//Se asegura que los links no puedan colapsar el sidebar
function unsetLinks() {
    sidebarLinks.forEach(link => {
        link.removeAttribute("data-bs-toggle");
        link.removeAttribute("data-bs-target");
        link.removeAttribute("aria-expanded");
    });
}


function showCollapsed(x) {
    if(x.matches) {
        unsetLinks();
        sidebar.classList.add("show");
    } else {
        setLinks();
        sidebar.classList.remove("show");
    }
}

var x = window.matchMedia("(min-width: 768px)");
showCollapsed(x);
x.addEventListener("change", () => {
    showCollapsed(x);
});