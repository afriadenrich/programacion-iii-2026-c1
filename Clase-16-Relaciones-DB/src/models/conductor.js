const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Conductor = sequelize.define(
  "Conductor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Conductor;
