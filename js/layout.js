document.addEventListener("DOMContentLoaded", function () {

    let basePath = window.location.pathname.endsWith("index.html") || window.location.pathname === "/"
        ? "index.html"
        : "../index.html";

    let header = `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="${basePath}">Tienda de Videojuegos</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="about.html">Acerca de</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contacto</a></li>
                        </ul>
                        <div id="navbar-user" class="d-flex align-items-center ms-auto">
                            <!-- Aquí se insertará la info del usuario -->
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;

    let footer = `
        <footer>
            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
                    </ul>
                    <p class="text-center text-white">© 2025 Company, Inc</p>
                </footer>
            </div>
        </footer>
    `;


    document.body.insertAdjacentHTML("afterbegin", header);


    document.body.insertAdjacentHTML("beforeend", footer);

 
    const user = JSON.parse(localStorage.getItem("user")); 
    const navbarUser = document.getElementById("navbar-user");

    if (user) {

        navbarUser.innerHTML = `
            <span class="nav-item text-white me-3">Hola, ${user.username}!</span>
            <a href="#" id="logout-btn" class="nav-link text-white">Salir</a>
        `;


        document.getElementById("logout-btn").addEventListener("click", function () {
            localStorage.removeItem("user"); 
            window.location.reload(); 
        });
    } else {

        navbarUser.innerHTML = `
            <a href="/aa_pweb/usuarios/login.html" class="nav-link text-white me-2">Iniciar Sesión</a>
            <a href="/aa_pweb/usuarios/registro.html" class="nav-link text-white">Registrarse</a>
        `;
    }
});

