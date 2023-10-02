// Detección de intento de captura de pantalla
document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen' || (e.key === 'Control' && e.key === '+')) {
        // Mostrar la capa de superposición (overlay) al intentar tomar una captura de pantalla
        const overlay = document.getElementById('overlay');
        overlay.style.opacity = '1';
        
        // Evitar la captura de pantalla real (esto puede no funcionar en todos los navegadores)
        e.preventDefault();
    }
});
