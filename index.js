// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Copy color code functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const colorCard = this.closest('.color-card');
        const colorCode = colorCard.querySelector('p').textContent;
        
        
        navigator.clipboard.writeText(colorCode).then(() => {
            const originalHtml = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                this.innerHTML = originalHtml;
            }, 2000);
        });
    });
});

// Fade In Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});


// const backToTopBtn = document.querySelector('.back-to-top a');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 500) {
//         backToTopBtn.style.display = 'flex';
//     } else {
//         backToTopBtn.style.display = 'none';
//     }
// });