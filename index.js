// Obtén una referencia al botón
const colorButton = document.getElementById("colorButton");

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const colores = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// Agrega un evento de clic al botón para cambiar el color de fondo
colorButton.addEventListener("click", cambiarColorFondo);
