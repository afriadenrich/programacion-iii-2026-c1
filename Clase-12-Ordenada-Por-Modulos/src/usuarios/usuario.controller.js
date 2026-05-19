const {
  buscarAutosDB,
  buscarAutoPorIdDB,
  crearAutoDB,
  modificarAutoDB,
  eliminarAutoDB,
} = require("./usuario.service");

const buscarAutos = async (req, res) => {
  const autos = await buscarAutosDB();

  res.send(autos);
};

const buscarAutoPorId = async (req, res) => {
  const { id } = req.params;

  const auto = await buscarAutoPorIdDB(id);

  res.send(auto);
};

const crearAuto = async (req, res) => {
  const { marca, modelo, precio, fechaSalida } = req.body;
  const auto = { marca, modelo, precio, fechaSalida };

  const autoCreado = await crearAutoDB(auto);

  res.send(autoCreado);
};

const modificarAuto = async (req, res) => {
  const { marca, modelo, precio, fechaSalida } = req.body;
  const { id } = req.params;
  const auto = { marca, modelo, precio, fechaSalida };

  const modificado = await modificarAutoDB(id, auto);

  res.send(modificado);
};

const eliminarAuto = async (req, res) => {
  const { id } = req.params;

  const eliminado = eliminarAutoDB(id);

  res.send(eliminado);
};

module.exports = {
  buscarAutoPorId,
  buscarAutos,
  crearAuto,
  modificarAuto,
  eliminarAuto,
};
