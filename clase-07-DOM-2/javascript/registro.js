/* 
JS puede cambiar todos los elementos HTML de una página
JS puede cambiar todos los atributos HTML de una página
JS puede cambiar todos los estilos CSS de una página
JS puede cambiar eliminar los elementos HTML de una página
JS puede cambiar eliminar los atributos HTML de una página
JS puede reaccionar a todos los eventos HTML que existan
JS puede crear respuestas a todos los eventos HTML que existan
*/

/*
    Lógica de un registro

    1. El usuario completa el formulario.  ☑
    2. El usuario presione registrarse.   ☑
    3. JS Capturar el evento del botón presionado.  ☑
    4. Evitar que se recargue la página (preventDefault).    ☑
    5. Tomar los datos de todos los inputs.   ☑
    5.1. Hacer validaciones ☑
    6. Voy a guardar el usuario en el navegador del cliente (porque no tenemos servidor TODAVIA).
*/

// Evento onChange -> detecta cambios en un elemento

/* OBTENER REFERENCIAS */

/**
 * Anotamos tipos siempre en la asignación.
 * @type {HTMLButtonElement}
 */
const registroBtn = document.querySelector("form > #registro");
// const registroBtn = document.getElementById("registro");

/**
 * @type {HTMLInputElement}
 */
const nombreInput = document.querySelector("#nombre");

/**
 * @type {HTMLInputElement}
 */
const fechaNacimientoInput = document.querySelector("#fechaNacimiento");

/**
 * @type {HTMLInputElement}
 */
const emailInput = document.querySelector("#email");

/**
 * @type {HTMLInputElement}
 */
const passwordInput = document.querySelector("#password");

const mensajeP = document.getElementById("mensaje");

/* DEFINIR ACCIONES Y EVENTOS */

registroBtn.addEventListener("click", (datosDelEvento) => {
  // EVITAR EL COMPORTAMIENTO POR DEFECTO -> NO RECARGAR LA PÁGINA.
  datosDelEvento.preventDefault();
  mensajeP.textContent = "";

  // Tomé los datos
  const nombre = nombreInput.value;
  const fechaNacimiento = fechaNacimientoInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Valido los datos
  if (password.length < 8) {
    mensajeP.textContent = "La contraseña es muy corta";
    return;
  }

  if (!email.includes("@")) {
    mensajeP.textContent = "El email no es válido";
    return;
  }

  mensajeP.textContent = "Registro exitoso!";

  // Guardar los datos del usuario. (JSON)
  const usuario = {
    nombre: nombre,
    fechaNacimiento: fechaNacimiento,
    email: email,
    password: password,
  };

  //   localStorage.setItem("usuario", usuario); Necesito pasarlo a string

  // const jsonDeMiUsuario = `{ "nombre": ${nombre}, "fechaNacimiento": ${fechaNacimiento}, "email": ${email}, "password": ${password} }`; ¿Por qué escribirlo a mano?

  const jsonDeMiUsuario = JSON.stringify(usuario);

  localStorage.setItem("usuario", jsonDeMiUsuario);

  // Guardar -> Convertir a string con JSON.stringify -> Guardar con localstorage.setItem
  // Traer -> Traer con localstorage.getItem -> Convertir a JS con JSON.parse
});

// LOCALSTORAGE -> Se guarda en la pestaña Aplicación / Application

localStorage.setItem("modo-de-preferencia", "claro");

// EJEMPLOS DE TIPOS DE GUARDADOS -> No vienen al caso ^^

// Localstorage -> guardado en la pc del cliente

// Caché del cliente -> Mi pc guarda cosas que llegan seguido asi no las pide de vuelta (imagenes, etc).

// Caché del servidor -> Si me piden x cosa, con x datos muy seguido, me guardo la respuesta para no tener que hace la búsqueda de vuelta.

// Cookies -> se guardan en el servidor -> Al cliente solo se le da una clave para encontrarlas -> tienen métodos de seguridad. Tienen expiración.
