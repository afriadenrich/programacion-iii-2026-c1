const { Sequelize } = require("sequelize");

const stringDb = process.env.DB_URI;

const sequelize = new Sequelize(stringDb);

sequelize.sync({ alter: true });

module.exports = sequelize;
