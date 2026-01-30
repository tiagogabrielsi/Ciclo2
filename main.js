function initializeComponents() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const links = document.querySelectorAll('.nav-item, .sub-item');

    accordionHeaders.forEach(header => {
        header.onclick = function() {
            const item = this.parentElement;
            const allItems = document.querySelectorAll('.accordion-item');
            
            allItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        };
    });

    links.forEach(link => {
        link.onclick = function(e) {
            const href = this.getAttribute('href');
            
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }
        };
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeComponents);
} else {
    initializeComponents();
}