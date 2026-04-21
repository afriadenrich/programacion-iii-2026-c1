// #region OBTENERR ELEMENTOS

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("login");
const mensajeEl = document.getElementById("mensaje");

// #endregion

// #region DEFINIR FUNCIONES

/**
 * @param {string} email
 * @returns {HTMLParagraphElement|null} error
 */
function validarEmail(email) {
  if (!email.includes("@") || email.length < 3) {
    const p = document.createElement("p");

    p.className = "error negrita";
    p.textContent = "Email no válido";
    p.id = "emailError";

    return p;
  }

  return null;
}

/**
 * @param {string} pass
 * @returns {HTMLParagraphElement|null} error
 */
function validarPass(pass) {
  if (pass.length < 8) {
    const p = document.createElement("p");
    // p.className = "error negrita";
    p.classList.add("error", "negrita");
    p.textContent = "Contraseña muy corta";
    p.id = "passError";

    return p;
  }

  return null;
}

// #endregion

// #region ASIGNAR EVENTOS

loginBtn.onclick = (evento) => {
  evento.preventDefault();

  const email = emailInput.value;
  const pass = passwordInput.value;

  const jsonGuardado = localStorage.getItem("usuario");

  if (jsonGuardado) {
    const usuarioRegistrado = JSON.parse(jsonGuardado);

    if (
      usuarioRegistrado.email === email &&
      usuarioRegistrado.password === pass
    ) {
      mensajeEl.textContent = "LOGIN EXITOSO - " + usuarioRegistrado.nombre;
    }
  }
};

// #endregion

// #region CÓDIGO MAL ESCRITO
/*
loginBtn.onclick = (evento) => {
  evento.preventDefault();

  const email = emailInput.value;
  const pass = passwordInput.value;

  //   const emailError = validarEmail(email);
  //   let hayError = false;

  // ESTO FALLA PORQUE PIERDO LA REFERENCIA DE LOS P Y REQUIERO MUCHO CÓDIGO PARA PODER LIMPIARLOS LUEGO DE CADA EJECUCIÓN. DEBERÍA ENCONTRAR UNA MEJOR FORMA PARA REFERENCIARLOS.
  //   if (emailError) {
  //     hayError = true;
  //     emailInput.insertAdjacentElement("afterend", emailError);
  //   }

  //   const passError = validarPass(pass);
  //   if (passError) {
  //     hayError = true;
  //     passwordInput.insertAdjacentElement("afterend", passError);
  //   }

  //   if (hayError) return;
};*/

// #endregion

// #region Ejemplo extra

const accion = () => {
  console.log("Ejecuta");
};

// #endregion
