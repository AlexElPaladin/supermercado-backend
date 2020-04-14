const Cliente = require("../models/clientes.model");

const clienteCtrl = {};

clienteCtrl.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

clienteCtrl.insertarCliente = async (req, res) => {
    cliente = new Cliente ({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        contrasena: req.body.contrasena ,
        movil: req.body.movil,
        direccion: req.body.direccion , 
        direccion_entrega: req.body.direccion_entrega
    });
    await cliente.save();
    res.json(cliente);
};

clienteCtrl.modificarCliente = async (req, res) => {

    const id = req.params.id;

    cliente = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        contrasena: req.body.contrasena ,
        movil: req.body.movil,
        direccion: req.body.direccion , 
        direccion_entrega: req.body.direccion_entrega
    };

    await Cliente.updateOne({"_id": id}, {$set: {nombre: cliente.nombre, apellidos: cliente.apellidos, email: cliente.email,
    contrasena: cliente.contrasena, movil: cliente.movil, direccion: cliente.direccion, direccion_entrega: cliente.direccion_entrega}});

    res.json(cliente);
};

clienteCtrl.eliminarCliente = async (req, res) => {
    const id = req.params.id;
    await Cliente.deleteOne();
    res.send("Cliente " + id + " borrado");
};

module.exports = clienteCtrl;