function actualizarTiempo() {
    const ahora = new Date();
    
    
    const horaAformateada = ahora.toLocaleTimeString('es-AR');
    document.getElementById('reloj-dinamico').textContent = horaAformateada;

    
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('fecha-reporte').textContent = ahora.toLocaleDateString('es-AR', opcionesFecha);
}


setInterval(actualizarTiempo, 1000);
actualizarTiempo();


function validarNumeros(evento) {
    const input = evento.target;
    input.value = input.value.replace(/\D/g, '');

    validarCampoCuit();
}

function mostrarError(idError, mensaje) {
    const error = document.getElementById(idError);
    error.textContent = mensaje;
    error.style.display = 'block';
}

function ocultarError(idError) {
    const error = document.getElementById(idError);
    error.textContent = '';
    error.style.display = 'none';
}

function validarCampoNombre() {
    const nombre = document.getElementById('nombre').value.trim();

    if (nombre === '') {
        mostrarError('nombre-error', 'El nombre no puede estar vacío.');
        return false;
    }

    ocultarError('nombre-error');
    return true;
}

function validarCampoApellido() {
    const apellido = document.getElementById('apellido').value.trim();

    if (apellido === '') {
        mostrarError('apellido-error', 'El apellido no puede estar vacío.');
        return false;
    }

    ocultarError('apellido-error');
    return true;
}

function validarCampoCuit() {
    const cuit = document.getElementById('cuit').value.trim();

    if (cuit === '') {
        mostrarError('cuit-error', 'El CUIT no puede estar vacío.');
        return false;
    }

    if (!/^\d+$/.test(cuit)) {
        mostrarError('cuit-error', 'El CUIT debe contener solo números.');
        return false;
    }

    if (cuit.length !== 11) {
        mostrarError('cuit-error', 'El CUIT debe contener exactamente 11 números.');
        return false;
    }

    ocultarError('cuit-error');
    return true;
}

function validarCampoCorreo() {
    const correo = document.getElementById('correo').value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === '') {
        mostrarError('correo-error', 'El correo electrónico no puede estar vacío.');
        return false;
    }

    if (!regexEmail.test(correo)) {
        mostrarError('correo-error', 'Ingrese un correo electrónico válido.');
        return false;
    }

    ocultarError('correo-error');
    return true;
}

function validarFormulario(evento) {
    evento.preventDefault();

    const nombreValido = validarCampoNombre();
    const apellidoValido = validarCampoApellido();
    const cuitValido = validarCampoCuit();
    const correoValido = validarCampoCorreo();

    if (nombreValido && apellidoValido && cuitValido && correoValido) {
        alert("¡Se realizó la reserva!");
        evento.target.reset();
        window.location.href = "index.html";
    }
}


function calcularPaquete() {
    const destinoSelect = document.getElementById('destino');
    const precioBase = parseFloat(destinoSelect.value);
    const dias = parseInt(document.getElementById('dias').value) || 1;
    
    const resultadoBox = document.getElementById('resultado-cotizacion');

    if (precioBase > 0) {
        const total = precioBase*dias;
        resultadoBox.textContent = `Total Estimado: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
        resultadoBox.classList.add('destacado');
    } else {
        resultadoBox.textContent = "Total Estimado: $0.00";
        resultadoBox.classList.remove('destacado');
    }
}