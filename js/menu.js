document.addEventListener("DOMContentLoaded", () => {
  const hamburguer = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu-navegacion");

  if (hamburguer && menu) {
    // Abrir o cerrar el menú
    hamburguer.addEventListener("click", () => {
      menu.classList.toggle("spread");
    });

    // Cerrar el menú al hacer clic fuera
    window.addEventListener("click", (e) => {
      if (
        menu.classList.contains("spread") &&
        !menu.contains(e.target) &&
        !hamburguer.contains(e.target)
      ) {
        menu.classList.remove("spread");
      }
    });

    // Cerrar el menú con tecla ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("spread")) {
        menu.classList.remove("spread");
      }
    });
  }
});
