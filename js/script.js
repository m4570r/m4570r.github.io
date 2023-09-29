// JavaScript para mostrar/ocultar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
        overlay.style.display = 'block'; // Asegura que el overlay esté visible cuando se abre el menú
    });

    overlay.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
    });
	
	// Mostrar el menú normal por defecto
    //menu.style.display = 'block';

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

    // Función para abrir el modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    // Agregar manejadores de eventos para abrir y cerrar los modales
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-id');
            openModal(modalId);
        });
    });

    const modalCloses = document.querySelectorAll('.modal .modal-content');
    modalCloses.forEach(function(close) {
        close.addEventListener('click', function(event) {
            event.stopPropagation(); // Evitar que el clic en el contenido del modal cierre el modal
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.addEventListener('click', function() {
            closeModal(this.getAttribute('id'));
        });
    });

    // Evitar que el clic en el contenido del modal cierre el modal
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(function(content) {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
	
	
	
	
	
	

    // Crear el efecto "Matrix" en el encabezado y el pie de página
    createMatrixEffect(headerMatrix);
    createMatrixEffect(footerMatrix);
	
	
	
const terminalOutput = document.getElementById('output');
const commands = [
    { command: 'ssh-keygen -t rsa -b 4096', response: 'mv directorio/dev/null' },
    { command: 'pwd', response: '/home/m4570r' },
    { command: 'dd if=/dev/hda of=/dev/hdb', response: 'service apache2 start' },
	{ command: 'wget http://www.us-proxy.org/', response: 'metagoofil -d nmap.org -t' },
    { command: 'theharvester -d nmap.org -l 200 -b bing', response: 'nmap -n -sn 192.168.0.0/24' },
    { command: 'sudo /etc/init.d/snmp start', response: 'smtp-user-enum -M /usr/share/metasploit' },
	{ command: 'nmap -n -Pn --script vuln 192.168.0.16', response: 'searchsploit vsftpd' },
    { command: 'service postgresql start', response: 'netstat -tna | grep 5432' },
    { command: 'msfconsole', response: 'meterpreter > background' },
	{ command: 'root@kali:~# ftp 192.168.1.34', response: 'Connected to 192.168.1.34.' },
    { command: 'root@kali:~# nc -nvv 192.168.1.34 6200', response: '[*] Connecting to the SMB service... ' },
    { command: 'rsh -l root 192.168.1.34 /bin/bash', response: 'smbclient -L \\192.168.1.34' },
	{ command: 'msfconsole', response: 'meterpreter > background' },
	{ command: 'root@kali:~# ftp 192.168.1.34', response: 'Connected to 192.168.1.34.' },
    { command: 'root@kali:~# nc -nvv 192.168.1.34 6200', response: '[*] Connecting to the SMB service... ' },
	{ command: 'ssh-keygen -t rsa -b 4096', response: 'mv directorio/dev/null' },
    { command: 'pwd', response: '/home/m4570r' },
    { command: 'dd if=/dev/hda of=/dev/hdb', response: 'service apache2 start' },
	//{ command: 'wget http://www.us-proxy.org/', response: 'metagoofil -d nmap.org -t' },
    //{ command: 'theharvester -d nmap.org -l 200 -b bing', response: 'nmap -n -sn 192.168.0.0/24' },
    //{ command: 'sudo /etc/init.d/snmp start', response: 'smtp-user-enum -M /usr/share/metasploit' },
	//{ command: 'nmap -n -Pn --script vuln 192.168.0.16', response: 'searchsploit vsftpd' },
    //{ command: 'service postgresql start', response: 'netstat -tna | grep 5432' },
    //{ command: 'msfconsole', response: 'meterpreter > background' },
	//{ command: 'root@kali:~# ftp 192.168.1.34', response: 'Connected to 192.168.1.34.' },
    //{ command: 'root@kali:~# nc -nvv 192.168.1.34 6200', response: '[*] Connecting to the SMB service... ' },
	
    // Agrega más comandos y respuestas aquí
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeCommand(index) {
    if (index < commands.length) {
        const { command, response } = commands[index];
        
        for (let i = 0; i < command.length; i++) {
            terminalOutput.textContent += `${command.charAt(i)}`;
            await sleep(100); // Espera 50 milisegundos por carácter
        }
        terminalOutput.textContent += '\n'; // Nueva línea después del comando
        
        await sleep(2000); // Espera 1 segundo antes de mostrar la respuesta
        
        for (let i = 0; i < response.length; i++) {
            terminalOutput.textContent += `${response.charAt(i)}`;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            await sleep(70); // Espera 30 milisegundos por carácter
        }
        
        terminalOutput.textContent += '\n'; // Doble salto de línea después de la respuesta
        
        await sleep(5000); // Espera 1 segundo antes de pasar al siguiente comando
        await typeCommand(index + 1);
    } else {
        // Se completaron todos los comandos, esperar 20 segundos y luego reiniciar
        await sleep(20000); // Esperar 20 segundos
        terminalOutput.textContent = ''; // Limpiar el contenido de la terminal
        typeCommand(0); // Reiniciar la simulación desde el primer comando
    }
}

typeCommand(0);

});

    // Agrega un evento clic al botón "Cerrar Menú"
    document.getElementById("cerrar-menu").addEventListener("click", function () {
        // Cierra el menú al hacer clic en el botón
        mainMenu.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
    });
	
	
const texts = [
    "Bienvenido a mi página web",
    "Aquí encontrarás información",
    "Hoja de vida, Servicios y Contacto"
];

/*
const bannerContents = document.querySelectorAll(".banner-content h1");
const progressBar = document.querySelector(".progress");
const progressBarWidth = 100 / texts.length;

function typeText(index) {
    if (index < texts.length) {
        bannerContents[index].textContent = "";
        bannerContents[index].style.display = "block";
        let text = texts[index];
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                bannerContents[index].textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                updateProgressBar(index + 1);
            }
        }, 100);
    }
}

function updateProgressBar(index) {
    progressBar.style.width = `${progressBarWidth * index}%`;
}

texts.forEach((_, index) => {
    setTimeout(() => {
        typeText(index);
    }, index * 5000);
});
*/
/* ... */
const bannerContents = document.querySelectorAll(".banner-content h1");
const progressBar = document.querySelector(".progress");

let currentIndex = 0;
let currentText = ""; // Variable para almacenar el texto actual en escritura
let currentTextIndex = 0; // Índice del carácter actual

function typeText() {
    if (currentTextIndex < bannerContents[currentIndex].textContent.length) {
        currentText += bannerContents[currentIndex].textContent.charAt(currentTextIndex);
        bannerContents[currentIndex].textContent = currentText;
        currentTextIndex++;
        setTimeout(typeText, 50); // Velocidad de escritura (50 ms)
    } else {
        setTimeout(nextBanner, 5000); // Espera 5 segundos antes de pasar al siguiente banner
    }
}

function showBanner(index) {
    currentText = ""; // Reinicia el texto actual al cambiar de banner
    currentTextIndex = 0;
    bannerContents[currentIndex].style.display = "none";
    currentIndex = index;
    bannerContents[index].style.display = "block";
    typeText(); // Inicia la escritura del nuevo texto
    updateProgressBar();
}

function updateProgressBar() {
    progressBar.style.animation = "none";
    progressBar.offsetHeight; // Trigger reflow to restart the animation
    progressBar.style.animation = null;
}

function nextBanner() {
    const nextIndex = (currentIndex + 1) % bannerContents.length;
    showBanner(nextIndex);
    updateProgressBar();
}

// Initial setup
showBanner(currentIndex);
updateProgressBar();

// Cambia de banner cada 10 segundos (10000 ms)
setInterval(nextBanner, 10000);




