const mongoose = require("mongoose");
const categoriaSchema = new mongoose.Schema({
    nombre: { type:String, maxLength:40, required:true, unique:true },
    activo : { type:Boolean, required:true },
    imagen : { type:String, maxLength:40, required:true, unique:true }
});

module.exports = mongoose.model("categorias", categoriaSchema);