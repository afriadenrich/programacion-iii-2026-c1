const autoRouter = require("express").Router();
const { Auto, Garage, Conductor } = require("../relaciones");
// Auto y su garage

autoRouter.post("/", async (req, res) => {
  const auto = await Auto.create({
    marca: "Ferrari",
    precio: 999,
    GarageId: 1,
  });

  res.send(auto);
});

autoRouter.get("/auto/:id", async (req, res) => {
  const { id } = req.params;

  const auto = await Auto.findByPk(id, { include: [Garage, Conductor] });

  res.send(auto);
});

module.exports = autoRouter;
