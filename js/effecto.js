document.addEventListener("DOMContentLoaded", function () {
  const bannerContents = document.querySelectorAll(".banner-content");
  let currentIndex = 0;
  let timeoutId;

  function explodeAndNext() {
    bannerContents[currentIndex].classList.add("explosion");
    currentIndex = (currentIndex + 1) % bannerContents.length;
    bannerContents[currentIndex].classList.remove("explosion");

    // Limpia el temporizador anterior (si existe) y configura uno nuevo
    clearTimeout(timeoutId);
    timeoutId = setTimeout(explodeAndNext, 3000); // El doble del tiempo de animación

    // Cambia al siguiente banner después de 3 segundos
    setTimeout(nextBanner, 3000);
  }

  // Inicializa la primera explosión
  bannerContents[currentIndex].classList.remove("explosion");

  // Configura el temporizador para la primera transición
  timeoutId = setTimeout(explodeAndNext, 3000); // El doble del tiempo de animación

  // Función para cambiar al siguiente banner
  function nextBanner() {
    bannerContents[currentIndex].classList.remove("explosion");
    currentIndex = (currentIndex + 1) % bannerContents.length;
    bannerContents[currentIndex].classList.add("explosion");
  }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Evita que se muestre el menú contextual
});
