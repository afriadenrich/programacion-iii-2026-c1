const bcrypt = require("bcrypt");

// {
//     email: "agustin@gmail.com",
//     contraseña: "123456"
// }

const baseDeDatos =
  "$2b$12$ZLmk429eQdsXqvEqYtI2BOHFK9b7plYbRP3WLfKs/WJ2sToCQW9D6";
const contraseñaUsuario = "123455";

const esContraseñaValida = bcrypt.compareSync(contraseñaUsuario, baseDeDatos);
// const hash = bcrypt.hashSync(contraseñaUsuario, "$2b$04$Oa/jXnecSlBI/OILnYOxie");

console.log("Es válida?", esContraseñaValida);

// sal + contraseña => sal + contraseña_hasheada
// sal + contraseñ => sal + asdasdas
