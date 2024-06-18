// анимация цифер скорости и мощности
export const power = addEventListener('DOMContentLoaded', () => {
        function animateText(element, startValue, endValue) {
            const startTime = performance.now();
            const duration = 3000;
    
            function animate() {
                const currentTime = performance.now();
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentValue = Math.floor(startValue + progress * (endValue - startValue));
                element.textContent = currentValue;
    
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
    
            animate();
        }
    
        const animatedElements = document.querySelectorAll('.animatedText');
        animatedElements.forEach(element => {
            const startValue = parseInt(element.getAttribute('data--start'));
            const endValue = parseInt(element.getAttribute('data--end'));
    
            animateText(element, startValue, endValue);
        });
})

