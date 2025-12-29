 // 1. FIXED: Redirection Logic
        document.getElementById('joinForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Save status to hide the button on the home page
            localStorage.setItem('userStatus', 'joined');
            // Redirect to success page
            window.location.href = 'success.html';
        });

        // 2. FIXED: Password Show/Hide Toggle
        const togglePassword = document.querySelector('#togglePassword');
        const passwordInput = document.querySelector('#password');

        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });