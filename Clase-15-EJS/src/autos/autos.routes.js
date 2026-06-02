const middlewareMulter = require("../multer");
const {
  loggerMW,
  validarIDMW,
  validarAutoACrear,
} = require("./auto.middlewares");
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

// middleware
autoRouter.use(loggerMW);

// const express = require("express");
// const router = express.Router();

autoRouter.get("/", buscarAutos);

autoRouter.get("/auto/:id", validarIDMW, buscarAutoPorId);

autoRouter.get("/imagen/:id", validarIDMW, buscarImagenPorId);

autoRouter.post(
  "/",
  middlewareMulter.single("imagenAuto"),
  validarAutoACrear,
  crearAuto
);

autoRouter.put("/:id", validarIDMW, modificarAuto);

autoRouter.delete("/:id", validarIDMW, eliminarAuto);

// ----- RUTAS EJS
const { buscarAutoEJS } = require("./autos.ejs.controller");

autoRouter.get("/ejs/auto/:id", validarIDMW, buscarAutoEJS);

module.exports = autoRouter;
