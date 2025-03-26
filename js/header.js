document.addEventListener("DOMContentLoaded", function () {
    let header = document.createElement("header");
    header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Tienda de Videojuegos</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="about.html">Acerca de</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    document.body.prepend(header);
});

