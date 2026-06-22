const btnIngreso = document.getElementById("btnIngreso");
const logueado = localStorage.getItem("logueado");
const dniUsuario = localStorage.getItem("dniUsuario");

if (btnIngreso && logueado === "true") {
    btnIngreso.textContent = "Perfil";
    btnIngreso.href = "perfil.html"; // o ingreso.html si todavía no tenés perfil
}

const formBuscador = document.getElementById("formBuscador");
const inputDestino = document.getElementById("inputDestino");

const cardPatagonia = document.getElementById("cardPatagonia");
const cardEstocolmo = document.getElementById("cardEstocolmo");
const cardAuroras = document.getElementById("cardAuroras");

function mostrarTodasLasCards() {
    cardPatagonia.style.display = "block";
    cardEstocolmo.style.display = "block";
    cardAuroras.style.display = "block";
}

function ocultarTodasLasCards() {
    cardPatagonia.style.display = "none";
    cardEstocolmo.style.display = "none";
    cardAuroras.style.display = "none";
}

formBuscador.addEventListener("submit", function(e) {
    e.preventDefault();

    const busqueda = inputDestino.value.trim().toLowerCase();

    if (busqueda === "") {
        mostrarTodasLasCards();
        return;
    }

    ocultarTodasLasCards();

    if (
        busqueda.includes("patagonia") ||
        busqueda.includes("bosque") ||
        busqueda.includes("lagos")
    ) {
        cardPatagonia.style.display = "block";
    } 
    else if (
        busqueda.includes("estocolmo") ||
        busqueda.includes("arquitectura") ||
        busqueda.includes("escandinavo") ||
        busqueda.includes("escandinavia")
    ) {
        cardEstocolmo.style.display = "block";
    } 
    else if (
        busqueda.includes("auroras") ||
        busqueda.includes("aurora") ||
        busqueda.includes("boreales") ||
        busqueda.includes("nieve")
    ) {
        cardAuroras.style.display = "block";
    } 
    else {
        alert("No encontramos resultados para esa búsqueda.");
        mostrarTodasLasCards();
    }
});