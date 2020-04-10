var mongoose = require("../database");
var Schema = mongoose.Schema;
const url = "mongodb://127.0.0.1/supermercados";

var productosSchema = new Schema({ nombre: 'string', categoria: 'string', precio_unitario: 'number', stock: 'number'});
module.exports = mongoose.model("productos", productosSchema);

