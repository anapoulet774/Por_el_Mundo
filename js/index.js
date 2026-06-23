const btnIngreso = document.getElementById("btnIngreso");
const logueado = localStorage.getItem("logueado");
const dniUsuario = localStorage.getItem("dniUsuario");

if (btnIngreso && logueado === "true") {
    btnIngreso.textContent = "Perfil";
    btnIngreso.href = "perfil.html"; 
}


const carruseles = document.querySelectorAll("[data-carrusel]");

    carruseles.forEach((carrusel) => {
        const imagenes = carrusel.querySelectorAll(".carrusel-img");
        const puntos = carrusel.querySelectorAll(".punto");
        const btnPrev = carrusel.querySelector(".carrusel-btn.prev");
        const btnNext = carrusel.querySelector(".carrusel-btn.next");
        
        let indiceActual = 0;

        function actualizarCarrusel(nuevoIndice) {
            if (nuevoIndice >= imagenes.length) {
                indiceActual = 0;
            } else if (nuevoIndice < 0) {
                indiceActual = imagenes.length - 1;
            } else {
                indiceActual = nuevoIndice;
            }

            imagenes.forEach(img => img.classList.remove("activa"));
            puntos.forEach(punto => punto.classList.remove("activo"));

            imagenes[indiceActual].classList.add("activa");
            if (puntos[indiceActual]) {
                puntos[indiceActual].classList.add("activo");
            }
        }
        btnNext.addEventListener("click", () => {
            actualizarCarrusel(indiceActual + 1);
        });

        btnPrev.addEventListener("click", () => {
            actualizarCarrusel(indiceActual - 1);
        });
        puntos.forEach((punto, index) => {
            punto.addEventListener("click", () => {
                actualizarCarrusel(index);
            });
        });
        setInterval(() => {
        actualizarCarrusel(indiceActual + 1);
        }, 3000);
    });

const formBuscador = document.getElementById("formBuscador");
const inputDestino = document.getElementById("inputDestino");

const cardPatagonia = document.getElementById("cardPatagonia");
const cardEstocolmo = document.getElementById("cardEstocolmo");
const cardAuroras = document.getElementById("cardAuroras");
const cardCaribe = document.getElementById("cardCaribe");
const cardEgipto = document.getElementById("cardEgipto");
const cardAomori = document.getElementById("cardAomori");


function mostrarCardsIniciales() {
    cardPatagonia.style.display = "block";
    cardEstocolmo.style.display = "block";
    cardAuroras.style.display = "block";

    cardCaribe.style.display = "none";
    cardEgipto.style.display = "none";
    cardAomori.style.display = "none";
}

function ocultarTodasLasCards() {
    cardPatagonia.style.display = "none";
    cardEstocolmo.style.display = "none";
    cardAuroras.style.display = "none";
    cardCaribe.style.display = "none";
    cardEgipto.style.display = "none";
    cardAomori.style.display = "none";
}

formBuscador.addEventListener("submit", function(e) {
    e.preventDefault();

    const busqueda = inputDestino.value.trim().toLowerCase();

    if (busqueda === "") {
        mostrarCardsIniciales();
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
        busqueda.includes("boreales")
    ) {
        cardAuroras.style.display = "block";
    } 
    else if (
        busqueda.includes("egipto") ||
        busqueda.includes("arena") ||
        busqueda.includes("piramides") ||
        busqueda.includes("pirámides") ||
        busqueda.includes("nilo")
    ) {
        cardEgipto.style.display = "block";
    }
    else if (
        busqueda.includes("caribe") ||
        busqueda.includes("playa") ||
        busqueda.includes("mar")
    ) {
        cardCaribe.style.display = "block";
    }
    else if (
        busqueda.includes("aomori") ||
        busqueda.includes("japon") ||
        busqueda.includes("japón") ||
        busqueda.includes("asia") ||
        busqueda.includes("nieve")
    ) {
        cardAomori.style.display = "block";
    }
    else {
        alert("No encontramos resultados para esa búsqueda.");
        mostrarCardsIniciales();
    }
});