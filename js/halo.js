document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('cvvideo');
  const halo = document.querySelector('.halo');

  if (!video || !halo) {
    console.error("Élément manquant : vérifie que #cvvideo et .halo existent.");
    return;
  }

  let pulseId;
  let startTime;

  function pulse(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1500;

    // Intensité pulsante
    const intensity = 0.3 + 10 * Math.sin(elapsed * 2 * Math.PI);
    const blur = 50 + intensity * 100; // blur variable
    const spread = 0.2 + intensity ; // spread variable
    const alpha = 0.5 + intensity * 0.5; // alpha variable

    halo.style.boxShadow = `0 0 ${blur}px ${spread}px rgba(255,0,0,${alpha})`;

    // Debug
    console.log(`Halo pulse → blur: ${blur.toFixed(0)}, spread: ${spread.toFixed(0)}, alpha: ${alpha.toFixed(2)}`);

    pulseId = requestAnimationFrame(pulse);
  }

  video.addEventListener('play', () => {
    halo.parentElement.classList.add('playing');
    if (!pulseId) {
      startTime = null;
      pulseId = requestAnimationFrame(pulse);
    }
  });

  function stopHalo() {
    halo.parentElement.classList.remove('playing');
    cancelAnimationFrame(pulseId);
    pulseId = null;
    halo.style.boxShadow = 'none'; // Halo complètement disparu
  }

  video.addEventListener('pause', stopHalo);
  video.addEventListener('ended', stopHalo);
});
