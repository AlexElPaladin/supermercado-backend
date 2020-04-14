var mongoose = require("../database");
var Schema = mongoose.Schema;
const url = "mongodb://127.0.0.1/supermercados";

var clientesSchema = new Schema({ nombre: 'string', apellidos: 'string', email: 'string', contrasena: "string" , movil: "string", direccion: 'string' , direccion_entrega: 'string'});

module.exports = mongoose.model("clientes", clientesSchema);

