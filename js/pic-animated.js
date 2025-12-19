console.log("pic-animated.js chargé");

const aftermovieCards = document.querySelectorAll('.cat-card');

aftermovieCards.forEach(card => {
  if (card.querySelector('img').alt.toLowerCase().includes('aftermovie')) {
    const video = document.createElement('video');
    video.src = 'videos/aftermovie.mp4';
    video.muted = true;
    video.loop = true;
    video.style.position = 'absolute';
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.borderRadius = 'inherit';
    video.style.pointerEvents = 'none';
    video.style.display = 'none';
    card.style.position = 'relative';
    card.appendChild(video);

    card.addEventListener('mouseenter', () => {
      console.log("Survol : démarrage de la vidéo");
      video.style.display = 'block';
      video.play().catch(err => console.warn("Erreur play vidéo :", err));
    });

    card.addEventListener('mouseleave', () => {
      console.log("Fin survol : pause vidéo");
      video.pause();
      video.style.display = 'none';
    });

    card.addEventListener('click', () => {
      console.log("Clic sur la card");
      window.location.href = card.getAttribute('onclick').split("'")[1];
    });
  }
});
