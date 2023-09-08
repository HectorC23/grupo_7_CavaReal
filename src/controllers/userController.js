const products = require("../data/products.json");

const controllerUser = {
    register: (req,res)=> {
        res.render("register");
    },
    login: (req,res)=> {
        res.render("login")
    }
}

module.exports = controllerUser;