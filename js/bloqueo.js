// Deshabilitar el zoom en dispositivos móviles
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});

// Impedir que se abra el menú contextual al hacer clic derecho
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Impedir la selección de texto en todo el documento
document.addEventListener('selectstart', function(event) {
  event.preventDefault();
});

// Impedir el zoom en pantallas grandes al presionar Ctrl + '+' o Ctrl + '-'
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
    event.preventDefault();
  }
});

// Obtén la referencia al elemento en el que deseas deshabilitar el pull down
const elementoDeseado = document.getElementById('tu-elemento'); // Reemplaza 'tu-elemento' con el ID de tu elemento

elementoDeseado.addEventListener('touchstart', function(event) {
  // Evita la acción predeterminada del navegador al hacer pull down
  event.preventDefault();
});


// Mostrar la advertencia cuando se detecta una captura de pantalla
document.addEventListener('keyup', function(event) {
  if (event.key === 'PrintScreen' || event.key === 'PrtScn') {
    // Mostrar la capa de advertencia
    const screenshotWarning = document.getElementById('screenshot-warning');
    screenshotWarning.style.display = 'block';

    // Agregar código adicional aquí, como notificar al servidor o tomar medidas adicionales.
  }
});

// Capturamos el evento de rueda del mouse en el documento
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault(); // Evita el comportamiento predeterminado del zoom
    }
});
