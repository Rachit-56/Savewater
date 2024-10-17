// Dynamic Greeting based on the time of day
function greetUser() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();

    let greetingMessage;

    if (hour < 12) {
        greetingMessage = 'Good morning! Let’s save water today.';
    } else if (hour < 18) {
        greetingMessage = 'Good afternoon! Ready to make a difference?';
    } else {
        greetingMessage = 'Good evening! Reflect on water-saving actions.';
    }

    if (greetingElement) {
        greetingElement.innerText = greetingMessage;
    }
}

// Form Validation for Contact Page
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (message === "") {
        alert("Message cannot be empty");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Load Footer on all pages
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.log('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    greetUser(); // Greet user based on time
    loadFooter(); // Load footer on all pages
});



