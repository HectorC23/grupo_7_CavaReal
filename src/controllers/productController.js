const products = require('../data/products.json');


const productController = {
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    },
    productoDetalle: (req,res)=> {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productDetail",{product});
    },
    productAdd: (req,res)=> {
        res.render("productAdd");
    }
}

module.exports = productController;