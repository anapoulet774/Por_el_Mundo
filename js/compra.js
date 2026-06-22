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
    
    const errorMsg = document.getElementById('cuit-error');
    if (input.value.length > 0 && input.value.length < 11) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }
}


function validarFormulario(evento) {
    evento.preventDefault();
    const cuit = document.getElementById('cuit').value;

    if (cuit.length !== 11) {
        alert("Atención: El CUIT debe contener exactamente 11 dígitos numéricos.");
        return;
    }

    alert("¡Se Realizó la reserva!");
    window.location.href = "index.html";
    evento.target.reset();
}


function calcularPaquete() {
    const destinoSelect = document.getElementById('destino');
    const precioBase = parseFloat(destinoSelect.value);
    const pasajeros = parseInt(document.getElementById('pasajeros').value) || 1;
    
    const resultadoBox = document.getElementById('resultado-cotizacion');

    if (precioBase > 0) {
        const total = precioBase;
        
        resultadoBox.textContent = `Total Estimado: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
        
        // Manipulación dinámica de estilos a través del DOM
        resultadoBox.classList.add('destacado');
    } else {
        resultadoBox.textContent = "Total Estimado: $0.00";
        resultadoBox.classList.remove('destacado');
    }
}