// require
const express = require("express");
const autoRouter = require("./autos/autos.routes");
const { default: z } = require("zod");

// instanciar
const app = express();
// param 1: dónde se disponibliza?
// param 2: qué carpeta disponibilizo?
app.use("/imagenes/autos", express.static("imagenes/autos"));
app.use("/public", express.static("public"));

// nombres comunes carpetas estáticas: assets, public, static, images, videos, audio, etc.

// SSR -> MOTOR DE VISTAS EJS
// Setteo el motor de vistas
app.set("view engine", "ejs");

// Setteo la carpeta donde van a ir mis vistas
app.set("views", "./vistas"); //views podría ser

// configurar
app.use(express.json());

// rutas
app.use("/autos", autoRouter);

app.get("/", (req, res) => res.render("index"));

app.use((error, req, res, next) => {
  if (error instanceof z.ZodError) {
    res.send(error.issues);
  }
});

// escuchar
app.listen(3000);
