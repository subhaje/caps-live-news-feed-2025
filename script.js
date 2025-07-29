document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme-select");
    const themeStylesheet = document.getElementById("theme-stylesheet");

    const savedTheme = localStorage.getItem("caps-theme");

    if (savedTheme) {
      themeStylesheet.setAttribute("href", savedTheme);
      themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener("change", function () {
      const selectedTheme = themeSelect.value;
      themeStylesheet.setAttribute("href", selectedTheme);
      localStorage.setItem("caps-theme", selectedTheme);
    });
  });