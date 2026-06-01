const {
  buscarAutosDB,
  buscarAutoPorIdDB,
  crearAutoDB,
  modificarAutoDB,
  eliminarAutoDB,
} = require("./auto.service");

const buscarAutos = async (req, res) => {
  const autos = await buscarAutosDB();

  res.send(autos);
};

const buscarImagenPorId = async (req, res) => {
  const { id } = req.params;

  const auto = await buscarAutoPorIdDB(id);

  res.send(`<h1>Hoola mundo</h1>
    <img width=50 height=50 src="http://localhost:3000/imagenes/autos/${auto.imagen}">`);
};

const buscarAutoPorId = async (req, res) => {
  const { id } = req.params;

  const auto = await buscarAutoPorIdDB(id);

  res.send(`<div class="card">
    <h1>${auto.marca}</h1>
    <p>${auto.modelo}</p>
    <p>$ ${auto.precio} .-</p>
    <img width=50 height=50 src="http://localhost:3000/imagenes/autos/${auto.imagen}">
    </div>`);
};

const crearAuto = async (req, res) => {
  const { marca, modelo, precio, fechaSalida } = req.body;

  const imagen = req.file.filename;

  const auto = { marca, modelo, precio, fechaSalida, imagen };

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
  buscarImagenPorId,
};
