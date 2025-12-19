document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return console.warn("Lightbox non présent sur cette page.");

  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return; // Pas d'images, exit

  const lightboxImg = lightbox.querySelector('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!lightboxImg || !prevBtn || !nextBtn) {
    console.warn("Certains éléments du lightbox sont manquants.");
    return;
  }

  let currentIndex = 0;

  function openLightbox(src) {
    const index = Array.from(galleryItems).findIndex(item => item.dataset.src === src);
    if (index === -1) return; // image non trouvée
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  function updateLightbox() {
    lightboxImg.classList.remove('show');
    setTimeout(() => {
      lightboxImg.src = galleryItems[currentIndex].dataset.src;
      void lightboxImg.offsetWidth; // forcer reflow
      lightboxImg.classList.add('show');
      console.log("Lightbox → affichage image index:", currentIndex, lightboxImg.src);
    }, 150);
  }

  function prevImage(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  }

  function nextImage(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
  }

  // Events
  galleryItems.forEach(item => {
    item.addEventListener('click', () => openLightbox(item.dataset.src));
  });

  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);
  lightbox.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'ArrowLeft') prevImage(e);
    else if (e.key === 'ArrowRight') nextImage(e);
    else if (e.key === 'Escape') closeLightbox();
  });
});