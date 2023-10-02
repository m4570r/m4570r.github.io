// Obtén la referencia al elemento de la terminal
const terminal = document.querySelector('.terminal-linux');

// Define un arreglo de comandos y respuestas
const commandsAndResponses = [
  { command: 'PHP', response: '' },
  { command: 'SQL', response: '' },
  { command: 'HTML', response: '' },
  { command: 'CSS', response: '' },
  { command: 'Javascript', response: '' },
  { command: 'Python', response: '' },
  { command: 'C#', response: '' },
];

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
      // Elimina la respuesta
      terminal.lastChild.remove();
    }
  }
}

// Ejecuta los comandos cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', () => {
  // Ejecuta los comandos iniciales
  executeCommands();

  // Resetear la simulación después de un minuto eliminando solo los elementos .terminal-output
  setInterval(() => {
    // Selecciona y elimina solo los elementos .terminal-output
    const outputElements = terminal.querySelectorAll('.terminal-output');
    outputElements.forEach((element) => {
      element.remove();
    });

    // Vuelve a mostrar los comandos iniciales con efecto de escritura
    executeCommands();
  }, 60000); // Cada 1 minuto (60000 milisegundos)
});
