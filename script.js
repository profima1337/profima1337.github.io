document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const glowLeft = document.querySelector('.glow-left');
    const glowRight = document.querySelector('.glow-right');

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouch && card) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 45;
            const y = (window.innerHeight / 2 - e.pageY) / 45;

            card.style.transform = `translate(${x}px, ${y}px)`;
            if (glowLeft) glowLeft.style.transform = `translate(${x * -2}px, ${y * -2}px)`;
            if (glowRight) glowRight.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
        });

        document.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0)';
            if (glowLeft) glowLeft.style.transform = 'translate(0, 0)';
            if (glowRight) glowRight.style.transform = 'translate(0, 0)';
        });
    }
});