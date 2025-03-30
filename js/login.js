document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameOrEmail = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No hay una cuenta registrada. Regístrate primero.");
            return;
        }

        
        if ((usernameOrEmail === storedUser.username || usernameOrEmail === storedUser.email) && password === storedUser.password) {
            alert("Inicio de sesión exitoso. ¡Bienvenido!");
            localStorage.setItem("isLoggedIn", "true"); 
            window.location.href = "../index.html"; 
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
