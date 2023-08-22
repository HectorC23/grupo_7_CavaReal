const controller = {
    index: (req,res)=>{
        res.render("home");
    },
    carrito:(req,res)=>{
        res.render("carritoDeCompra");
    },
    login:(req,res)=>{
        res.render("login");
    },
    detalle:(req,res)=>{
        res.render("productDetail");
    },
    registro:(req,res)=>{
        res.render("register");
    },
}

module.exports= controller;