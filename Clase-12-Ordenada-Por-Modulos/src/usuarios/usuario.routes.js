const {
  buscarAutos,
  buscarAutoPorId,
  crearAuto,
  modificarAuto,
  eliminarAuto,
} = require("./usuario.controller");

// defino el router
const autoRouter = require("express").Router();

// const express = require("express");
// const router = express.Router();

autoRouter.get("/", buscarAutos);

autoRouter.get("/:id", buscarAutoPorId);

autoRouter.post("/", crearAuto);

autoRouter.put("/:id", modificarAuto);

autoRouter.delete("/:id", eliminarAuto);

module.exports = autoRouter;
