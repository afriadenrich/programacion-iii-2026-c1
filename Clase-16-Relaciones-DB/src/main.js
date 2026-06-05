const express = require("express");
const { Auto } = require("./relaciones");
const { Garage } = require("./relaciones");
const { Conductor } = require("./relaciones");

const autoRouter = require("./routes/auto.routes");

const app = express();
app.use(autoRouter);

app.get("/", (req, res) => {
  const autosPromesa = Auto.findAll();
  const garagesPromesa = Garage.findAll();
  const conductoresPromesa = Conductor.findAll();

  const PROMESATODO = Promise.all([
    autosPromesa,
    garagesPromesa,
    conductoresPromesa,
  ]);

  PROMESATODO.then((resultados) => {
    // [resultadoPromesa1, resultadoPromesa2, resultadoPromesa3]
    res.send(resultados);
  });
});

// Garage con TODOS sus autos
app.get("/garage/:id", async (req, res) => {
  const { id } = req.params;

  const garage = await Garage.findByPk(id, {
    include: [{ model: Auto, as: "autos" }, Conductor],
  });

  res.send(garage);
});

app.get("/conductor/:id", async (req, res) => {
  const { id } = req.params;

  const auto = await Conductor.findByPk(id, { include: [Auto, Garage] });

  res.send(auto);
});

app.listen(3000, () => {
  console.log("FUNCIONANDO");
});
