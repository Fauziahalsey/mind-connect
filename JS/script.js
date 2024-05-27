document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    var loginModal = document.getElementById('loginModal');
    var registerModal = document.getElementById('registerModal');

    // Get the button elements
    var loginBtn = document.getElementById('loginBtn');
    var registerBtn = document.getElementById('registerBtn');

    // Get the <span> elements that close the modals
    var closeLogin = document.getElementById('closeLogin');
    var closeRegister = document.getElementById('closeRegister');

    // When the user clicks the login button, open the login modal
    loginBtn.onclick = function() {
        loginModal.style.display = 'block';
    }

    // When the user clicks the register button, open the register modal
    registerBtn.onclick = function() {
        registerModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the login modal
    closeLogin.onclick = function() {
        loginModal.style.display = 'none';
    }

    // When the user clicks on <span> (x), close the register modal
    closeRegister.onclick = function() {
        registerModal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    // Slider functionality
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto slide
    setInterval(nextSlide, 5000);
});
