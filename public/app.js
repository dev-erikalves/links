function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light");
    body.classList.toggle("dark");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
});