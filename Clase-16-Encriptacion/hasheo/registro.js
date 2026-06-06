const bcrypt = require("bcrypt");

// {
//     email: "agustin@gmail.com",
//     contraseña: "123456"
// }

const contraseñaUsuario = "123456";
const complejidad = 12;
const sal = bcrypt.genSaltSync(complejidad, "b");

const hash = bcrypt.hashSync(contraseñaUsuario, sal);

const baseDeDatos = hash;

console.log(hash);
