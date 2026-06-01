// Cada archivo tiene 1 responsabilidad o responsabilidades que deban ir juntas

const { Sequelize } = require("sequelize");

const conexion = new Sequelize(process.env.DB_URI);

module.exports = conexion;
