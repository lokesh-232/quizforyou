// scripts.js
let users = []; // Array to store user data
let nextId = 1; // Variable to store the next available ID

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

function showSignUp() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function signup() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let college = document.getElementById("college").value;
    let subject = document.getElementById("subject").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Regular expressions for validation
    let usernameRegex = /^[a-zA-Z]{4,}$/; // At least 4 letters
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // At least 8 characters including one uppercase, one lowercase, one numeric digit, and one special character

    // Check if the input values meet the conditions
   
    if (!emailRegex.test(email)) {
        document.getElementById("message").innerText = "Invalid email format!";
        return;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById("message").innerText = "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one numeric digit, and one special character!";
        return;
    }
    if (password !== confirmPassword) {
        document.getElementById("message").innerText = "Passwords do not match!";
        return;
    }

    // Check if username, email, or college already exists
    let existingUser = users.find(user => user.username === username || user.email === email || user.college === college);
    if (existingUser) {
        document.getElementById("message").innerText = "Username, email, or college already exists!";
        return;
    }

    // Generate unique ID for the user
    let id = nextId++;

    // Store user data in the array
    let user = {
        id: id,
        username: username,
        email: email,
        college: college,
        subject: subject,
        password: password,
        confirmPassword: confirmPassword
    };
    users.push(user);
    localStorage.setItem('hostId', id);
    document.getElementById("message").innerText = "Sign up successful! Your ID is " + id;
    // Clear input fields after successful signup
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("college").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
}


function login() {
    event.preventDefault();
    let loginUsername = document.getElementById("login-username").value;
    let loginPassword = document.getElementById("login-password").value;

    // Search for the user in the array
    let foundUser = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (foundUser) {
        document.getElementById("message").innerText = "Login successful!";
        window.location.href = "quiz.html";
    } else {
        document.getElementById("message").innerText = "Invalid username/password!";
    }
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordIcon = document.getElementById("togglePassword");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.innerHTML = "&#128064;"; // Show eye slash icon
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.innerHTML = "&#128065;"; // Show eye icon
    }
}
