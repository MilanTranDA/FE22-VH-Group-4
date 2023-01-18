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

//Toggle light and dark theme
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// toggle theme on button click
toggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});

// check local storage on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme + '-theme');
} else if(matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
} else {
  body.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
}