const adSidebar = document.getElementById('adSidebar');
const toggleAd = document.getElementById('toggleAd');

toggleAd.addEventListener('click', function () {
    adSidebar.classList.toggle('collapsed');
    const icon = toggleAd.querySelector('i');
    icon.classList.toggle('fa-angle-left');
    icon.classList.toggle('fa-angle-right');
});