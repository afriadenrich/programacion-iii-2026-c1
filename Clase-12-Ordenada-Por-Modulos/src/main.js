// require
const express = require("express");
const autoRouter = require("./autos/autos.routes");

// instanciar
const app = express();

// configurar
app.use(express.json());

// rutas
app.use("/autos", autoRouter);

// escuchar
app.listen(3000);
