

const controller = {
    home: (req,res)=> {
        let products = require("../data/products.json");
        res.render("home",{products});
    },
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    }
}

module.exports = controller;