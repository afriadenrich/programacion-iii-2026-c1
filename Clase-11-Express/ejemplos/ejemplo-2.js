// fetch("http:localhost:3000/usuarios", {
//     method: "POST",
//     body: JSON.stringify({})
// })

const express = require("express");
const app = express();

// CONFIGURACIÓN DE APP PREVIA A CUALUQIER EJECUCIÓN

app.use(express.json()); // Parsear todo body desde json a objeto js

// "Enrutamiento" ==========================================

app.get("/usuarios", (req, res) => {
  const usuarios = ["agus", "nico", "alumno", "asdasd"];
  res.send(usuarios);
});

// poner parametros con :clave -> automáticamente lo guarda en req.params.clave
app.get("/usuarios/:index", (req, res) => {
  const indexObtenido = req.params.index;
  const claveObtenido = req.query.clave;
  const usuarios = ["agus", "nico", "alumno", "asdasd"];
  res.send(usuarios[indexObtenido] + " - " + claveObtenido);
});

app.post("/usuarios", (req, res) => {
  // string = "{'nombre':'agus','edad':44}"
  // POR DEFECTO EXPRESS NO HACE EL PARSEO A OBJETO CORRESPONDIENTE

  const body = req.body;
  const nombre = body.nombre;

  console.log(req.headers["sarasa"]);

  // GUARDAR EL USUARIO EN LA DB, SI SALE BIEN RESPONDO CON 200, SI SALE MAL RESPONDO CON ERROR 500

  res.send(body);
});

app.put("/usuarios", (req, res) => {
  res.send("modifica un usuario entero");
});

app.patch("/usuarios", (req, res) => {
  res.send("modificar una parte de un usuario");
});

app.delete("/usuarios", (req, res) => {
  res.send("elimina un usuario");
});

app.listen(3000, () => {
  console.log("Arrancó en http://locahlost:3000");
});
