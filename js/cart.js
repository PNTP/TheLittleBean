document.addEventListener("DOMContentLoaded", function() {
function adjustCardHeight() {
    const containerList = document.querySelector('.checkout-section .container-list');
    const card = document.querySelector('.checkout-section .card');
    if (containerList && card) {
    card.style.height = `${containerList.offsetHeight}px`;
    }
}

adjustCardHeight();

window.addEventListener('resize', adjustCardHeight);
});