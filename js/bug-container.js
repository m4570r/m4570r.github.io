const bugContainer = document.getElementById('bug-container');

function createBug() {
    const bugTypes = ['solid', 'regular', 'light', 'thin', 'duotone'];
    const bugType = bugTypes[Math.floor(Math.random() * bugTypes.length)];
    const bug = document.createElement('i');
    bug.className = `fas fa-bug fa-${bugType}`;
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speedX = (Math.random() - 0.5) * 4;
    const speedY = (Math.random() - 0.5) * 4;
    
    bug.style.left = `${x}px`;
    bug.style.top = `${y}px`;
    
    bugContainer.appendChild(bug);

    setTimeout(() => {
        bug.remove();
    }, 30000); // Elimina el icono después de 30 segundos

    function update() {
        const rect = bug.getBoundingClientRect();

        if (
            rect.left < 0 ||
            rect.right > window.innerWidth ||
            rect.top < 0 ||
            rect.bottom > window.innerHeight
        ) {
            bug.remove();
        } else {
            bug.style.left = `${rect.left + speedX}px`;
            bug.style.top = `${rect.top + speedY}px`;
        }

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

setInterval(createBug, 1000);
