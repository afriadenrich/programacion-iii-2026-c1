const express = require("express");
const cors = require("cors");
const multer = require("multer");
const middlewareMulter = multer({ dest: "carpeta-imagenes/" });

const app = express();

// MIDDLEWARES GLOBALES
app.use(express.json());

app.use(cors());

// RUTAS
app.post("/posteo", middlewareMulter.single("imagenEnviada"));

app.post("/posteo", (req, res) => {
  console.log("Creo un posteo con los datos: ", req.body);
  res.send(req.body);
});

// LISTEN

app.listen(3000, () => {
  console.log("Todo funcionando");
});
