const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Garage = sequelize.define(
  "Garage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "garages",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Garage;
