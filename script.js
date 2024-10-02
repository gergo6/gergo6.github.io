document.getElementById("generate-user").addEventListener("click", fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById("name").innerText = `Name: ${user.name.first} ${user.name.last}`;
            document.getElementById("email").innerText = `Email: ${user.email}`;
            document.getElementById("profile-pic").src = user.picture.large;
        })
        .catch(error => {
            console.error('Error fetching random user:', error);
        });
}
// JavaScript to handle form validation and mock submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Clear previous errors
        clearErrors();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name === '') {
            showError('name', 'Name is required.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            showError('email', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            showError('message', 'Message is required.');
            isValid = false;
        }

        // If the form is valid, simulate form submission
        if (isValid) {
            alert('Thank you, ' + name + '! Your message has been sent.');
            form.reset(); // Clear the form after successful submission
        }
    });

    // Function to show error messages
    function showError(field, message) {
        const errorElement = document.getElementById(field + '-error');
        const inputElement = document.getElementById(field);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        inputElement.classList.add('error');
    }

    // Function to clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (error) {
            error.style.display = 'none';
        });

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.classList.remove('error');
        });
    }

    // Function to validate email format using regex
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
