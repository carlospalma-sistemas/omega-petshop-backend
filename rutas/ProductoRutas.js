const ProductoOperaciones = require("../operaciones/ProductoOperaciones");
const router = require('express').Router();

router.get("/", ProductoOperaciones.consultarProductos);
router.get("/:id", ProductoOperaciones.consultarProducto);
router.post("/", ProductoOperaciones.crearProducto);
router.put("/:id", ProductoOperaciones.modificarProducto);
router.delete("/:id", ProductoOperaciones.borrarProducto);

module.exports = router;