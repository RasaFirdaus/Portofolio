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

