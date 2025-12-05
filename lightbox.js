const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function openLightbox(src) {
  currentIndex = Array.from(galleryItems).findIndex(item => item.dataset.src === src);
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
  }, 150);
}

function prevImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightbox();
}

function nextImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightbox();
}

// Événements
galleryItems.forEach(item => {
  item.addEventListener('click', () => openLightbox(item.dataset.src));
});

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
lightbox.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') prevImage(e);
    else if (e.key === 'ArrowRight') nextImage(e);
    else if (e.key === 'Escape') closeLightbox();
  }
});
