const Ventas = require("../models/ventas.model");

ventasCtl = {};

ventasCtl.visualizarVentas = async (req, res) => {
    let ventas = await Ventas.find();
    console.log(ventas);
    res.json(ventas);
};

ventasCtl.registrarVentas = async (req, res) => {
    let ventas = new Ventas(req.body);
    await ventas.save();
    res.json(ventas);
};

module.exports = ventasCtl;