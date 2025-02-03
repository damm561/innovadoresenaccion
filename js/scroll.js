document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el salto inmediato
        const targetId = this.getAttribute('href').substring(1); // Obtiene el id de la sección
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, // Posición de la sección en la página
                behavior: 'smooth' // Desplazamiento suave
            });
        }
    });
});
