const multer = require("multer");

const middlewareMulter = multer({
  dest: "imagenes/autos/",
  limits: {
    fileSize: 1024 * 1024 * 2, // 2MB -> 1024 bytes * 1024 bytes * 2
  },
  fileFilter: (req, file, callback) => {
    const tiposPermitidos = ["png", "jpg", "jpeg"];

    // tipo/subtipo
    const tipo = file.mimetype.split("/")[1];

    const esImagenPermitida = tiposPermitidos.includes(tipo);

    // Si pasa el filtro:
    if (esImagenPermitida) {
      callback(null, true); // next con parametros
    } else {
      callback(new Error("El archivo no es una imagen"), false);
      // Si no pasa el filtro:
    }
  },
  storage: multer.diskStorage({
    filename: (req, file, callback) => {
      callback(null, `IMG-${Date.now()}.${file.mimetype.split("/")[1]}`);
    },
    destination: (req, file, callback) => {
      callback(null, "imagenes/autos/");
    },
  }),
});

module.exports = middlewareMulter;
