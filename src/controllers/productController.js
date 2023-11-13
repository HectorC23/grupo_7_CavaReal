let products = require('../data/products.json');
const fs = require('fs');
const { dirname } = require('path');

const db = require('../database/models');

const Product = db.Product;
const CategoryProduct = db.CategoryProduct;

const path = require('path');
const { Op } = require('sequelize');

const productController = {
    add: async(req,res)=> {
         const categories = await CategoryProduct.findAll();
            res.render("productAdd", { categories });
    },
    create: async(req,res) => {
        const product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price:  req.body.price,
            img: req.file.filename,
            categoryId: req.body.categoryId,
        })

        const categoryProduct = product.categoryId

        const attributesProduct = await Attribute.findAll({
            where: {
                categoryId: categoryProduct
            }
        });

        await Promise.all(
        attributesProduct.map( async (attribute) => {
            await DetailProducts.create({
                productId: product.id,
                attributeId: attribute.id,
                value: req.body[attribute.name],
            })
        }));
            /* vineyard:  req.body.vineyard,
            age:  +req.body.age,
            altitude:  +req.body.altitude,
            variety:  req.body.variety,
            barrels:  req.body.barrels,
            saved:  +req.body.saved, */
        
        return res.redirect('/home');
    },
    edit: async(req, res) => {
        const idProduct = req.params.id;

        const product = await Product.findByPk(idProduct);

        res.render("productEdit",{ product });
    },
    update: async(req,res)=>{

        const idProduct = +req.params.id;

        const product = await Product.findByPk(idProduct);

        const categoryProduct = product.category;

        const attributesProduct = await Attribute.findAll({
            where: {
                categoryId: categoryProduct
            }
        });

        await Promise.all(
            attributesProduct.map(async (attribute) => {
                DetailProducts.update({
                    value: req.body[attribute.name]
                },{
                    where:{
                        productId: idProduct,
                        attributeId: attribute.id
                    }
                })
            })
        );

        res.redirect(`/`);
    },
    delete: async(req,res)=>{

        const idProduct= +req.params.id;
        const productImg = await Product.findByPk(idProduct).img;

        const product = await Product.destroy({
            where:{
                id: idProduct
            }
        });

        await DetailProducts.destroy({
            where: {
                productId: idProduct
            }
        }); 

        let imagen = path.join(__dirname, '../../public/images/' + productImg)
        if(fs.existsSync(imagen)){
            fs.unlinkSync(imagen)
        }

        return res.redirect('/products'); 
    },
    detail: async(req,res)=> {

        const idProduct = req.params.id;

        const product = await Product.findByPk(idProduct);

        const attributesProduct = await DetailProducts.findAll({
            where: {
                productId : idProduct
            },
            include: [{ association: 'attribute' }]     
        });

        res.render("productDetail",{ product, attributes: attributesProduct});
    },
    list: async(req, res) => {
        const products = await Product.findAll({
            include: [{ association: 'category'}]
        });

        const categories = await CategoryProduct.findAll();

        return res.render('productsList', { products, categories });
    },
    search: async(req, res) => {
        const searchedProduct = req.query.searched;
        const categories = await CategoryProduct.findAll();

        const productsFound = await Product.findAll({
            where: {
                [Op.or]:{
                    name: {
                        [Op.like]: '%' + searchedProduct + '%'
                    },
                    description: {
                        [Op.like]: '%' + searchedProduct + '%'
                    }
                } 
            },
            include: [{ association: 'category'}]
        }); 

         return res.render('productsList', { products : productsFound, categories});
    },
    filter: async(req, res) => {

        const categoryFilter = req.query.categoryFilter;
        const priceFilter = req.query.priceFilter;
        const discountFilter = req.query.discountFilter;

        let whereCondition = {};

        if(categoryFilter !== ''){
            whereCondition.categoryId = categoryFilter;
        }

        if(priceFilter != 100000){
            whereCondition.price ={
                [Op.between]: [priceFilter <= 500? priceFilter : priceFilter - 500, priceFilter <= 99.500? priceFilter + 500: priceFilter]
            };
        }

        if(discountFilter != 0){
            whereCondition.discount = discountFilter;
        }

        const categories = await CategoryProduct.findAll();

        const productsFound = await Product.findAll({
            where: {
                [Op.or]: whereCondition
            },
            include: [{ association: 'category'}]
        }); 

         return res.render('productsList', { products : productsFound, categories});
    }
}

module.exports = productController;