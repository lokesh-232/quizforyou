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
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

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
   

    // Store user data in the array
    let user = {
        
        username: username,
        email: email,
        college: college,
        
        password: password,
        confirmPassword: confirmPassword
    };
    users.push(user);
   
    document.getElementById("message").innerText = "Sign up successful! ";
}

function login() {
    event.preventDefault();
    let loginUsername = document.getElementById("login-username").value;
    let loginPassword = document.getElementById("login-password").value;

    // Search for the user in the array
    let foundUser = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (foundUser) {
        document.getElementById("message").innerText = "Login successful!";
     
        localStorage.setItem("stdname", loginUsername); 
        window.location.href = "quizCompetition.html";
    } else {
        document.getElementById("message").innerText = "Invalid username/password!";
    }

}