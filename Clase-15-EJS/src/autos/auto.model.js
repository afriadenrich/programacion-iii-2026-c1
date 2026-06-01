const conexion = require("../sequelize");
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
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaSalida: {
    type: DataTypes.DATE,
  },
});

// Asegurarse de que siempre esté
AutoModel.sync({ alter: true });

module.exports = AutoModel;
