let hamOpen = document.getElementById('open');
let hamClose = document.getElementById('close');
let mobileNav = document.getElementById('mobile-nav');

hamOpen.addEventListener('click', function() {
    mobileNav.style.display = 'block';
});

hamClose.addEventListener('click', () => {
    mobileNav.style.display = 'none';
});