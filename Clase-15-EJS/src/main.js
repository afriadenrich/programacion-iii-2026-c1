// require
const express = require("express");
const autoRouter = require("./autos/autos.routes");

// instanciar
const app = express();
// param 1: dónde se disponibliza?
// param 2: qué carpeta disponibilizo?
app.use("/imagenes/autos", express.static("imagenes/autos"));

// nombres comunes carpetas estáticas: assets, public, static, images, videos, audio, etc.

// configurar
app.use(express.json());

// rutas
app.use("/autos", autoRouter);

// escuchar
app.listen(3000);
