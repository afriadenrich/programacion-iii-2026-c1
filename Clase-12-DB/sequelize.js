const { Sequelize } = require("sequelize");

const conexion = new Sequelize("2026-c1", "root", "123456", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3307", // default 3306
});

// const conexion = new Sequelize("mysql://root:123456@localhost:3307/2026-c1");

(async () => {
  try {
    await conexion.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
