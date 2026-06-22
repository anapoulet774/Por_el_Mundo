function actualizarReloj() {
    const elementoReloj = document.getElementById('reloj-dinamico');
    if (elementoReloj) {
        const ahora = new Date();
        const horaString = ahora.toLocaleTimeString('es-AR');
        elementoReloj.textContent = "Hora actual: " + horaString;
    }
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

const formIngreso = document.getElementById('form-ingreso');
const inputEmail = document.getElementById('usuario-email');
const mensajeErrorEmail = document.getElementById('error-email');

formIngreso.addEventListener('submit', function(e) {
    e.preventDefault();

    let esValido = true;
 
    mensajeErrorEmail.textContent = '';
    inputEmail.style.borderColor = '#499C70';

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (inputEmail.value.trim() === '') {
        mensajeErrorEmail.textContent = 'El campo email no puede estar vacío.';
        inputEmail.style.borderColor = 'red';
        esValido = false;
    } else if (!regexEmail.test(inputEmail.value.trim())) {
        mensajeErrorEmail.textContent = 'Ingrese un email válido.';
        inputEmail.style.borderColor = 'red';
        esValido = false;
    }

    if (esValido) {
        console.log("Validación exitosa, redirigiendo...");

        localStorage.setItem("logueado", "true");
        localStorage.setItem("emailUsuario", inputEmail.value.trim());

        window.location.href = "index.html";
    } else {
        console.log("Validación fallida, corregir datos.");
    }
});