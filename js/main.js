// main.js
document.addEventListener("DOMContentLoaded", () => {
  // Liste de tous les fichiers JS à charger
  const scripts = [
    "js/footer.js",
    "js/halo.js",
    "js/keyboard-control.js",
    "js/lightbox.js",
    "js/media-protect.js",
    "js/menu.js",
    "js/video-container.js",
    "js/video-light.js",
    "js/pic-animated.js"
  ];

  // Fonction pour injecter dynamiquement les scripts
  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true; // s'assure que le script s'exécute après le HTML
    document.body.appendChild(script);
  });
});
