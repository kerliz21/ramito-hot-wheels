const boton = document.getElementById("boton");

const sorpresa = document.getElementById("sorpresa");

boton.addEventListener("click", function () {

    sorpresa.textContent =
        "🏎️💐 ¡Un ramito de carritos para alguien muy especial! ❤️✨";

    boton.textContent =
        "💖 ¡Te quiero mucho! 💖";

});