// Obtén la referencia al elemento de la terminal
const terminal = document.querySelector('.terminal-linux3');

// Define un arreglo de comandos y respuestas
const commandsAndResponses = [
  { command: 'PHP', response: 'MySQL' },
  { command: 'Javascript', response: '' }, // Agrega más comandos y respuestas aquí
  { command: 'CSS', response: 'HTML' },
];

// Función para simular la escritura de un comando o respuesta
function typeText(text, isInput) {
  return new Promise((resolve) => {
    const textElement = document.createElement('div');
    textElement.textContent = isInput ? `$ ${text}` : text;
    terminal.appendChild(textElement);

    // Simula el efecto de escritura
    setTimeout(() => {
      textElement.textContent = isInput ? `$ ${text}` : `$ ${text}`;
      resolve();
    }, 100); // Velocidad de escritura (ajusta según desees)
  });
}

// Función para ejecutar los comandos y mostrar las respuestas
async function executeCommands() {
  for (const { command, response } of commandsAndResponses) {
    await typeText(command, true);
    if (response) {
      await typeText(response, false);
    }
  }
}

// Ejecuta los comandos cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', () => {
  // Ejecuta los comandos iniciales
  executeCommands();

  // Resetear la simulación después de un minuto
  setTimeout(() => {
    // Selecciona todos los elementos con clases .terminal-input y .terminal-output dentro de "terminal-linux"
    const inputOutputElements = terminal.querySelectorAll('.terminal-input, .terminal-output');

    // Elimina los elementos .terminal-input y .terminal-output
    inputOutputElements.forEach((element) => {
      element.remove();
    });

    // Vuelve a mostrar los comandos iniciales
    executeCommands();
  }, 60000); // 60000 milisegundos = 1 minuto
});
