const products = require("../data/products.json");

const controller = {
    home: (req,res)=> {
        res.render("home",{products});
    },
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    }
}

module.exports = controller;