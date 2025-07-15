document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".img-galeria");
  const imagenesLight = document.querySelector(".agregar-imagen");
  const contenedorLight = document.querySelector(".imagen-light");
  const hamburguer = document.querySelector(".hamburguer");

  if (imagenes && imagenesLight && contenedorLight) {
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", () => {
        mostrarImagen(imagen.getAttribute("src"));
      });
    });

    contenedorLight.addEventListener("click", (e) => {
      if (e.target !== imagenesLight) {
        cerrarLightbox();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && contenedorLight.classList.contains("show")) {
        cerrarLightbox();
      }
    });
  }

  function mostrarImagen(src) {
    imagenesLight.src = src;
    contenedorLight.classList.add("show");
    imagenesLight.classList.add("showImage");
    if (hamburguer) hamburguer.style.opacity = "0";
  }

  function cerrarLightbox() {
    contenedorLight.classList.remove("show");
    imagenesLight.classList.remove("showImage");
    if (hamburguer) hamburguer.style.opacity = "1";
  }
});
