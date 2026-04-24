// Asincronismo -> No es sincrónico

// Código secuencial interrumpido por una acción especifica que demora tiempo. Una búsqueda de internet, una consulta a una base de datos, una consulta a una api, un temporizador.

setTimeout(() => {
  console.log("Esto debería ejecutarse luego de 5000 milisegundos");
}, 5000);

setInterval(() => {
  console.log("Esto debería ejecutarse luego de 5000 milisegundos");
}, 5000);

console.log("Código después de la ejecución del timeout");

// Código que genere peticiones asincrónicas / asíncronas.
// Código que responda a las respuestas de los asincronísmos cuando sea el momento.

// PETICIÓN / Consulta
// Protocolo HTTP / HTTPS
// Métodos -> GET - POST - PUT/PATCH - DELETE - OPTIONS
// Estados -> 200 - 201 - 500 - 404 - 403

// Pido algo a una url -> me devuelve lo que pedí

// FRONTEND -> PETICIÓN - internet -> SERVIDOR PROCESA - internet -> DA RESPUESTA
// fetch("https://api.github.com/users/afriadenrich");

const promesa = fetch("https://avatars.githubusercontent.com/u/1024025?v=4", {
  method: "GET",
});

console.log(promesa);

// setTimeout(() => {
//   console.log(promesa);
// }, 20);

// FORMA 1: PROMESAS .THEN()

// Promesa, cuando termines de traer todo, hacé esto...
promesa.then((respuesta) => {
  console.log("Respuesta", respuesta);

  const textoPromise = respuesta.text();

  textoPromise.then((respuesta) => {
    console.log(respuesta);
  });
});

const promesaApiJsoN = fetch("https://api.github.com/users/afriadenrich");

promesaApiJsoN.then((response) => {
  const jsonPromise = response.json();

  jsonPromise.then((valor) => {
    console.log(valor.followers);
  });
});

fetch("https://api.github.com/users/afriadenrich").then((response) => {
  response.json().then((valor) => {
    console.log(valor.login);
  });
});

console.log("AASWDASDAS");

// FORMA 2: ASYNC Y AWAIT (esperar)

async function traerGithub(nombre) {
  const respuesta = await fetch("https://api.github.com/users/" + nombre);
  const json = await respuesta.json();

  console.log(json.login);
  console.log(
    "No se va a ejecutar hasta que no termine la promesa marcada con await"
  );
}

// const traerGithub = async (nombre) => {

// }
traerGithub("afriadenrich");

console.log("AASWDASDAS");
