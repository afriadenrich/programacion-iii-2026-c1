const express = require("express");
const cors = require("cors");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "http://localhost:5500" }));
// app.use("/carpeta-publica", express.static("assets"));

// app.options("", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
// });

app.get("", (req, res) => {
  console.log("Llega hasta acá");

  const { orden, cantidad } = req.query;

  res.send({ orden, cantidad });
});

app.post("", (req, res) => {
  const { orden, cantidad } = req.body;

  res.send({ orden, cantidad });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Funcionandoo en el puerto " + port);
});

// node --env-file=.env --watch main.js

// CORS es un error que sale del lado del CLIENTE. El error lo genera el NAVEGADOR.
// Es una medida de seguridad para NAVEGADORES.
