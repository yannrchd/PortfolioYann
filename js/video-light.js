document.querySelectorAll('.video-container video').forEach(video => {
  const container = video.parentElement;
  video.addEventListener('play', () => container.classList.add('playing'));
  video.addEventListener('pause', () => container.classList.remove('playing'));
  video.addEventListener('ended', () => container.classList.remove('playing'));
});
