const Productos = require("../models/productos.model");

const prod = {};

prod.obtenerProductos = async (req, res) => {
    //res.header('Access-Control-Allow-Origin: *');
	//res.header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept");
    const productos = await Productos.find();
    res.json(productos);
    //console.log(Productos.find());
};

prod.insertarProductos = async (req, res) => {

    let producto = new Productos(req.body);
    await producto.save();
    console.log(producto);
    res.json(req.body);
};

prod.actualizarProductos = async (req, res) => {
    const idProd = req.params.id;
    let producto = new Productos({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio_unitario: req.body.precio_unitario,
        stock: req.body.stock,
        imagen: req.body.imagen
    });
    console.log(req.body.nombre);
    await Productos.updateOne({"_id": idProd},{$set: {nombre: producto.nombre, categoria: producto.categoria, precio_unitario: producto.precio_unitario, stock: producto.stock}});
    res.json(producto);
    
};

prod.eliminarProductos = async (req, res) => {

    let id = req.params.id;
    await Productos.deleteOne({"_id": id});
    res.send("Respuesta");
};

module.exports = prod;