// RELACIONES

const Auto = require("./models/auto");
const Conductor = require("./models/conductor");
const Garage = require("./models/garage");
const GarageConductores = require("./models/GarageConductores");

// 1 a Muchos
Auto.belongsTo(Garage);
Garage.hasMany(Auto, { as: "autos" });

// 1 a 1
Auto.hasOne(Conductor, { foreignKey: "garageId" });
Conductor.belongsTo(Auto, { foreignKey: "garageId" }); // conductor va a tener el AutoID

// Muchos a Muchos con String
// Garage.belongsToMany(Conductor, { through: "GarageConductores" });
// Conductor.belongsToMany(Garage, { through: "GarageConductores" });
// Muchos a Muchos con Modelo
Garage.belongsToMany(Conductor, { through: GarageConductores });
Conductor.belongsToMany(Garage, { through: GarageConductores });

module.exports = { Garage, Conductor, Auto };
