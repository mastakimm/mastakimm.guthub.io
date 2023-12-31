document.addEventListener('DOMContentLoaded', function() {
    const menuHamburger = document.querySelector('.menuhamburger');
    const navbar = document.getElementById('navbar');

    menuHamburger.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);

        if (!expanded) {
            navbar.classList.remove('active');
        } else {
            navbar.classList.add('active');
        }
    });

    window.addEventListener('click', function(event) {
        if (!menuHamburger.contains(event.target) && !navbar.contains(event.target)) {
            menuHamburger.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        }
    });
});
