//IMPORTACIONES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conexion");

//CONFIGURACIÓN
const app = express();
const env = process.env;
const port = env.PORT || 8000;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ARRANQUE
app.listen(port, ()=>{
    console.log("API iniciado en el puerto "+port);
});

//RUTAS
app.get("/", (req, res)=>{
    res.send("API iniciado");
})
app.use("/api/categorias", require("./rutas/CategoriaRutas"));
app.use("/api/productos", require("./rutas/ProductoRutas"));
