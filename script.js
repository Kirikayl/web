// Seleccionar el elemento para la escritura
const textDisplay = document.getElementById("text-display");
const cursor = document.getElementById("cursor");
const animatedGif = document.getElementById("animated-gif");

// Texto a mostrar
const texts = ["Designer", "Coder />"];
let textIndex = 0;
let letterIndex = 0;

// Función para escribir el texto
function type() {
    if (textIndex < texts.length) {
        // Mostrar una letra a la vez
        if (letterIndex < texts[textIndex].length) {
            textDisplay.innerHTML += texts[textIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 200); // Ajusta la velocidad de escritura (200 ms)
        } else {
            // Esperar dos segundos antes de borrar
            setTimeout(() => {
                erase();
            }, 2000);
        }
    }
}

// Función para borrar el texto
function erase() {
    if (letterIndex > 0) {
        // Borrar una letra a la vez
        textDisplay.innerHTML = texts[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100); // Ajusta la velocidad de borrado (100 ms)
    } else {
        // Cambiar al siguiente texto
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0; // Reiniciar al primer texto
        }
        // Reiniciar letterIndex para comenzar con el nuevo texto
        letterIndex = 0; 
        // Esperar medio segundo antes de comenzar a escribir de nuevo
        setTimeout(() => {
            type();
        }, 500);
    }
}

// Iniciar el efecto de escritura
type();

// Preload the next image to avoid flickering
const preloadedImage = new Image();
preloadedImage.src = "IMG/Mobile UI-UX (3).gif";

document.addEventListener("DOMContentLoaded", () => {
    // Cambia la imagen sin parpadeo después de 1 segundo
    setTimeout(() => {
        animatedGif.src = preloadedImage.src; // Cambia a la nueva imagen ya cargada
    }, 1000); // 1000 milisegundos = 1 segundo
});

const nav = document.querySelector("#nav");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("visible");
    menuBtn.classList.toggle("open"); // Cambia entre hamburguesa y cruz
});

// Agregar el manejo del botón Ver más
const verMasBtn = document.querySelector('.btn-ver-mas');

// Función para manejar la animación en móviles
function handleButtonAnimation() {
    // Verifica si es un dispositivo móvil
    if (window.innerWidth <= 768) {
        verMasBtn.classList.toggle('active');
        
        // Remover la clase después de la animación
        setTimeout(() => {
            verMasBtn.classList.remove('active');
        }, 2000); // La animación dura 2 segundos
    }
    
    // Ir a la sección de proyectos con múltiples fallbacks para móviles
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
        try {
            // Intentar scroll suave primero
            proyectosSection.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            // Si falla el scroll suave, usar scroll instantáneo
            console.log('Scroll suave no soportado, usando scroll instantáneo');
            proyectosSection.scrollIntoView();
        }
    } else {
        // Fallback: hacer scroll hacia abajo si no encuentra la sección
        try {
            window.scrollBy({ top: 600, left: 0, behavior: 'smooth' });
        } catch (error) {
            window.scrollBy(0, 600);
        }
    }
}

// Agregar el evento click al botón
verMasBtn.addEventListener('click', handleButtonAnimation);
