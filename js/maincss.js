// main-css.js
document.addEventListener("DOMContentLoaded", () => {
  // Liste de tous les fichiers CSS à charger
  const stylesheets = [
    "css/styles.css",
    "css/menu.css",
    "css/video-halo.css"
  ];

  stylesheets.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });
});
