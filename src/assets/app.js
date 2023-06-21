// for dark mode

if (localStorage.getItem("theme")) {
  localStorage.getItem("theme") == "dark"
    ? document.querySelector("html").classList.add("dark")
    : document.querySelector("html").classList.remove("dark");
}
