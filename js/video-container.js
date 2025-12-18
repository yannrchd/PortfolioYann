const videos = document.querySelectorAll('.video-container video');

videos.forEach(video => {
  const container = video.parentElement;

  video.addEventListener('play', () => {
    // Stoppe toutes les autres vidéos
    videos.forEach(v => {
      const otherContainer = v.parentElement;

      if (v !== video) {
        v.pause();
        otherContainer.classList.remove('playing');
      }
    });

    // Active le halo sur la vidéo en cours
    container.classList.add('playing');
  });

  video.addEventListener('pause', () => {
    container.classList.remove('playing');
  });

  video.addEventListener('ended', () => {
    container.classList.remove('playing');
  });
});
