// 1. Imports / Requires
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

// 2. Inicialización
const app = express();

// usr: 'root'
// url: 'http://127.0.0.1:3306'
// url: 'http://localhost:3306'
// pass: '123456'
// pass: ''
// db: '2026-c1'

// Usando el método de squelize
//const conexion = new Sequelize("2026-c1", "root", "123456", {
//   host: "127.0.0.1",
//   dialect: "mysql",
//   port: "3307", // default 3306
// });

// Conexion string - se adapta a distintos motores
// '{dialect}://{usuario}:{contraseña}@{host}:{puerto}/{nombreDB}'
// 'mysql://root:123456@localhost:3307/2026-c1'
const conexion = new Sequelize("mysql://root:123456@localhost:3307/2026-c1");

(async () => {
  try {
    await conexion.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// 3. Configuraciones
app.use(express.json());

// ENTIDAD
// AUTO -> id, marca, modelo, precio, fechaSalida

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
  fechaSalida: {
    type: DataTypes.DATE,
  },
});

// Sincronizar el modelo con la DB
(async () => {
  await AutoModel.sync();
})();

// 4. Rutas

app.get("/", (req, res) => {
  res.send({ mensaje: "Todo funcionando" });
});

// base.execute("SELECT * FROM 'usuarios' WHERE ...");
// base.execute("INSERT INTO 'usuarios' (id, nombre, edad) VALUES (?, ?, ?)"); // Consultas preparadas

app.get("/autos", async (req, res) => {
  const autos = await AutoModel.findAll();
  console.log(autos);
  res.send(autos);
});

app.get("/autos/:id", async (req, res) => {
  const auto = await AutoModel.findByPk(req.params.id);
  //   const auto = await AutoModel.findOne({ where: { id: req.params.id } });
  res.send(auto);
});

app.post("/autos", async (req, res) => {
  const marca = req.body.marca;
  const { modelo } = req.body; // Desestructurar
  const { precio, fechaSalida } = req.body;

  const autoCreado = await AutoModel.create({
    marca: marca,
    modelo: modelo,
    precio,
    fechaSalida, // Desestructurar
  });

  res.send(autoCreado);
});

app.put("/autos/:id", async (req, res) => {
  const { marca, modelo, precio, fechaSalida } = req.body;
  const { id } = req.params;

  const modificado = await AutoModel.update(
    {
      marca,
      modelo,
      precio,
      fechaSalida,
    },
    { where: {} }
  );

  res.send(modificado);
});

app.delete("/autos/:id", async (req, res) => {
  const { id } = req.params;

  const eliminado = await AutoModel.destroy({ where: { id } });

  res.send(eliminado);
});

// 5. Listen / Servir la app
app.listen(3000, () => {
  console.log("Todo funcionando");
});

// ORM
// Object-Relational Mapping / Mapeo de objetos relacionales

// DB ->>>>>>>>>>>>>>>> CÓDIGO
// id >>>>>>>>>>>>>>>>> id
// nombre ->>>>>>>>>>>> nombre
// apellido ->>>>>>>>>> apellido
// edad ->>>>>>>>>>>>>> edad
// fecha_ingreso ->>>>> fechaIngreso
