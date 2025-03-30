document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const usuario = document.getElementById("usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const fechaNacimientoStr = document.getElementById("fechaNacimiento").value.trim(); // Cambio de nombre
        const direccion = document.getElementById("direccion").value.trim();

        
        if (!nombre || !usuario || !email || !password || !confirmPassword || !fechaNacimientoStr) {
            alert("Todos los campos son obligatorios, excepto la dirección.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        if (!/(?=.*[A-Z])(?=.*\d).{6,18}/.test(password)) {
            alert("La contraseña debe tener al menos una mayúscula, un número y entre 6 y 18 caracteres.");
            return;
        }

        
        const fechaNacimiento = new Date(fechaNacimientoStr); 
        if (isNaN(fechaNacimiento.getTime())) {
            alert("La fecha de nacimiento no es válida.");
            return;
        }

        const today = new Date();
        let age = today.getFullYear() - fechaNacimiento.getFullYear();
        const monthDiff = today.getMonth() - fechaNacimiento.getMonth();
        const dayDiff = today.getDate() - fechaNacimiento.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 13) {
            alert("Debes tener al menos 13 años para registrarte.");
            return;
        }

        
        const user = {
            nombre,
            usuario,
            email,
            password,
            fechaNacimiento: fechaNacimientoStr, 
            direccion
        };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html"; 
    });
});

