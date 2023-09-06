const products = require('../data/products.json');


const productController = {
    productoDetalle: (req,res)=> {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productDetail",{product});
    },
    productAdd: (req,res)=> {
        res.render("productAdd", {product: products});
    },
    edit: (req, res) => {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productAdd",{product})
    }
}

module.exports = productController;