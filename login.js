document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const statusMessage = document.getElementById('statusMessage');
    
    // Simulate a login process and provide feedback
    if (email && password) {
        statusMessage.textContent = "Login successful!";
        statusMessage.style.color = "green";
    } else {
        statusMessage.textContent = "Please enter both email and password.";
        statusMessage.style.color = "red";
    }
});
