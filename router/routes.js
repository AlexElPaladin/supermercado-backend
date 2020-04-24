const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");
const clientesController = require("../controllers/clientes.controller");
const ventasController = require("../controllers/ventas.controller");

router.get("/productos", productosController.obtenerProductos);

router.post("/productos", productosController.insertarProductos);

router.put("/productos/:id", productosController.actualizarProductos);

router.delete("/productos/:id", productosController.eliminarProductos);

router.get("/clientes", clientesController.obtenerClientes);

router.post("/clientes", clientesController.insertarCliente);

router.put("/clientes/:id", clientesController.modificarCliente);

router.delete("/clientes/:id", clientesController.eliminarCliente);

router.get("/ventas", ventasController.visualizarVentas);

router.post("/ventas", ventasController.registrarVentas);

module.exports = router;