const {
  buscarAutos,
  buscarAutoPorId,
  crearAuto,
  modificarAuto,
  eliminarAuto,
} = require("../controllers/autos.controller");
const autoRouter = require("express").Router();

autoRouter.get("/", buscarAutos);

autoRouter.get("/:id", buscarAutoPorId);

autoRouter.post("/", crearAuto);

autoRouter.put("/:id", modificarAuto);

autoRouter.delete("/:id", eliminarAuto);

module.exports = autoRouter;
