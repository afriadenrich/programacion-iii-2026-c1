// const app = require("express")();
const express = require("express");
const app = express();

// Config
app.use(express.json());

const usuariosRoutes = require("./routes/usuarios.routes");

app.use("/usuarios", usuariosRoutes);

app.listen(3000);
