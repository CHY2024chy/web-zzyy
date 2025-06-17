const menuItems = document.querySelectorAll('.has-submenu');
menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu.style.visibility === 'visible') {
            submenu.style.visibility = 'hidden';
            submenu.style.opacity = 0;
        } else {
            submenu.style.visibility = 'visible';
            submenu.style.opacity = 1;
        }
    });
});