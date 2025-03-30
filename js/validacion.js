$(document).ready(function () {
    $("#registroForm").validate({
        rules: {
            nombre: "required",
            usuario: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 18,
                regex: "^(?=.*[A-Z])(?=.*\\d).+$"
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            fechaNacimiento: {
                required: true,
                minEdad: 13
            }
        },
        messages: {
            nombre: "Por favor, ingresa tu nombre completo.",
            usuario: "Por favor, ingresa un nombre de usuario.",
            email: {
                required: "El correo electrónico es obligatorio.",
                email: "Por favor, ingresa un correo válido."
            },
            password: {
                required: "Por favor, ingresa una contraseña.",
                minlength: "La contraseña debe tener al menos 6 caracteres.",
                maxlength: "La contraseña no puede tener más de 18 caracteres.",
                regex: "Debe incluir al menos una mayúscula y un número."
            },
            confirmPassword: {
                required: "Repite tu contraseña.",
                equalTo: "Las contraseñas no coinciden."
            },
            fechaNacimiento: {
                required: "Ingresa tu fecha de nacimiento.",
                minEdad: "Debes tener al menos 13 años."
            }
        }
    });

    
    $.validator.addMethod("minEdad", function (value, element, min) {
        if (!value) return false; 
        let fechaNacimiento = new Date(value);
        
        if (isNaN(fechaNacimiento.getTime())) return false; 
    
        let hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        
        return edad >= min;
    });
    
});
