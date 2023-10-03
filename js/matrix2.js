// Obtén una referencia al elemento donde mostrarás el efecto Matrix
const matrixContainer = document.querySelector('.matrix-container');

// Función para generar una cadena de números aleatoria
function generateRandomNumbers() {
  const length = Math.floor(Math.random() * 8) + 1; // Longitud aleatoria entre 1 y 8
  const numbers = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
    numbers.push(randomNumber);
  }

  return numbers.join('\n'); // Convierte el arreglo en una cadena con saltos de línea
}

// Función para crear y animar una cadena de números
function createMatrixEffect() {
  const matrixElement = document.createElement('div');
  matrixElement.className = 'matrix-effect';

  // Genera una cadena de números aleatoria
  const numbers = generateRandomNumbers();

  // Establece la cadena de números como contenido del elemento
  matrixElement.textContent = numbers;

  // Establece una posición horizontal aleatoria
  const initialPositionX = Math.random() * 100;

  // Establece una posición vertical inicial arriba de la pantalla
  const initialPositionY = -Math.random() * 100;

  // Establece un tamaño de fuente aleatorio
  const fontSize = Math.floor(Math.random() * 20) + 16; // Tamaño de fuente entre 16 y 35

  // Establece una duración de animación aleatoria
  const animationDuration = Math.random() * 5 + 4; // Duración entre 4 y 9 segundos

  // Aplica estilos al elemento
  matrixElement.style.left = `${initialPositionX}%`;
  matrixElement.style.top = `${initialPositionY}%`;
  matrixElement.style.fontSize = `${fontSize}px`;
  matrixElement.style.animation = `matrixAnimation ${animationDuration}s linear infinite`;

  // Agrega el elemento al contenedor
  matrixContainer.appendChild(matrixElement);

  // Elimina elementos que ya no son visibles
  setTimeout(() => {
    matrixElement.remove();
  }, animationDuration * 1000); // Elimina el elemento después de que termine la animación
}

// Crea múltiples cadenas de números
setInterval(createMatrixEffect, 500); // Cada medio segundo

// Establece el estilo CSS para la animación
const style = document.createElement('style');
style.innerHTML = `
  @keyframes matrixAnimation {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

// Agrega el estilo al documento
document.head.appendChild(style);
