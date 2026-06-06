//concepto:
// IV -> Vector de inclinación -> equivalente a la sal

// algoritmos varios:
// AES -> Advanced Encryption Standard
// GCM (Galois/Counter Mode)
// CCM (Counter with CBC-MAC)
// GCM y CCM son similares porque vienen de algoritmos similares
// OCB (OCB Authenticated Encryption) -> pensado para mensajes

// Obtener paquetes integrados en node: require("node:paquete");
const crypto = require("node:crypto");

const contraseñaUsuario = "abc123xyz";
// const contraseñaSuperSeguraSuperOcultaQueSoloTengoYoYNoLaDeberiaPoderAdivinarNadie =
const contraseñaServidor = "12345678901234567890123456789012";

function encriptar(contraseña) {
  const iv = crypto.randomBytes(128);

  console.log("iv", iv);

  const encriptador = crypto.createCipheriv(
    "aes-256-gcm",
    contraseñaServidor,
    iv
  );

  const encriptado = encriptador.update(contraseña, "utf-8", "base64");

  console.log(encriptado);
  return { encriptado, iv };
}

// entrada: contraseña + contraServidor + iv
// encriptado + contraServidor + iv -> passOriginal

const resultado = encriptar(contraseñaUsuario);

function desencriptar(contraseña, iv, encriptado) {
  const desencriptador = crypto.createDecipheriv(
    "aes-256-gcm",
    contraseñaServidor,
    iv
  );

  const desencriptado = desencriptador.update(encriptado, "base64", "utf-8");

  console.log(desencriptado === contraseña);
  console.log(desencriptado);
}

desencriptar(contraseñaUsuario, resultado.iv, resultado.encriptado);
