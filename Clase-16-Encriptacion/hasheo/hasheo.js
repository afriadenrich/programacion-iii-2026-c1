// Encriptación != Hashing

// Ocultar información

// Encriptar -> Reversible -> Contraseña Privada
// Hashear -> No reversible

// 123456 + contraseña_segura = a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
// 123456 + random -> = $2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW

// HASHEO -> Transformar -> Sin retorno. Si solo tengo el hash, no puedo obtener el valor original.

// abc123xyz -> $2a$12$R9h/cIPz0gi.URNNX3kh2OPST9/PgBkqquzi.Ss7KIUgO2t0jWMUW
// abc123xyz -> $2a$12$JAVIPJVPASJAPSDACASDASAASD?)AMV?AV)?ASM)FASDFMWCW?)M?

const bcrypt = require("bcrypt");

const contraseñaUsuario =
  "abc123xyzasdasdaasdasdasdasdasasdasdasdsasdsadasdasdasasdasdasdasdadasdadasdads";
const complejidad = 12;

console.time();

const sal = bcrypt.genSaltSync(complejidad, "b");

// SAL = Aleatorio

console.log(sal);

const hash = bcrypt.hashSync(contraseñaUsuario, sal);
console.log(hash);
console.timeEnd();

const resultado = bcrypt.compareSync(
  "abc123xysdfz",
  "$2b$12$906VJOt/ayfZmM5YMZGLu.9OD2OXJ8sHj5tEcrNUBKBGBAkvffESS"
);

console.log(resultado);
