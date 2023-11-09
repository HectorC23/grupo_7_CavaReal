

const controller = {
    home: (req,res)=> {
        res.render("home");
    },
    carrito: (req,res)=> {
        let products = require("../data/products.json");
        res.render("productsList",{products});
    }
}

module.exports = controller;