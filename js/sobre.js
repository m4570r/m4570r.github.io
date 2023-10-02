// Espera 5 segundos (5000 milisegundos) antes de ejecutar el código principal de la segunda terminal
const countdownElement3 = document.getElementById('countdown3');
let countdownSeconds3 = 5;

// Función para iniciar la cuenta regresiva y reiniciar la segunda terminal
function startCountdownAndRestartTerminal() {
  countdownElement3.textContent = `Cargando framework... ${countdownSeconds3} segundos`;

  countdownSeconds3--;

  if (countdownSeconds3 < 0) {
    clearInterval(countdownInterval3);
    countdownElement3.style.display = 'none'; // Ocultar el elemento de la cuenta regresiva
    restartSecondTerminal();
    countdownSeconds3 = 80; // Reiniciar el contador a 80 segundos
    startCountdownAndRestartTerminal(); // Iniciar la cuenta regresiva nuevamente
  }
}

const countdownInterval3 = setInterval(startCountdownAndRestartTerminal, 1000); // Actualiza la cuenta regresiva cada segundo

function restartSecondTerminal() {
  // Reinicia la segunda terminal
  const terminal3 = document.querySelector('.terminal-linux3');
  terminal3.innerHTML = ''; // Elimina todos los elementos de la terminal 3

  // Vuelve a cargar la barra de título y los botones
  const titleBar3 = document.createElement('div');
  titleBar3.className = 'terminal-title3';
  titleBar3.textContent = 'Frameworks';

  const controls3 = document.createElement('div');
  controls3.className = 'terminal-controls3';
  const closeButton3 = document.createElement('button');
  closeButton3.className = 'control-button3 close3';
  closeButton3.textContent = 'X';
  controls3.appendChild(closeButton3);

  terminal3.appendChild(titleBar3); // Vuelve a mostrar el título
  terminal3.appendChild(controls3); // Vuelve a mostrar los botones

  startSecondTerminalCode(); // Inicia el código de la segunda terminal nuevamente
}

function startSecondTerminalCode() {
  // El código principal de la segunda terminal comienza aquí

  // Obtén la referencia al elemento de la segunda terminal
  const terminal3 = document.querySelector('.terminal-linux3');

  // Define un arreglo de comandos y respuestas para la segunda terminal
  const commandsAndResponses3 = [
    { command: 'Bootstrap', response: 'Framework de front-end para desarrollo web responsive.' },
    { command: 'Laravel', response: 'Framework de back-end para desarrollo web con PHP.' },
    { command: 'Symfony', response: 'Framework de back-end para desarrollo web con PHP.' },
    { command: 'React', response: 'Librería de JavaScript para construir interfaces de usuario.' },
    { command: 'Angular', response: 'Framework de JavaScript para el desarrollo de aplicaciones web.' },
  ];

  // Mantén una referencia al título y los botones de la segunda terminal
  const titleBar3 = terminal3.querySelector('.terminal-title3');
  const controls3 = terminal3.querySelector('.terminal-controls3');

  // Función para simular la escritura de un comando o respuesta con efecto de escritura
  async function typeText3(text, isInput) {
    const textElement3 = document.createElement('div');
    textElement3.className = isInput ? 'terminal-input3' : 'terminal-output3';
    terminal3.appendChild(textElement3);

    let textToType3 = isInput ? `$ ${text}` : text;
    for (let i = 0; i < textToType3.length; i++) {
      await sleep(50); // Velocidad de escritura (ajusta según desees)
      textElement3.textContent += textToType3[i];
    }
  }

  // Función para ejecutar los comandos y mostrar las respuestas con efecto de escritura
  async function executeCommands3() {
    for (const { command, response } of commandsAndResponses3) {
      await typeText3(command, true);
      if (response) {
        await typeText3(response, false);
        // Espera 1 segundo después de mostrar la respuesta antes de eliminarla
        await sleep(1000);
        // Elimina la respuesta (terminal-output3)
        const outputElements3 = terminal3.querySelectorAll('.terminal-output3');
        outputElements3[outputElements3.length - 1].remove();
      }
    }
  }

  // Espera 5 segundos antes de mostrar el mensaje de carga (simulación)
  setTimeout(() => {
    executeCommands3();
  }, 5000);
}

// Función para simular una pausa (sleep)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Iniciar la primera cuenta regresiva
startCountdownAndRestartTerminal();
