window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector("#preloader").style.display = "none";
        document.querySelector("#main-content").style.display = "block";
    }, 1000);
});
