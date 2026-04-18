console.log("FUNCIONES =========");

function accion1(param1, param2) {
  console.log(param1 + param2);
}

accion1(1, 2);

/* Abreviación */
const accion2 = function (param1, param2) {
  console.log(param1 + param2);
};

accion2(2, 3);

console.log(typeof accion1);
console.log(typeof accion2);

/* arrow functions / lambda  => */
const accion3 = (param1, param2) => {
  console.log(param1 + param2);
};

accion3(5, 6);

const accion4 = (param1, param2) => console.log(param1 + param2);

accion4(9, 11);

// Si no hay llaves, solo puede ser una linea de funcion. Y esa linea se asume como retorno

const accion5 = (param1) => param1 + 55;

console.log(accion5(99));

// CALLBACKS -> Devolver la llamada

// Esta funcion: recive un parametro de tipo function, y llama a esa function.
function accionGenerica(accion, numero) {
  return accion(numero);
}

function duplicar(numero) {
  return numero * 2;
}

// function alCuadrado(numero) {
//   return numero ** 2;
// }

const alCuadrado = (numero) => numero ** 2;

const respuesta1 = accionGenerica(alCuadrado, 5);
const respuesta2 = accionGenerica(alCuadrado, 6);
const respuesta3 = accionGenerica(duplicar, 6);
const respuesta4 = accionGenerica((numero) => numero ** 3, 3);
const respuesta5 = accionGenerica((numero) => numero ** 2, 6);

console.log(respuesta1);
console.log(respuesta2);
console.log(respuesta3);
console.log(respuesta4);
console.log(respuesta5);
