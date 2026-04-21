// 1. Cuando arranque la app, quiero saber si el usuario guardó un modo preferido.
// 2. Si hay modo preferido, aplicarlo, sinó, aplicar modo por defecto.
// 3. Cuando se aprete cambiar de modo, que cambie de modo.

// CONSTANTES
const CLAVE_MODO = "modo";
const CLARO = "claro";
const OSCURO = "oscuro";
const SATURADO = "saturado";

// VARIABLES

const claroBTN = document.getElementById(CLARO);
const oscuroBTN = document.getElementById(OSCURO);
const saturadoBTN = document.getElementById(SATURADO);

// FUNCIONES

function cambiarModo(modo) {
  switch (modo) {
    case CLARO:
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      localStorage.setItem(CLAVE_MODO, CLARO);
      break;
    case OSCURO:
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#000";
      localStorage.setItem(CLAVE_MODO, OSCURO);
      break;

    case SATURADO:
      document.body.style.color = "#000";
      document.body.style.backgroundColor = "#F00";
      localStorage.setItem(CLAVE_MODO, SATURADO);
      break;
  }
}

// EVENTOS

claroBTN.addEventListener("click", (ev) => {
  cambiarModo(CLARO);
});

oscuroBTN.addEventListener("click", (ev) => {
  cambiarModo(OSCURO);
});
saturadoBTN.addEventListener("click", (ev) => {
  cambiarModo(SATURADO);
});

saturadoBTN.addEventListener("drag", (ev) => {
  console.log("DRAG");
});

document.addEventListener("DOMContentLoaded", (ev) => {
  cambiarModo(localStorage.getItem(CLAVE_MODO));
});

document.addEventListener("keydown", (ev) => {
  console.log(ev.key);

  if (ev.key === "Enter" && ev.ctrlKey) {
    cambiarModo(OSCURO);
  }
});

// remover eventos
const evClick = (ev) => {
  console.log("CLICK x2");
};

saturadoBTN.addEventListener("click", evClick);
saturadoBTN.removeEventListener("click", evClick);

const inputRef = document.getElementById("input");

// ACCIONES BILATERALES REQUIEREN EVENTOS BILATERALES

inputRef.addEventListener("focus", (ev) => {
  inputRef.style.color = "#f00";
});

inputRef.addEventListener("blur", (ev) => {
  inputRef.style.color = "#0F0";
});
