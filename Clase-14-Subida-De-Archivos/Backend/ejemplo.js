const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const usuariosRouter = express.Router();

// usuariosRouter.use("usa un middleware solo en las rutas de usuario");

app.post("/", (req, res, next) => {
  console.log("1 er middleware");
  next();
});

app.post("/", (req, res, next) => {
  console.log("2 er middleware");
  next();
});

app.post(
  "/",
  (req, res, next) => {
    console.log("3 er middleware");
    next();
  },
  (req, res, next) => {
    console.log("4to");

    if (req.body.orden !== "ascendente") {
      res.send("Tiene que ser descendente");
    }

    next();
  }
);

app.post("/", (req, res, next) => {
  console.log(req.body);
  res.send({ mensaje: "Hola mundo" });
});

app.listen(3000, () => {
  console.log("Todo funcionando");
});
