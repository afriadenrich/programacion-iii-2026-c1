// crear variables

// variable = valor // python
// int variable = 12 // java

let nombre = "Agus";

nombre = "Nico";

nombre = 88;

nombre = "Otra cosa";

// CONSTANTE NO se puede modificar
const apellido = "Friadenrich";

// apellido = "otra cosa";

// Recibe parámetros infinitos
console.log(nombre, apellido, 88, "algo", {}, [], "otra cosa");

// ¿Qué tipos de datos tiene javascript?

// string -> cadenas de texto
// number -> CUALQUIER NUMERO: 88, 88.5, 88.123123123, 91183813212839821, etc.
//  - - - -> NO HAY DISTINCIÓN POR DEFECTO ENTRE ints Y floats
// boolean -> true o false
// object / clase -> { } -> clave/valor para distinas propiedades
// null -> nulo
// undefined -> sin definir
// Arrays -> []
// functions -> function nombre(parametros) / (parametros) => {}

let persona = {
  nombre: "Agus",
  apellido: "F",
  edad: 51,
  etc: "etc.",
  hablarMucho: function hablarMucho() {
    console.log("Dar más clases");
  },
};

persona.hablarMucho();

class Perosna {
  nombre;
  apellido;
  edad;
  etc;

  hablarMucho() {
    console.log("Dar clases");
  }
}

let otraPersona = new Perosna();

otraPersona.nombre = "Agus";
otraPersona.hablarMucho();

function nombreDeFuncion(parametro1, parametro2) {
  console.log(parametro1 + parametro2);
}

nombreDeFuncion(55, 55);

// null y undefined

let edad;

console.log(edad);
console.log(otraPersona.edad);

edad = null;
console.log(edad);

// strings

let nombreYApellido = nombre + " @;''" + apellido + 88;

console.log(nombreYApellido);

// numbers

let numero = 8;

console.log(numero * 2);
console.log(numero / 2);
console.log(numero + 2);
console.log(numero - 2);
console.log(numero % 2);
console.log(numero ** 2);
console.log(numero ** 3);

console.log(Math.sqrt(64));

// comparaciones

let cadena = "string";

console.log("===== COMPARACIONES =====");
console.log("===== POR VALOR =====");
// Comprar por valor o comparar por valor Y tipo
// por valor -> ==, !=,
console.log(cadena == "string");
console.log(88 == "string");
console.log(0 == false);
console.log(1 == true);
console.log("Unacadena" == true);
console.log(88 == true);

// 1011000 != 1
// Tipo de dato importa
// ===, !==,
// >=, <=, <, > -> SOlo para numeros, siempre improta el tipo de dato.
console.log("===== POR TIPO =====");
console.log(cadena === "string");
console.log(88 === "string");
console.log(0 === false);
console.log(1 === true);
console.log("Unacadena" === true);
console.log(88 === true);

console.log("OTRO EJEMPLO");
console.log(undefined == null);
console.log(undefined === null);

let variableVacia;

console.log(variableVacia >= null);

// CONDICIONALES E ITERACIONES

console.log("===== CONDICIONALES =====");

console.log("Hola mundo" == true);
let hola = "";

// Si el if recibe solo UN valor y no una comparación, el if se pregunta: ¿NO es el valor vacio, nulo, 0, "",?
// si le paso  {} o [] da true.
if ({} && []) {
  console.log("Hacer algo");
} else {
  console.log("No lo va a hacer");
}

console.log("===== ITERACIONES =====");

for (let i = 0; i <= 99; i++) {
  console.log(i);
}

let j = 0;
do {
  j++;
  console.log("HOLA");
} while (j < 10);

switch (hola) {
  case "Hola mundo":
    console.log("HOLA MUNDO");
    break;
  case "":
    console.log("Está vacío");
    break;
  default:
    console.log("Default");
}
