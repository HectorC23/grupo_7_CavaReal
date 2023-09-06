let products = require('../data/products.json');
const fs = require('fs');
const path = require('path');
let idProduct = 9;


const productController = {
    carrito: (req,res)=> {
        res.render("carritoDeCompra");
    },
    productoDetalle: (req,res)=> {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productDetail",{product});
    },
    productAddView: (req,res)=> {
        res.render("productAdd");
    },
    productAdd: (req,res) => {
     const product = req.body;
     product.id = idProduct + 1;
     product.edad = +product.edad;
     product.altitud = +product.altitud;
     product.guardado = +product.guardado;
     product.potencial = +product.potencial;
     product.precio = +product.precio; // AHI QUE VER QUE ONDA CON LOS CATEGOTIAS PARA SABER SI SON numero;
     products.push(product);
     
     fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

     res.redirect('/home');
     console.log(product);
    }
}

module.exports = productController;