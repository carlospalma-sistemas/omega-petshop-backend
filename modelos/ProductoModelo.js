const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
    nombre: { type:String, maxLength:40, required:true },
    marca: { type:String, maxLength:40, required:true },
    precio: { type:Number, required:true },
    categorias: [ { type:String, maxLength:40, required:true } ],
    imagen : { type:String, maxLength:40, required:true, unique: true },
    disp : { type:Boolean, required:true }
});

module.exports = mongoose.model("productos", productoSchema);
