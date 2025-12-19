// halo.js

function initHalo() {
  function attachHalo(video) {
    if (!video) return;

    const container = video.parentElement;

    // Créer le halo si inexistant
    let halo = container.querySelector('.halo');
    if (!halo) {
      halo = document.createElement('div');
      halo.className = 'halo';
      container.appendChild(halo);
    }

    let pulseId;
    let startTime;

    function pulse(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1500;

      const intensity = 0.1 + 0.05 * Math.sin(elapsed * 2 * Math.PI);

      halo.style.opacity = 0.15 + intensity;
      halo.style.filter = `blur(${20 + intensity * 10}px)`;

      console.log(`Halo video: ${video.currentSrc.split('/').pop()} → opacity: ${halo.style.opacity}, blur: ${20 + intensity * 10}px`);

      pulseId = requestAnimationFrame(pulse);
    }

    function startHalo() {
      container.classList.add('playing');
      if (!pulseId) {
        startTime = null;
        pulseId = requestAnimationFrame(pulse);
      }
    }

    function stopHalo() {
      container.classList.remove('playing');
      cancelAnimationFrame(pulseId);
      pulseId = null;
      halo.style.opacity = 0;
      halo.style.filter = 'blur(20px)';
    }

    video.addEventListener('play', startHalo);
    video.addEventListener('pause', stopHalo);
    video.addEventListener('ended', stopHalo);
  }

  // Appliquer aux vidéos existantes
  document.querySelectorAll('.video-container video').forEach(attachHalo);

  // Observer les vidéos ajoutées dynamiquement
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.matches('.video-container video')) attachHalo(node);
          node.querySelectorAll?.('.video-container video').forEach(attachHalo);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Appel direct pour s'assurer que ça s'exécute même avec main.js dynamique
initHalo();
