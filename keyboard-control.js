document.addEventListener('keydown', (e) => {
  // Bloquer défilement avec espace, flèche haut/bas
  if ([' ', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }

  // Pause/play vidéo avec espace
  const video = document.querySelector('video');
  if (video && e.key === ' ') {
    if (video.paused) video.play();
    else video.pause();
  }
});