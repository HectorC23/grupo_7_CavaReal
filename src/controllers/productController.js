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

        const id = +req.params.id;
        // const product = products.find(p => p.id == id)
        const product = req.body;
        console.log(id);
        console.log(product);
        products.forEach( e => {
            if( e.id == id){
                console.log("ESTOY DENTRO");
                e.name = product.name;
                e.descripcion = product.descripcion.trim();
                e.descripcion = e.descripcion.trim();
                e.vinedo = product.vinedo;
                e.edad = +product.edad;
                e.variedad = product.variedad;
                e.altitud = product.altitud;
                e.barriles = +product.barriles;
                e.guardado = +product.guardado;                
                if(e.priceUnity != +product.priceUnity) {
                    e.priceSix = ((product.priceUnity * 6).toFixed(2))*0.9;
                }
                e.priceUnity = +product.priceUnity;
                e.afrutado = +product.afrutado;
                e.nada = +product.nada;
                e.seco = +product.seco;
                e.amable = +product.amable;
                e.aterciopelado = +product.aterciopelado;
                e.liviano = +product.liviano;
                e.delicado = +product.delicado;
                if(req.file){
                    let imagen = path.join(__dirname, '../../public/images/' + e.img)
                    if(fs.existsSync(imagen)){
                        fs.unlinkSync(imagen)
                    };
                    e.img = req.file.filename;
                }
                e.category = product.category;
                console.log(e);
            }
        });

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
            return res.redirect('/'); 
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
        product.priceSix = +((product.priceUnity * 6).toFixed(2))*0.9;
        products.push(product);

        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products),{encoding: 'utf-8'});

        res.redirect('/home');
    },

}

module.exports = productController;


/*const editedProduct={
    id: req.body.id,
    name: req.body.name,
    descripcion: req.body.descripcion,
    viñedo: req.body.viñedo,
    edad: req.body.edad,
    altitud: req.body.altitud,
    variedad: req.body.variedad,
    barriles:req.body.barriles,
    guardado:req.body.guardado,
    priceUnity:req.body.priceUnity,
    priceSix:req.body.priceSix,
    afrutado:req.body.afrutado,
    nada:req.body.nada,
    seco:req.body.seco,
    amable:req.body.amable,
    aterciopelado:req.body.aterciopelado,
    liviano:req.body.liviano,
    delicado:req.body.delicado,
    img:req.body.img,


    res.redirect('/product/detail/:idProduct');
}*/