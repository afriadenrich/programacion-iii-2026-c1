const conexion = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const AutoModel = conexion.define("Auto", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marca: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  precio: {
    type: DataTypes.FLOAT,
  },
  fechaSalida: {
    type: DataTypes.DATE,
  },
});

// Asegurarse de que siempre esté
AutoModel.sync();

module.exports = AutoModel;
