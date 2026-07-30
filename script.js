document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("promo-video");
    const videoWrapper = document.getElementById("videoWrapper");

    if (video && videoWrapper) {
        // Pausar o reproducir al hacer clic en el video
        videoWrapper.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                videoWrapper.classList.add("playing");
            } else {
                video.pause();
                videoWrapper.classList.remove("playing");
            }
        });

        // Autoplay al hacer scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().then(() => {
                        videoWrapper.classList.add("playing");
                    }).catch(() => {
                        // Si el navegador requiere interacción previa
                        videoWrapper.classList.remove("playing");
                    });
                } else {
                    video.pause();
                    videoWrapper.classList.remove("playing");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(videoWrapper);
    }
});