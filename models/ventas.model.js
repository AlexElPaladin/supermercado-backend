const mongoose = require("../database");
const Schema = mongoose.Schema;

var ventasSchema = new Schema({ cliente: 'string', motodoPago: 'string', precioTotal: 'number', fecha: 'string', productos: []});
module.exports = mongoose.model("ventas", ventasSchema);