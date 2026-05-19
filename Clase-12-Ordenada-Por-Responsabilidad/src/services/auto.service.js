const Auto = require("../models/auto.model");

const buscarAutosDB = async () => {
  return await Auto.findAll();
};

const buscarAutoPorIdDB = async (id) => {
  return await Auto.findByPk(id);
};

const crearAutoDB = async (auto) => {
  return await Auto.create(auto);
};

const modificarAutoDB = async (id, auto) => {
  const modificado = await Auto.update(auto, { where: { id } });
  return modificado;
};

const eliminarAutoDB = async (id) => {
  const eliminado = await Auto.destroy({ where: { id } });
  return eliminado;
};

module.exports = {
  buscarAutoPorIdDB,
  buscarAutosDB,
  crearAutoDB,
  modificarAutoDB,
  eliminarAutoDB,
};
