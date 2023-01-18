window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector("#preloader").style.display = "none";
        document.querySelector("#main-content").style.display = "block";
    }, 1000);
});


function toggleNav() {
    var navbar = document.getElementById("navbarNav");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}
