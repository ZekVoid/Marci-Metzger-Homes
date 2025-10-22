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
for (let i = 0; i < totalLogos; i++) {
    const clone = logos[i].cloneNode(true);
    track.appendChild(clone);
}

const allLogos = Array.from(track.children);

let positions = [];
let currentX = 0;

allLogos.forEach((logo, index) => {
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


/* Price Validation */

const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

function validateNumber(input) {
    const value = input.value.trim();
    const errorMsg = input.nextElementSibling;

    if (value === '' || isNaN(value)) {
        input.classList.add('error');
        errorMsg.classList.add('active');
    } else {
        input.classList.remove('error');
        errorMsg.classList.remove('active');
    }
}

minPriceInput.addEventListener('input', () => validateNumber(minPriceInput));
maxPriceInput.addEventListener('input', () => validateNumber(maxPriceInput));

/* Gallery Style */

const mainImg = document.getElementById('main-img');
const thumbnails = document.querySelectorAll('.thumbnails-right img');

let currentIndex = 0;
let autoSlideInterval;
let pauseTimeout;

function showImage(index) {
    mainImg.src = thumbnails[index].src;
    thumbnails.forEach(img => img.classList.remove('active'));
    thumbnails[index].classList.add('active');
    currentIndex = index;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    }, 3000); 
}

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        showImage(index);
        clearInterval(autoSlideInterval); 
        clearTimeout(pauseTimeout);      

        pauseTimeout = setTimeout(() => {
            startAutoSlide();
        }, 5000);
    });
});

showImage(currentIndex);
startAutoSlide();
