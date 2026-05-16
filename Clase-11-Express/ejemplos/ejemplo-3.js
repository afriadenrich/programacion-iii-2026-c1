const express = require("express");
const app = express();

app
  .route("/usuarios")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {});

const usrsRoutes = app.route("/usuarios");

usrsRoutes.get((req, res) => {});

// /usuarios/admins
usrsRoutes.get("/admins", (req, res) => {});
// /usuarios/
usrsRoutes.post((req, res) => {});
// /usuarios/
usrsRoutes.put((req, res) => {});
// /usuarios/estadisticas
usrsRoutes.all("estadisticas", (req, res) => {
  res.send("Todavía no implementado");
});

app.listen(3000);
