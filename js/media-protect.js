// media-protect.js
document.addEventListener('DOMContentLoaded', () => {
  function protectMedia(element) {
    element.addEventListener('contextmenu', e => e.preventDefault()); // bloque clic droit
    element.addEventListener('dragstart', e => e.preventDefault());    // bloque glisser-déposer
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
          // Si l'élément contient des médias à l'intérieur
          node.querySelectorAll?.('img, video').forEach(protectMedia);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
