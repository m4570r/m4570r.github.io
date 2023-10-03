// Obtén la referencia al elemento de la terminal
const terminal = document.querySelector('.terminal-linux');

// Define un arreglo de comandos y respuestas
const commandsAndResponses = [
  { command: 'PHP', response: 'PHP es un lenguaje de programación popular para desarrollo web.' },
  { command: 'SQL', response: 'SQL es un lenguaje para gestionar bases de datos relacionales.' },
  { command: 'HTML', response: 'HTML es el lenguaje de marcado utilizado para crear páginas web.' },
  { command: 'CSS', response: 'CSS es un lenguaje de estilo que se utiliza para diseñar páginas web.' },
  { command: 'Javascript', response: 'Javascript es un lenguaje de programación ampliamente utilizado en el desarrollo web.' },
];

// Mantén una referencia al título y los botones
const titleBar = terminal.querySelector('.terminal-title');
const controls = terminal.querySelector('.terminal-controls');

// Función para simular la escritura de un comando o respuesta con efecto de escritura
async function typeText(text, isInput) {
  const textElement = document.createElement('div');
  textElement.className = isInput ? 'terminal-input' : 'terminal-output';
  terminal.appendChild(textElement);

  let textToType = isInput ? `$ ${text}` : text;
  for (let i = 0; i < textToType.length; i++) {
    await sleep(100); // Velocidad de escritura (ajusta según desees)
    textElement.textContent += textToType[i];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para ejecutar los comandos y mostrar las respuestas con efecto de escritura
async function executeCommands() {
  for (const { command, response } of commandsAndResponses) {
    await typeText(command, true);
    if (response) {
      await typeText(response, false);
      // Espera 1 segundo después de mostrar la respuesta antes de eliminarla
      await sleep(1000);
      // Elimina la respuesta (terminal-output)
      const outputElements = terminal.querySelectorAll('.terminal-output');
      outputElements[outputElements.length - 1].remove();
    }
  }
}

// Verifica si el mensaje de carga ya se mostró
let loadingMessageShown = false;

// Espera 5 segundos antes de mostrar el mensaje de carga (solo una vez)
setTimeout(() => {
  if (!loadingMessageShown) {
    const loadingElement = showLoadingMessage();
    loadingMessageShown = true;

    // Espera 5 segundos adicionales antes de eliminar el mensaje de carga
    setTimeout(() => {
      loadingElement.remove();
      // Luego de mostrar el mensaje de carga, ejecuta los comandos (solo una vez)
      executeCommands();

      // Reiniciar el proceso después de 60 segundos
      setInterval(() => {
        restartProcess();
      }, 60000); // Cada 60 segundos
    }, 5000);
  }
}, 5000);

// Muestra un mensaje de carga antes de ejecutar los comandos
function showLoadingMessage() {
  const loadingElement = document.createElement('div');
  loadingElement.className = 'terminal-output';
  loadingElement.textContent = 'Cargando lenguajes...';
  terminal.appendChild(loadingElement);
  return loadingElement;
}

function restartProcess() {
  // Limpia el contenido de la terminal, incluyendo las respuestas anteriores
  terminal.innerHTML = '';

  // Vuelve a mostrar el mensaje de carga (solo una vez)
  const loadingElement = showLoadingMessage();
  loadingMessageShown = true;

  // Espera 5 segundos adicionales antes de eliminar el mensaje de carga
  setTimeout(() => {
    loadingElement.remove();

    const terminal = document.querySelector('.terminal-linux');
  terminal.innerHTML = ''; // Elimina todos los elementos de la terminal 3

  // Vuelve a cargar la barra de título y los botones
  const titleBar = document.createElement('div');
  titleBar.className = 'terminal-title3';
  titleBar.textContent = 'Lenguajes';

  const controls = document.createElement('div');
  controls.className = 'terminal-controls';
  const closeButton = document.createElement('button');
  closeButton.className = 'control-button3 close3';
  closeButton.textContent = 'X';
  controls.appendChild(closeButton);

   
    // Vuelve a agregar la barra de título y los botones
    terminal.appendChild(titleBar);
    terminal.appendChild(controls);

    // Luego de mostrar la barra de título y los botones, ejecuta los comandos (solo una vez)
    executeCommands();
  }, 5000);
}
