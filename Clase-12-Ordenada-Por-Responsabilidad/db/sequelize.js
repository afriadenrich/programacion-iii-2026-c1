// Cada archivo tiene 1 responsabilidad o responsabilidades que deban ir juntas

const { Sequelize } = require("sequelize");

const conexion = new Sequelize("mysql://root:123456@localhost:3307/2026-c1");

module.exports = conexion;
