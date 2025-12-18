document.addEventListener('keydown', (e) => {
  // Bloque le scroll
  if ([' ', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }

  // Barre espace = pause UNIQUEMENT
  if (e.key === ' ') {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
  }
});
