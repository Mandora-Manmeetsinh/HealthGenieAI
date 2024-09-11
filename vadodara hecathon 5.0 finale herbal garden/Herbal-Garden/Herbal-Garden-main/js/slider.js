const slider = document.querySelector('.plant-grid');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardWidth = document.querySelector('.plant-card').clientWidth;
let scrollPosition = 0;

nextBtn.addEventListener('click', () => {
    if (scrollPosition < (slider.scrollWidth - slider.clientWidth)) {
        scrollPosition += cardWidth + 16; // 16px for gap between cards
        slider.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth + 16; // 16px for gap between cards
        slider.style.transform = `translateX(-${scrollPosition}px)`;
    }
});