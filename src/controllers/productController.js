let products = require('../data/products.json');
const fs = require('fs');
const { dirname } = require('path');

const path = require('path');

const productController = {
    detalle: (req,res)=> {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productDetail",{product});
    },
    add: (req,res)=> {
        res.render("productAdd");
    },

    process:(req,res)=>{
        const product= req.body;

        const { id } =req.params;

        products = products.filter((p)=> p.id !== id);

        products.push(product)
        // const idProduct= req.params.id;
        // products.find((p)=> p.id == idProduct? p=editedProduct : null);
        console.log("Este es el id " + id);
    //     products.forEach((e) => {
    //         if(e.id == id){
    //             console.log("encontre el id" + e);
    //             // e = editedProduct;
    //             e.name = product.name
    //             e.vinedo = product.vinedo;
    //             e.edad = +product.edad;
    //             e.variedad = product.variedad
    //             e.altitud = +product.altitud;
    //             e.barriles = +product.barriles;
    //             e.guardado = +product.guardado;
    //             e.priceUnity = +product.priceUnity; 
    //             e.priceSix = +product.priceUnity*6;

    //             e.afrutado = product.afrutado
    //             e.nada = product.nada
    //             e.seco = product.seco
    //             e.amable = product.amable
    //             e.aterciopelado = product.aterciopelado
    //             e.liviano = product.liviano
    //             e.delicado = product.delicado
    //             e.img = product.img
    //             e.category = product.category
    //         }
            
    // })
       

        // const productsJSON= JSON.stringify(products);

        // fs.writeFileSync('../data/products.json', productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        console.log(products[0]);
        res.redirect(`/`);
    },
    edit: (req, res) => {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productEdit",{product})
    },
    deleteProduct:(req,res)=>{
        const idProduct= +req.params.id;

        products = products.filter((p)=> p.id !== idProduct);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect('/home');
    },
    productAdd: (req,res) => {

        const product = req.body;
        product.id = Date.now();
        product.img= req.file.filename;
        product.edad = +product.edad;
        product.altitud = +product.altitud;
        product.guardado = +product.guardado;
        product.potencial = +product.potencial;
        product.priceUnity = +product.priceUnity; 
        product.priceSix = +product.priceUnity*6;
        products.push(product);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products));

        res.redirect('/home');
    },

}

module.exports = productController;