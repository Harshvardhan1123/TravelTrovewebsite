document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const statusMessage = document.getElementById('statusMessage');
    
    if (password !== confirmPassword) {
        statusMessage.textContent = "Passwords do not match.";
        statusMessage.style.color = "red";
    } else {
        statusMessage.textContent = "Login successful!";
        statusMessage.style.color = "green";
    }
});
