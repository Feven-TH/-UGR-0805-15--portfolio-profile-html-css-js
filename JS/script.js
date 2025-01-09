const menuIcon = document.getElementById('menu');
const navLinks = document.getElementById('nav');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
