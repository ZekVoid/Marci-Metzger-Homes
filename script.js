window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.style.background = '#222';
    } else {
        nav.style.background = 'transparent';
    }
});