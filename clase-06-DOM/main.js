// DOM - Document Object Model // document
// document -> es una variable - representa TODO lo que se puede escrbir y está (o no) escrito en el HTML y CSS.

// console.log({ document });

// document.location.reload();
const h1s = document.getElementsByTagName("h1");
console.log(h1s[0].textContent);

h1s[0].textContent = "Primer título";
// h1s[0].style.color = "#f00";
// h1s[0].style.backgroundColor = "#000";
h1s[0].className = "parrafo";
h1s[0].id = "primer-titulo";

const claseParrafos = document.getElementsByClassName("parrafo");

console.log(claseParrafos);

const tarea = document.getElementById("tarea");

console.log({ tarea });

// Crear elementos e insertarlos en el HTML desde 0

const nuevoParrafo = document.createElement("p"); // <p></p>
const nuevoParrafo2 = document.createElement("p"); // <p></p>
nuevoParrafo.textContent = "Nuevo parrafo"; // <p>Nuevo parrafo</p>
nuevoParrafo2.textContent = "Nuevo parrafo"; // <p>Nuevo parrafo</p>

const main = document.getElementById("main");

// main.appendChild(nuevoParrafo);
// main.append(nuevoParrafo, nuevoParrafo2); Permite mandar texto plano o varios nodos juntos.

main.insertAdjacentElement("afterend", nuevoParrafo);

// Tomar un dato de un input

function registrarse() {
  /**
   * @type {HTMLInputElement}
   */
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");

  console.log(usernameElement.value, passwordElement.value);
}

/**
 * @type {HTMLButtonElement}
 */
const registrarseButton = document.getElementById("registrarse");

registrarseButton.onclick = () => {
  const usernameElement = document.getElementById("username");
  const passwordElement = document.getElementById("password");

  console.log(usernameElement.value, passwordElement.value);
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";
};

// jsDOCS
