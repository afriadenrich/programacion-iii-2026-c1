const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const GarageConductores = sequelize.define(
  "GarageConductores",
  {
    sueldo: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = GarageConductores;
