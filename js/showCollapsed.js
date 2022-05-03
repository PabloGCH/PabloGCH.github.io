var sidebar = document.getElementById("sidebar");
var sidebarLinkCollection = document.getElementsByClassName("sidebar-nav-link");
var sidebarLinks = Array.from(sidebarLinkCollection);
var bootstrapCollapseSidebar = new bootstrap.Collapse(sidebar, {

});

function sidebarToggle() {
    bootstrapCollapseSidebar.toggle();
}


function setLinks() {
    sidebarLinks.forEach(link => {
        link.addEventListener('click', sidebarToggle)
    });
}

function unsetLinks() {
    sidebarLinks.forEach(link => {
        link.removeEventListener('click', sidebarToggle);
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