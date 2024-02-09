var negativeResponses = [
    "Abi, di que sí",
    "Abi, piénsalo bien",
    "Abi, si sigues diciendo que no me mato",
    "Plase, plase, let me get what I want",
    "Plase, plase",
    "Dale wooki pookie por favor, tú sabes que somos uno, acepta",
    "Algo de ti, solo sé que algo de ti hizo que mi corazón se enamorara al fin, algo de ti algo de ti, solo sé que algo de ti se quedó conmigo y vive siempre en mí",
    "Dale acepta que me corto de la tristeza",
    "Bueno, ya dejo de molestar... Mentira, deci que sí, daleee",
    "Vamos cielito, di que sí",
    "Ya me rompes el corazón, dale caramelito"
];

var positiveResponse = "Gracias wookie pookie, te amo";

var currentNegativeResponseIndex = 0;

function respond(answer) {
    var messagesElement = document.getElementById("messages");
    var buttonYes = document.getElementById("yes");

    if (answer === 'no') {
        if (currentNegativeResponseIndex >= negativeResponses.length) {
            currentNegativeResponseIndex = 0;
        }
        messagesElement.textContent = negativeResponses[currentNegativeResponseIndex];
        currentNegativeResponseIndex++;

        // Aumentar el tamaño del botón 'Sí'
        var computedStyle = window.getComputedStyle(buttonYes);
        var fontSize = parseInt(computedStyle.fontSize);
        buttonYes.style.fontSize = (fontSize * 8) + 'px';
    } else if (answer === 'yes') {
        messagesElement.textContent = positiveResponse;

        // Cambiar el gif
        var gifElement = document.getElementById("gif");
        gifElement.src = "tuo.gif";

        // Ocultar los botones
        var optionsElement = document.getElementById("options");
        optionsElement.style.display = "none";
    }
}
