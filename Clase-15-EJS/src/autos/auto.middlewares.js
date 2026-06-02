const z = require("zod");

const loggerMW = (req, res, next) => {
  console.log(`${req.method} | ${req.url} | ${Date.now()}`);
  next();
};

// const validarIDMW = (req, res, next) => {
//   if (req.params && req.params.id) {
//     const parseada = parseInt(req.params.id);
//     if (parseada > 0) {
//       return next();
//     }
//   }

//   res.send("error");
// };

const validarIDMW = (req, res, next) => {
  z.int().parse(req.params.id);
  next();
};

const validarAutoACrear = (req, res, next) => {
  const AutoValidador = z.object({
    marca: z.string(),
    modelo: z.string(),
    precio: z.coerce.number(),
    imagen: z.string(),
    fechaSalida: z.iso.date(),
  });

  const { marca, precio, modelo, fechaSalida } = req.body;
  const { filename } = req.file;

  AutoValidador.parse({
    marca,
    precio,
    modelo,
    filename,
    fechaSalida,
  });

  next();
};

module.exports = { loggerMW, validarIDMW, validarAutoACrear };
