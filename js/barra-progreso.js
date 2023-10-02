document.addEventListener('DOMContentLoaded', () => {
  const barraProgreso = document.getElementById('barra-progreso');
  const textoPorcentaje = document.getElementById('texto-porcentaje');
  let aumento = true;
  let porcentaje = 0;

  function iniciarBarraCarga() {
    cargarBarra();
  }

  function cargarBarra() {
    if (aumento) {
      if (porcentaje < 100) {
        porcentaje++;
      } else {
        aumento = false;
      }
    } else {
      if (porcentaje > 0) {
        porcentaje--;
      } else {
        aumento = true;
      }
    }

    barraProgreso.style.width = porcentaje + '%';
    textoPorcentaje.textContent = porcentaje + '%';

    setTimeout(cargarBarra, 600); // 600 ms por 1% (ajusta según desees)
  }

  iniciarBarraCarga();
});
