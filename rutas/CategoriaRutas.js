const CategoriaOperaciones = require("../operaciones/CategoriaOperaciones");
const router = require('express').Router();

router.get("/", CategoriaOperaciones.consultarCategorias);
router.get("/:id", CategoriaOperaciones.consultarCategoria);
router.post("/", CategoriaOperaciones.crearCategoria);
router.put("/:id", CategoriaOperaciones.modificarCategoria);
router.delete("/:id", CategoriaOperaciones.borrarCategoria);

module.exports = router;