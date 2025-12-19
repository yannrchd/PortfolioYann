// media-protect.js
document.addEventListener('DOMContentLoaded', () => {

  function protectMedia(element) {
    // Bloque clic droit
    element.addEventListener('contextmenu', e => e.preventDefault());

    // Bloque glisser-déposer
    element.addEventListener('dragstart', e => e.preventDefault());

    // Empêche le clic milieu (ouvrir dans un nouvel onglet)
    element.addEventListener('mousedown', e => {
      if (e.button === 1) e.preventDefault();
    });

    // Empêche l'ouverture directe sur les vidéos
    element.addEventListener('click', e => {
      if (element.tagName === 'VIDEO') e.preventDefault();
    });

    // Optionnel : désactive la sélection de texte autour de l'image/vidéo
    element.style.userSelect = 'none';
  }

  // Bloque toutes les images et vidéos déjà présentes
  const mediaElements = document.querySelectorAll('img, video');
  mediaElements.forEach(protectMedia);

  // Observer le DOM pour bloquer les nouveaux médias ajoutés dynamiquement
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) { // Element
          if (node.matches('img, video')) protectMedia(node);
          node.querySelectorAll?.('img, video').forEach(protectMedia);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

});
