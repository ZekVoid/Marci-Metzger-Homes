window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* Partnership Logos Scrolling Animation */

const track = document.querySelector('.partners-track');
const logos = Array.from(track.children);
const gap = 200;
const speed = 0.5;

const totalLogos = logos.length;
for (let i = 0; i < totalLogos * 2; i++) {
    const clone = logos[i % totalLogos].cloneNode(true);
    track.appendChild(clone);
}

const allLogos = Array.from(track.children);

let positions = [];
let currentX = 0;
allLogos.forEach((logo) => {
    positions.push(currentX);
    logo.style.left = currentX + 'px';
    currentX += logo.offsetWidth + gap;
});

function animate() {
    for (let i = 0; i < allLogos.length; i++) {
        positions[i] -= speed;

        if (positions[i] < -allLogos[i].offsetWidth) {
            const maxPos = Math.max(...positions);
            positions[i] = maxPos + allLogos[i].offsetWidth + gap;
        }

        allLogos[i].style.left = positions[i] + 'px';
    }

    requestAnimationFrame(animate);
}

animate();



