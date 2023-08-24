const productController = {
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    },
    productoDetalle: (req,res)=> {
        res.render("productDetail");
    }
}

module.exports = productController;