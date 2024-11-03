function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup.style.display === "flex") {
        popup.style.display = "none";
    } else {
        popup.style.display = "flex";
    }
}