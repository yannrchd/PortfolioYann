// lightbox.js
window.initLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxImg = lightbox.querySelector('img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  console.log("💡 Lightbox script exécuté.");
  console.log("Lightbox element:", lightbox);
  console.log("Nombre de gallery items:", galleryItems.length);
  console.log("Prev button:", prevBtn);
  console.log("Next button:", nextBtn);
  console.log("Lightbox image:", lightboxImg);

  if (!lightbox || galleryItems.length === 0 || !lightboxImg || !prevBtn || !nextBtn) {
    console.warn("⚠️ Lightbox : éléments manquants, initialisation annulée.");
    return;
  }

  let currentIndex = 0;

  function updateLightbox() {
    console.log(`🔄 updateLightbox → index actuel: ${currentIndex}`);
    lightboxImg.classList.remove('show');
    setTimeout(() => {
      lightboxImg.src = galleryItems[currentIndex].dataset.src;
      void lightboxImg.offsetWidth;
      lightboxImg.classList.add('show');
      console.log(`📸 Image affichée: ${lightboxImg.src}`);
    }, 50);
  }

  function openLightbox(index) {
    console.log(`🟢 openLightbox → index: ${index}`);
    currentIndex = index;
    lightbox.classList.add('show');
    console.log("💡 Lightbox ouvert.");
    updateLightbox();
  }

  function closeLightbox() {
    console.log("🔴 closeLightbox → Lightbox fermé.");
    lightbox.classList.remove('show');
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    console.log(`⬅️ prevImage → nouvel index: ${currentIndex}`);
    updateLightbox();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    console.log(`➡️ nextImage → nouvel index: ${currentIndex}`);
    updateLightbox();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log(`🖱 gallery item cliqué → index: ${index}`);
      openLightbox(index);
    });
  });

  prevBtn.addEventListener('click', e => { 
    e.stopPropagation(); 
    prevImage(); 
  });

  nextBtn.addEventListener('click', e => { 
    e.stopPropagation(); 
    nextImage(); 
  });

  lightbox.addEventListener('click', () => {
    console.log("🖱 clic en dehors de l'image → fermeture du lightbox");
    closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'Escape') closeLightbox();
  });

  console.log("✅ Lightbox initialisé via main.js !");
};
