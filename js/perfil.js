const logoutBtn = document.getElementById("Logout");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logueado");
  localStorage.removeItem("usuario");
  window.location.href = "index.html";
});


const nombreUsuario = document.getElementById("nombreUsuario");
const emailUsuario = document.getElementById("emailUsuario");
const telefonoUsuario = document.getElementById("telefonoUsuario");

const btnEditarPerfil = document.getElementById("btnEditarPerfil");
const formEditarPerfil = document.getElementById("formEditarPerfil");
const cancelarEdicion = document.getElementById("cancelarEdicion");


const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputTelefono = document.getElementById("inputTelefono");


const datosPorDefecto = {
    nombre: "Ana Poulet",
    email: "anapoulet@gmail.com",
    telefono: "2644596324"
};


function cargarPerfil() {
    const nombreGuardado = localStorage.getItem("perfilNombre") || datosPorDefecto.nombre;
    const emailGuardado = localStorage.getItem("perfilEmail") || datosPorDefecto.email;
    const telefonoGuardado = localStorage.getItem("perfilTelefono") || datosPorDefecto.telefono;

    nombreUsuario.textContent = nombreGuardado;
    emailUsuario.textContent = emailGuardado;
    telefonoUsuario.textContent = telefonoGuardado;
}

btnEditarPerfil.addEventListener("click", () => {
    inputNombre.value = nombreUsuario.textContent;
    inputEmail.value = emailUsuario.textContent;
    inputTelefono.value = telefonoUsuario.textContent;

    formEditarPerfil.style.display = "flex";
    formEditarPerfil.style.flexDirection = "column";

    btnEditarPerfil.style.display = "none";
});


cancelarEdicion.addEventListener("click", () => {
    formEditarPerfil.style.display = "none";
    btnEditarPerfil.style.display = "inline-block";
});


formEditarPerfil.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevoNombre = inputNombre.value.trim();
    const nuevoEmail = inputEmail.value.trim();
    const nuevoTelefono = inputTelefono.value.trim();

    if (nuevoNombre === "" || nuevoEmail === "" || nuevoTelefono === "") {
        alert("Por favor completá todos los campos.");
        return;
    }

  
    localStorage.setItem("perfilNombre", nuevoNombre);
    localStorage.setItem("perfilEmail", nuevoEmail);
    localStorage.setItem("perfilTelefono", nuevoTelefono);

   
    nombreUsuario.textContent = nuevoNombre;
    emailUsuario.textContent = nuevoEmail;
    telefonoUsuario.textContent = nuevoTelefono;

   
    formEditarPerfil.style.display = "none";
    btnEditarPerfil.style.display = "inline-block";

    alert("Perfil actualizado correctamente.");
});

cargarPerfil();