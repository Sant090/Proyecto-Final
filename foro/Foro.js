function agregarPublicacion(event) {
    event.preventDefault();
    const contenido = document.getElementById("nuevaPublicacion").value;
    if (contenido.trim() !== "") {
        const publicacion = document.createElement("div");
        publicacion.classList.add("Publicacion");
        publicacion.textContent = contenido;
        document.getElementById("Publicaciones").appendChild(publicacion);
        document.getElementById("nuevaPublicacion").value = "";
    }
}

document.getElementById("Formulario").addEventListener("submit", agregarPublicacion);