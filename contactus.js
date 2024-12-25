document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');
    
    if (name && email && subject && message) {
        statusMessage.textContent = "Thank you for your message!";
        statusMessage.style.color = "green";
    } else {
        statusMessage.textContent = "Please fill out all fields.";
    }
});
