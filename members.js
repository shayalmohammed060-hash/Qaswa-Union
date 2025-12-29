document.addEventListener('DOMContentLoaded', function() {
        
        // 1. Select all member cards
        const cards = document.querySelectorAll('.member-card');

        // 2. Create the Observer
        const observerOptions = {
            root: null,   // Watch the browser viewport
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% of the card is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add a slight delay based on the order to create a "wave" effect
                    // We calculate a delay based on the index relative to the batch being shown
                    // but for simplicity in a grid, a small random delay or incremental delay works wonders.
                    
                    const card = entry.target;
                    
                    // Simple Logic: Add class immediately when seen
                    // The CSS transition handles the smooth movement
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 100); // 100ms tiny buffer makes it feel less robotic

                    // Stop watching this card once it's animated
                    observer.unobserve(card);
                }
            });
        }, observerOptions);

        // 3. Tell the observer to watch every card
        cards.forEach(card => {
            observer.observe(card);
        });
    });