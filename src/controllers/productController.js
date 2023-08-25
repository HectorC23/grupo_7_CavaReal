const productController = {
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    },
    productoDetalle: (req,res)=> {
        res.render("productDetail");
    },
    productAdd: (req,res)=> {
        res.render("productAdd");
    }
}

module.exports = productController;