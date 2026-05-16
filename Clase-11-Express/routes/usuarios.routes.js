const express = require("express");
// const usuariosRoutes = express(); MAL, express() es SOLO para APP
// https://expressjs.com/en/guide/routing.html#express-router
const usuariosRoutes = express.Router();

usuariosRoutes.get("/", (req, res) => {
  res.send("Usuarios GET");
});

usuariosRoutes.post("/", (req, res) => {
  res.send("Usuarios POST");
});

module.exports = usuariosRoutes;

// NO lo vamos a usar
// import { algo} from "algo/algo";
// export { algo };
