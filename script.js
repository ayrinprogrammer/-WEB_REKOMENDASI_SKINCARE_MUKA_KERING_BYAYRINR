document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heartsContainer');
    
    // Kumpulan emoticon lucu untuk animasi latar belakang
    const particles = ['🌸', '💖', '✨', '💕', '⭐', '💧'];

    function createParticle() {
        if (!container) return;
        
        const particle = document.createElement('div');
        particle.classList.add('heart-particle');
        
        // Pilih partikel secara acak
        particle.innerText = particles[Math.floor(Math.random() * particles.length)];
        
        // Atur posisi horizontal acak
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Atur ukuran font acak agar variatif
        particle.style.fontSize = Math.random() * 15 + 12 + 'px';
        
        // Atur durasi animasi acak (antara 3 sampai 6 detik)
        const duration = Math.random() * 3 + 3;
        particle.style.animationDuration = duration + 's';
        
        container.appendChild(particle);
        
        // Hapus elemen setelah animasi selesai agar hemat memori (anti-lag)
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Buat partikel baru setiap 400ms secara konsisten
    setInterval(createParticle, 400);
});
