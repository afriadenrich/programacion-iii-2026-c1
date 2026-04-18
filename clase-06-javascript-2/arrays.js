console.log("ARRAYS =========");

const listadoNombres = ["Agus", "Nicco", "Etc", "Otro"];
const listadoNumeros = [6, 1, 6, 8, 9.9, 11, 2, 99];
const listadoObjetos = [
  { nombre: "Agus", nota: 10 },
  { nombre: "Nico", nota: 11 },
  { nombre: "ustedes", nota: 3 },
  { nombre: "alumno que faltó" },
];
const listadoQueNoDeberíaPasarEnLaRealidadPeroSonPosibles = [
  "A",
  1325,
  {},
  [[[]]],
  () => console.log("Hola"),
  123,
  123,
  "asdsad",
];

console.log(listadoQueNoDeberíaPasarEnLaRealidadPeroSonPosibles);

// usuario, setUsuario
// numero, setNumero
// const [variable, setter] = useState(); // return [variable, setter]

// 4* formas de iterar arrays.
function sumarConFor(listado) {
  let contador = 0;

  for (let i = 0; i < listado.length; i++) {
    contador += listado[i];
  }

  console.log(contador);
}

function sumarConForOf(listado) {
  let contador = 0;

  // "Por cada elemento de este array"
  //   for (elemento of array){}
  for (numero of listado) {
    contador += numero;
  }

  console.log(contador);
}

function sumarConForEach(listado) {
  let contador = 0;

  // "Por cada elemento del array, hacer lo que diga la callback enviada. Dicha callback recibe el elemento, su indice y algo más"

  //   function callback(value, index, array) {
  //     contador += value;
  //   }
  //   listadoNumeros.forEach(callback);

  const retornoForEach = listado.forEach((num) => {
    contador += num;
  });

  console.log(contador);
  console.log(retornoForEach);
}

function sumarConMap(listado) {
  let contador = 0;

  const retorno = listado.map((value) => {
    contador += value;
    return value;
  });

  console.log(contador);
  console.log(retorno);
}

sumarConFor(listadoNumeros);
sumarConForOf(listadoNumeros);
sumarConForEach(listadoNumeros);
sumarConMap(listadoNumeros);

const filtrado = listadoNumeros.filter((num) => num > 8);
console.log(filtrado);

let filtrado1 = [];

for (num of listadoNumeros) {
  if (num > 8) {
    filtrado1.push(num);
  }
}

console.log(filtrado1);
console.log(listadoNumeros);

function mostrar(cadena) {
  console.log(cadena);
}

const listadoNumeros2 = [6, 1, 6, 8, 9.9, 11, 2, 99];

mostrar(listadoNumeros2.length);
mostrar(listadoNumeros2.indexOf(9.9));
mostrar(listadoNumeros2.indexOf(99));
mostrar(listadoNumeros2[4]);
mostrar(listadoNumeros2.push(50, 52, 59));
mostrar(listadoNumeros2);

const ultimoElementoDelArray = listadoNumeros2.pop();
mostrar(ultimoElementoDelArray);
mostrar(listadoNumeros2);

// LIFO last in first out -> El ultimo que sale es el primero en salir

mostrar(listadoNumeros2.splice(4, 2));
mostrar(listadoNumeros2);
mostrar(listadoNumeros2.join("-"));
mostrar("1234".split(""));

listadoNumeros2.sort((a, b) => b - a);

console.log(listadoNumeros2);
