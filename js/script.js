document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu ul');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    const bannerContents = document.querySelectorAll('.banner-content');
    let currentBannerIndex = 0;

    function showBanner(index) {
        for (let i = 0; i < bannerContents.length; i++) {
            bannerContents[i].style.display = 'none';
        }
        bannerContents[index].style.display = 'block';
    }

    function changeBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerContents.length;
        showBanner(currentBannerIndex);
    }

    // Mostrar el primer banner al cargar la página
    showBanner(currentBannerIndex);

    // Cambiar el banner automáticamente cada 5 segundos (ajusta el tiempo según desees)
    setInterval(changeBanner, 5000);

    // Efecto de escritura y borrado del texto "m4570r"
    const logoText = document.getElementById('logo-text');
    const cursor = document.getElementById('cursor');
    const textToType = "m4570r";

    let currentIndex = 0;
    let isTyping = true;

    function typeText() {
        if (isTyping) {
            logoText.textContent += textToType[currentIndex];
            currentIndex++;
            if (currentIndex === textToType.length) {
                isTyping = false;
                setTimeout(eraseText, 10000); // Espera 10 segundos antes de borrar
            } else {
                setTimeout(typeText, 600); // Intervalo de escritura
            }
        }
    }

    function eraseText() {
        if (!isTyping) {
            const currentText = logoText.textContent;
            if (currentText.length > 0) {
                logoText.textContent = currentText.slice(0, -1);
                setTimeout(eraseText, 100); // Intervalo de borrado
            } else {
                isTyping = true;
                currentIndex = 0;
                setTimeout(typeText, 10000); // Espera 10 segundos antes de escribir de nuevo
            }
        }
    }

    // Iniciar el efecto de escritura
    typeText();

    // Efecto "Matrix" en el fondo del encabezado
    const headerMatrix = document.createElement('div');
    headerMatrix.classList.add('matrix-effect');
    headerMatrix.style.zIndex = '-1';
    document.body.appendChild(headerMatrix);

    // Efecto "Matrix" en el fondo del pie de página
    const footerMatrix = document.createElement('div');
    footerMatrix.classList.add('matrix-effect');
    footerMatrix.style.zIndex = '-1';
    document.body.appendChild(footerMatrix);

    function createMatrixEffect(container) {
        const columns = Math.floor(window.innerWidth / 20); // Ancho de cada columna de caracteres
        const characters = [];

        for (let i = 0; i < columns; i++) {
            const character = document.createElement('span');
            character.innerText = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Caracteres aleatorios
            character.style.position = 'absolute';
            character.style.left = i * 20 + 'px';
            character.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
            character.style.color = 'limegreen';
            character.style.fontSize = '20px';

            container.appendChild(character);
            characters.push(character);
        }

        function animateMatrix() {
            for (let i = 0; i < characters.length; i++) {
                const character = characters[i];
                const characterSpeed = Math.random() * 5 + 1; // Velocidad aleatoria
                character.style.top = (parseFloat(character.style.top) + characterSpeed) + 'px';

                if (parseFloat(character.style.top) > window.innerHeight) {
                    character.style.top = '0px'; // Volver al inicio cuando salga de la pantalla
                }
            }

            requestAnimationFrame(animateMatrix);
        }

        animateMatrix();
    }

    // Crear el efecto "Matrix" en el encabezado y el pie de página
    createMatrixEffect(headerMatrix);
    createMatrixEffect(footerMatrix);
});
