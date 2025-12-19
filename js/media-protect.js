// media-protect.js
window.initMediaProtect = function() {
    console.log("💡 Media Protect script exécuté.");

    // Désactiver le clic droit sur tout le document
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        console.log("❌ Clic droit désactivé sur :", e.target);
    });

    // Sélection de toutes les images et vidéos
    const media = document.querySelectorAll('img, video');
    console.log("Nombre de médias protégés :", media.length);

    media.forEach(el => {
        el.setAttribute('draggable', 'false');
        console.log("🚫 Draggable désactivé pour :", el);

        // Empêcher d'ouvrir dans un nouvel onglet ou clic milieu
        el.addEventListener('mousedown', (e) => {
            if (e.button === 1 || e.ctrlKey || e.metaKey) {
                e.preventDefault();
                console.log(`❌ Clic milieu ou Ctrl/Cmd détecté sur :`, el);
            }
        });

        // Masquer l'URL réelle pour certains navigateurs (clic droit spécifique)
        el.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            console.log("❌ Clic droit sur média désactivé :", el);
        });
    });

    // Désactiver certaines touches pour éviter les captures rapides
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
            e.preventDefault();
            console.log("❌ Tentative de Ctrl+S ou Cmd+S détectée et bloquée");
        }
    });

    console.log("✅ Media Protect initialisé !");
};
