const card = document.getElementById('card');
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

card.addEventListener('click', (e) => {
    if (!e.target.closest('.carousel-container')) {
        card.classList.toggle('open');
    }
});

// Carousel functionality
carousel.addEventListener('touchstart', handleDragStart);
carousel.addEventListener('mousedown', handleDragStart);
carousel.addEventListener('touchmove', handleDragMove);
carousel.addEventListener('mousemove', handleDragMove);
carousel.addEventListener('touchend', handleDragEnd);
carousel.addEventListener('mouseup', handleDragEnd);
carousel.addEventListener('mouseleave', handleDragEnd);

function handleDragStart(e) {
    if (!card.classList.contains('open')) return;
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    carousel.style.cursor = 'grabbing';
}

function handleDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
}

function handleDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    carousel.style.cursor = 'grab';
    
    const endX = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < 2) {
            currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    }
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = parseInt(dot.dataset.index);
        updateCarousel();
    });
});

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
