function createGridItem() {
    const gridItem = document.createElement("i");
    gridItem.className = "fas fa-skull grid-item"; // Agregar la clase de Font Awesome para la calavera

    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const size = Math.random() * 200 + 50;

    gridItem.style.left = left + "px";
    gridItem.style.top = top + "px";
    gridItem.style.fontSize = size + "px"; // Ajustar el tamaño

    document.getElementById("grid-container").appendChild(gridItem);

    setTimeout(() => {
        gridItem.style.opacity = 1;
        setTimeout(() => {
            gridItem.style.opacity = 0;
            setTimeout(() => {
                gridItem.remove();
            }, 1000);
        }, 10000);
    }, 5000);
}

setInterval(createGridItem, 15000);
