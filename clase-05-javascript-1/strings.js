console.log(" == STRINGS ==");

function mostrar(cadena) {
  console.log(cadena);
}

const resultado = "    HOLA PROGRAMACION III, qué clase...";

// largo de la cadena

mostrar(resultado.length);
// Obtiene una parte de la cadena
mostrar(resultado.slice(6, 12));
// Elimina espacios innecesarios al principio y al final
mostrar(resultado.trim());
// Reemplaza
mostrar(resultado.replace("III", "IV"));
// Lo hace minuscula
mostrar(resultado.toLocaleLowerCase());
// Lo hace mayuscula
mostrar(resultado.toUpperCase());
// Busca un caracter, arranca desde 0
mostrar(resultado.charAt(20));
// Concatena cosas
mostrar(String().concat("Hola\"'", " ", "mundo"));
mostrar(resultado.startsWith("  "));
mostrar(resultado.endsWith("  "));
mostrar(resultado.indexOf("III"));
