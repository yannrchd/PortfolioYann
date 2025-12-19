// pic-animated.js
window.initPicAnimated = function() {
    console.log("💡 pic-animated.js exécuté");

    const aftermovieCards = document.querySelectorAll('.cat-card');
    console.log("Nombre de cat-cards trouvées :", aftermovieCards.length);

    aftermovieCards.forEach(card => {
        const img = card.querySelector('img');
        if (!img) return;

        if (img.alt.toLowerCase().includes('aftermovie')) {
            console.log("📹 Aftermovie card détectée :", card);

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

            // Survol
            card.addEventListener('mouseenter', () => {
                console.log("🖱 Survol : démarrage de la vidéo");
                video.style.display = 'block';
                video.play().catch(err => console.warn("⚠️ Erreur play vidéo :", err));
            });

            card.addEventListener('mouseleave', () => {
                console.log("🖱 Fin survol : pause vidéo");
                video.pause();
                video.style.display = 'none';
            });

            // Clic
            card.addEventListener('click', () => {
                console.log("🖱 Clic sur la card :", card);
                const onclickAttr = card.getAttribute('onclick');
                if (onclickAttr) {
                    const urlMatch = onclickAttr.match(/'(.*?)'/);
                    if (urlMatch && urlMatch[1]) {
                        console.log("🔗 Redirection vers :", urlMatch[1]);
                        window.location.href = urlMatch[1];
                    }
                }
            });
        }
    });

    console.log("✅ pic-animated.js initialisé !");
};
