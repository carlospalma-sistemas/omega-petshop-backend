const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "OmegaBD";
const URI = "mongodb+srv://"+username+":"+password+"@cluster0.oumtivr.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Atlas está en linea");
    } catch (error) {
        console.log("Error en la conexion. "+error);
    }

    /*
    mongoose.connect(URI)
        .then((db) => { console.log("") })
        .catch((error) => { console.log("") });
    */
}
conectar();

module.exports = mongoose;