// main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("💻 main.js démarré → DOMContentLoaded");

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
    script.onload = () => {
      console.log(`✅ Script chargé et exécuté : ${src}`);

      // Initialisation spécifique si la fonction existe
      if (window.initLightbox && src.includes("lightbox.js")) {
        console.log("🚀 Initialisation lightbox...");
        window.initLightbox();
      }

      if (window.initMediaProtect && src.includes("media-protect.js")) {
        console.log("🚀 Initialisation media-protect...");
        window.initMediaProtect();
      }

      if (window.initPicAnimated && src.includes("pic-animated.js")) {
        console.log("🚀 Initialisation pic-animated...");
        window.initPicAnimated();
      }


      // Tu peux ajouter ici d'autres init si nécessaire pour tes autres scripts
    };
    script.onerror = () => console.error(`❌ Erreur de chargement : ${src}`);
    document.body.appendChild(script);
  });

  console.log("📦 Tous les scripts ont été injectés dynamiquement (on attend leur chargement).");
});
