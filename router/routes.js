const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");

router.get("/productos", productosController.obtenerProductos);

router.post("/productos", productosController.insertarProductos);

router.put("/productos/:id", productosController.actualizarProductos);

router.delete("/productos/:id", productosController.eliminarProductos);

router.get("/clientes", (req, res) => {
    res.send("Obtener clientes");
});

router.get("/clientes", (req, res) => {
    res.send("Subir clientes");
});

router.get("/clientes", (req, res) => {
    res.send("Actualizar clientes");
});

router.get("/clientes", (req, res) => {
    res.send("Eliminar clientes");
});

module.exports = router;