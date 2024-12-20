// Declarar un array con 20 colores (los colores pueden repetirse)
const balloonColors = [
    'red', 'blue', 'green', 'yellow', 'pink',
    'orange', 'purple', 'cyan', 'lime', 'teal',
    'red', 'blue', 'green', 'yellow', 'pink',
    'orange', 'purple', 'cyan', 'lime', 'teal'
];

// Función para renderizar globos en el DOM
function renderBalloons() {
    const balloonContainer = document.querySelector('#balloon-map');
    const balloonCount = document.querySelector('#balloon-count');
    balloonContainer.innerHTML = ''; // Limpiar contenido anterior

    // Generar HTML para cada globo
    let activeBalloons = 0;
    let rows = Math.ceil(Math.sqrt(balloonColors.length));
    let columns = Math.ceil(balloonColors.length / rows);

    balloonColors.forEach((color, index) => {
        if (color !== null) { // Verificar que el globo no haya sido "reventado"
            activeBalloons++;
            const balloonHTML = `<div 
          class="balloon active" 
          style="background-color: ${color}; grid-row: ${Math.floor(index / columns) + 1}; grid-column: ${(index % columns) + 1};" 
          onclick="popBalloon(${index})">
        </div>`;
            balloonContainer.innerHTML += balloonHTML;
        }
    });

    // Actualizar contador de globos
    balloonCount.textContent = activeBalloons;
}

// Función para "reventar" un globo
function popBalloon(index) {
    balloonColors[index] = null; // Cambiar el valor del globo a null
    renderBalloons(); // Volver a renderizar los globos

    // Verificar si todos los globos han sido "reventados"
    if (balloonColors.every(color => color === null)) {
        setTimeout(() => {
            resetGame(); // Reiniciar el juego
        }, 500); // Esperar medio segundo antes de reiniciar
    }
}

// Función para reiniciar el juego
function resetGame() {
    // Restaurar colores originales
    for (let i = 0; i < balloonColors.length; i++) {
        balloonColors[i] = [
            'red', 'blue', 'green', 'yellow', 'pink',
            'orange', 'purple', 'cyan', 'lime', 'teal',
            'red', 'blue', 'green', 'yellow', 'pink',
            'orange', 'purple', 'cyan', 'lime', 'teal'
        ][i];
    }
    renderBalloons();
}

// Ejecutar cuando la ventana cargue
window.onload = () => {
    renderBalloons();
};