const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Auto = sequelize.define(
  "Auto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    tableName: "autos",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Auto;
/*

A.hasOne(B); // A TIENE UN B
A.belongsTo(B); // A PERTENECE A B

A.hasMany(B); // A TIENE MUCHOS B
A.belongsToMany(B, { through: 'C' }); // A PERTENECE A MUCHOS B a través de la tabla C

1 AUTO -> 1 GARAGE
1 GARAGE -> N AUTOS

NO: Auto.hasOne(Garage)
NO: Garage.belongsToMany(Auto)

SI: Auto.belongsTo(Garage)
SI: Garage.hasMany(Auto)

*/
