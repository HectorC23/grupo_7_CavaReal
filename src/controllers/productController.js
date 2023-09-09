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

        for(let i = 0; i < products.length; i++){
            if(products[i].name == product.name){
                products[i].name = product.name
                products[i].vinedo = product.vinedo;
                products[i].edad = +product.edad;
                products[i].variedad = product.variedad
                products[i].altitud = product.altitud;
                products[i].barriles = +product.barriles;
                products[i].guardado = +product.guardado;
                products[i].priceUnity = +product.priceUnity; 
                products[i].priceSix = +product.priceUnity*6;
                products[i].afrutado = +product.afrutado
                products[i].nada = +product.nada
                products[i].seco = +product.seco
                products[i].amable = +product.amable
                products[i].aterciopelado = +product.aterciopelado
                products[i].liviano = +product.liviano
                products[i].delicado = +product.delicado
                products[i].img = req.file ? req.file.filename : products[i].img;
                products[i].category = product.category
            }
        }

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products),{encoding: 'utf-8'});

        res.redirect(`/`);
    },
    edit: (req, res) => {
        const { id } =req.params;

        const product = products.find(p =>p.id == id)
        res.render("productEdit",{product})
    },
    deleteProduct:(req,res)=>{
        const idProduct= +req.params.id;
        const product = products.find(p => p.id == idProduct)
        let imagen = path.join(__dirname, '../../public/images/' + product.img)
        if(fs.existsSync(imagen)){
            fs.unlinkSync(imagen)
        }

        products = products.filter((p)=> p.id !== idProduct);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products),{encoding: 'utf-8'});
        
        //hay que actualizar la pagina luego de borrarla
        res.redirect('/');
    },
    productAdd: (req,res) => {
        // const id = products.length + 1;
        const product = req.body;
        product.id = Date.now();
        product.img= req.file.filename;
        product.edad = +product.edad;
        product.altitud = product.altitud;
        product.guardado = +product.guardado;
        product.potencial = +product.potencial;
        product.priceUnity = +product.priceUnity; 
        product.priceSix = +product.priceUnity*6;
        products.push(product);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products),{encoding: 'utf-8'});

        res.redirect('/home');
    },

}

module.exports = productController;