// Function to create particle effect
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => particle.remove(), 100);
}
// Event listener for mouse movement
document.addEventListener('mousemove', (e) => {
    createParticle(e.clientX, e.clientY);
});

// Event listener for touch movement on mobile
document.addEventListener('touchmove', (e) => {
    createParticle(e.touches[0].clientX, e.touches[0].clientY);
});

// Fungsi untuk membuka popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// Fungsi untuk menutup popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Fungsi untuk menutup popup saat area luar di klik
window.onclick = function(event) {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.querySelector('.particle-container');

    for (let i = 0; i < 30; i++) {  // Mengatur jumlah partikel
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

    }
});
