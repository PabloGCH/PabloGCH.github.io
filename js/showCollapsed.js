var sidebar = document.getElementById("sidebar");


function showCollapsed(x) {
    if(x.matches) {
        sidebar.classList.add("show");
    } else {
        sidebar.classList.remove("show");
    }
}

var x = window.matchMedia("(min-width: 768px)");
showCollapsed(x);
x.addEventListener("change", () => {
    showCollapsed(x);
});