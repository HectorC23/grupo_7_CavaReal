

const controller = {
    home: (req,res)=> {
        res.render("home");
    },
    carrito: (req,res)=> {
        let products = require("../data/products.json");
        res.render("productsList",{products});
    },
    detail: (req,res)=> {
        let products = require("../data/products.json");
        let product = products[0];
        res.render("productDetail",{product});
    },
    add: (req,res)=> {
        let products = require("../data/products.json");
        res.render("productAdd",{products});
    },
    cart: (req,res)=> {
        let products = require("../data/products.json");
        res.render("shoppingCart",{products});
    },
    login: (req,res)=> {
        res.render("users/login");
    },
    register: (req,res)=> {
        res.render("users/register");
    },
    profile: (req,res)=> {
        res.render("users/profile");
    },
    edit: (req,res)=> {
        res.render("users/edit");
    } 
}

module.exports = controller;