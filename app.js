console.log("Sistema de Gestión 2026 - Inicializado");


function mostrarMensaje() {
    alert("¡Bienvenido al Sistema de Gestión!");
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente");
  
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.addEventListener("click", function() {
            mostrarMensaje();
        });
    }
});
