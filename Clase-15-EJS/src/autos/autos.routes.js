const middlewareMulter = require("../multer");
const {
  buscarAutos,
  buscarAutoPorId,
  crearAuto,
  modificarAuto,
  eliminarAuto,
  buscarImagenPorId,
} = require("./autos.controller");

// defino el router
const autoRouter = require("express").Router();

// const express = require("express");
// const router = express.Router();

autoRouter.get("/", buscarAutos);

autoRouter.get("/auto/:id", buscarAutoPorId);

autoRouter.get("/imagen/:id", buscarImagenPorId);

autoRouter.post("/", middlewareMulter.single("imagenAuto"), crearAuto);

autoRouter.put("/:id", modificarAuto);

autoRouter.delete("/:id", eliminarAuto);

// ----- RUTAS EJS
const { buscarAutoEJS } = require("./autos.ejs.controller");

autoRouter.get("/ejs/auto/:id", buscarAutoEJS);

module.exports = autoRouter;
