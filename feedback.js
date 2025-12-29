const feedbackForm = document.getElementById('qaswaFeedback');
    const successToast = document.getElementById('successToast');

    feedbackForm.addEventListener('submit', function(e) {
        // 1. Prevent the page from jumping/refreshing immediately
        e.preventDefault();

        // 2. Show the Toast
        successToast.classList.add('show');

        // 3. Actually send the data to Formspree in the background
        const data = new FormData(e.target);
        fetch(e.target.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                // Reset form after success
                feedbackForm.reset();
                
                // Hide the toast after 5 seconds
                setTimeout(() => {
                    successToast.classList.remove('show');
                }, 5000);
            }
        });
    });