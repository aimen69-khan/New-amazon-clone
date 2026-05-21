const langDropdownComponent = document.getElementById('langDropdownComponent');
const langPageOverlay = document.getElementById('langPageOverlay');

langDropdownComponent.addEventListener('mouseenter', () => {
    langDropdownComponent.classList.add('lang-panel-open');
    langPageOverlay.classList.add('lang-overlay-active');
});

langDropdownComponent.addEventListener('mouseleave', () => {
    langDropdownComponent.classList.remove('lang-panel-open');
    langPageOverlay.classList.remove('lang-overlay-active');
});


const accountDropdown = document.getElementById('accountDropdown');
const pageOverlay = document.getElementById('pageOverlay');

accountDropdown.addEventListener('mouseenter', () => {
    accountDropdown.classList.add('active');
    pageOverlay.classList.add('active');
});

accountDropdown.addEventListener('mouseleave', () => {
    accountDropdown.classList.remove('active');
    pageOverlay.classList.remove('active');
});


const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    slides[currentSlideIndex].classList.remove('active');
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    slides[currentSlideIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
    resetAutoPlay();
});

function startAutoPlay() {
    slideInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 5000);
}

function resetAutoPlay() {
    clearInterval(slideInterval);
    startAutoPlay();
}

startAutoPlay();


const track = document.getElementById('imageTrack');
const silderbtnPrev = document.getElementById('silderbtnPrev');
const silderbtnNext = document.getElementById('silderbtnNext');

const slideWidth = 700; 

silderbtnNext.addEventListener('click', () => {
    track.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev.addEventListener('click', () => {
    track.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});



const track1 = document.getElementById('imageTrack1');
const silderbtnPrev2 = document.getElementById('silderbtnPrev2');
const silderbtnNext2 = document.getElementById('silderbtnNext2');

const slideWidth1 = 700; 

silderbtnNext2.addEventListener('click', () => {
    track1.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev2.addEventListener('click', () => {
    track1.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});



const track2 = document.getElementById('imageTrack2');
const silderbtnPrev3 = document.getElementById('silderbtnPrev3');
const silderbtnNext3 = document.getElementById('silderbtnNext3');

const slideWidth2 = 700;

silderbtnNext3.addEventListener('click', () => {
    track2.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev3.addEventListener('click', () => {
    track2.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});



const track3 = document.getElementById('imageTrack3');
const silderbtnPrev4 = document.getElementById('silderbtnPrev4');
const silderbtnNext4 = document.getElementById('silderbtnNext4');

const slideWidth3 = 700;

silderbtnNext4.addEventListener('click', () => {
    track3.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev4.addEventListener('click', () => {
    track3.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});





const track4 = document.getElementById('imageTrack4');
const silderbtnPrev5 = document.getElementById('silderbtnPrev5');
const silderbtnNext5 = document.getElementById('silderbtnNext5');

const slideWidth4 = 700;

silderbtnNext5.addEventListener('click', () => {
    track4.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev5.addEventListener('click', () => {
    track4.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});





const track5 = document.getElementById('imageTrack5');
const silderbtnPrev6 = document.getElementById('silderbtnPrev6');
const silderbtnNext6 = document.getElementById('silderbtnNext6');

const slideWidth5 = 700;

silderbtnNext6.addEventListener('click', () => {
    track5.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
});

silderbtnPrev6.addEventListener('click', () => {
    track5.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
});