const rainContainer = document.getElementById('rain-container');

function createRaindrop() {
    const raindrop = document.createElement('i');
    raindrop.className = 'fab fa-zhihu fa-3x';
    rainContainer.appendChild(raindrop);

    const x = Math.random() * window.innerWidth;
    const y = -30; // Comienza desde la parte superior
    const duration = Math.random() * 1000 + 500; // Duración de la animación entre 1 y 3 segundos
    const size = Math.random() * 1 + 0.5; // Tamaño entre 1 y 4 veces el tamaño base
    
    // Establecer la posición inicial y el tamaño aleatorio
    raindrop.style.left = `${x}px`;
    raindrop.style.top = `${y}px`;
    raindrop.style.transform = `scale(${size})`;

    anime({
        targets: raindrop,
        translateY: '100vh',
        duration: duration,
        easing: 'linear',
        complete: function() {
            raindrop.remove();
        }
    });
}

setInterval(createRaindrop, 100); // Crea una nueva gota cada 100 milisegundos
