const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

// 1. Que en TODAS las rutas de mi app, muestre en consola qué petición y qué método se está ejecutando.
const logger = (req, res, next) => {
  console.log(`[LOG] ${req.method} - ${req.url} `);
  next();
};

app.use(logger);

// 2. Que las rutas que empiecen con /usuarios -> Hagan un console.log() de que se realiza una acción de usuarios.

app.use("/usuarios", (req, res, next) => {
  console.log("USUARIOS");
  next();
});

// 3. Post / -> console.log("/ POST");
app.post("/", (req, res, next) => {
  console.log("POST /");
  next();
});

app.get("/", (req, res) => {
  res.send("GET");
});

app.post("/", (req, res) => {
  console.log(req.body);
  throw new Error("Error critico");
  res.send({ mensaje: "Hola mundo" });
});

// MIDDLEWARE GLOBAL DE CATCH DE EXCEPCIONES
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ mensaje: "Something broke!" });
});

app.listen(3000, () => {
  console.log("Todo funcionando");
});
