const ProductoModelo = require("../modelos/ProductoModelo");
const ProductoOperaciones = {};

ProductoOperaciones.crearProducto = async(req, res) => {
    try {
        const objeto = req.body;
        const producto = new ProductoModelo(objeto);
        const productoGuardado = await producto.save();
        if (productoGuardado != null) {
            res.status(201).send(productoGuardado);
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

ProductoOperaciones.consultarProductos = async(req, res) => {
    try {
        const filtro = req.query;
        let listaProductos;
        if (filtro.q != null) {
            listaProductos = await ProductoModelo.find({
                "$or" : [ 
                    {"nombre": { $regex:filtro.q, $options:"i" }},
                    {"marca": { $regex:filtro.q, $options:"i" }},
                    {"categorias": { $regex:filtro.q, $options:"i" }}
                ]
            });
        }
        else {
            listaProductos = await ProductoModelo.find(filtro);
        }
        if (listaProductos.length > 0) {
            res.status(200).send(listaProductos);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.consultarProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const producto = await ProductoModelo.findById(id);
        if (producto != null) {
            res.status(200).send(producto);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.modificarProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const producto = {
            nombre: body.nombre,
            marca: body.marca,
            precio: body.precio,
            categorias: body.categorias,
            imagen : body.imagen,
            disp : body.disp
        }
        console.log(producto);
        const productoActualizado = await ProductoModelo.findByIdAndUpdate(id, producto, { new: true });
        if (productoActualizado != null) {
            res.status(200).send(productoActualizado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

ProductoOperaciones.borrarProducto = async(req, res) => {
    try {
        const id = req.params.id;
        const productoBorrado = await ProductoModelo.findByIdAndDelete(id);
        if (productoBorrado != null) {
            res.status(200).send(productoBorrado);
        }
        else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = ProductoOperaciones;