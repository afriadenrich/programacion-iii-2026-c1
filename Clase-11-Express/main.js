// 1. Crear el servidor
const express = require("express");
const app = express();

// 2. Definir rutas
// 3. Definir acciones (métodos HTTP) (GET, POST, PUT, PATCH, DELETE)
// app.accion("ruta", (req, res) => { // lógica });
app.get("/usuarios", (req, res) => {
  // QueryParams
  const queryParams = req.query;
  console.log(queryParams);
  const page = queryParams.page || 1;
  const limit = queryParams.limit || 10;
  console.log(page, limit);
  res.send("usuarios en el send");
});

app.get("/puestos", (req, res) => {
  res.send("puestos");
});

app.get("/pedidos", (req, res) => {
  res.send("pedidos");
});

app.get("/estadisticas/usuarios", (req, res) => {
  res.send("estadisticas/usuarios");
});

app.get("/estadisticas/pedidos", (req, res) => {
  res.send("estadisticas/pedidos");
});

// 4. Servir el servidor -> Arrancarlo
// app.listen(3000);
// node main.js para arrancarlo
app.listen(3000, () => {
  console.log(
    "Callback que se ejecuta cuando levanta correctamente el servidor. Control + C en la consola para frenar el servidor."
  );
});
