const fs = require('fs');
const { dirname } = require('path');

const db = require('../database/models');

const Product = db.Product;
const CategoryProduct = db.CategoryProduct;
const DetailProduct = db.DetailProduct;
const Attribute = db.Attribute;

const path = require('path');
const { Op } = require('sequelize');

const productController = {
    add: async(req,res)=> {
         const categories = await CategoryProduct.findAll();
            res.render("productAdd", { categories, details : []});
    },
    create: async(req,res) => {
        try {
            const product = await Product.create({
              name: req.body.name,
              description: req.body.description,
              price: parseFloat(req.body.price),
              img: req.file.filename,
              categoryId: +req.body.categoryId,
            });
        
            const categoryProduct = product.categoryId;
        
            const attributesProduct = await Attribute.findAll({
              where: {
                categoryId: categoryProduct,
              },
            });
        
            await Promise.all(
              attributesProduct.map(async (attribute) => {
                await DetailProduct.create({
                  productId: +product.id,
                  attributeId: +attribute.id,
                  value: req.body[attribute.name]
                });
              })
            );
        
            return res.redirect('/home');
          } catch (error) {
            console.error('Error al crear el producto:', error);
            return res.status(500).send('Error interno al crear el producto');
          }
    },
    edit: async(req, res) => {
        const idProduct = req.params.id;

        try {
        const product = await Product.findByPk(idProduct, {
            include: [{association: 'category'}]
        });

        const details = await DetailProduct.findAll({
            where:{
                productId : idProduct
            },
            include: [{ model: Attribute }]
        })

        console.log(product.id + 'HOLAAAAAA');
        res.render("productEdit", { product , details } );
        }catch(error){
            console.error('Error al obtener detalles del producto:', error);
            res.status(500).send('Error interno al obtener detalles del producto');
        }
    },
    update: async(req,res)=>{
        try{        
            
        const idProduct = +req.params.id;

        const original = await Product.findByPk(idProduct);
        const imageProduct = original.img;
        const categoryProduct = original.categoryId;

        const product = await Product.update({
              name: req.body.name,
              description: req.body.description,
              price: parseFloat(req.body.price),
              img: req.file? req.file.filename : imageProduct,
              categoryId: +categoryProduct,
        },{
            where:{
                id: idProduct
            }
        })

        const attributesProduct = await Attribute.findAll({
            where: {
                categoryId: categoryProduct
            }
        });

        await Promise.all(
            attributesProduct.map(async (attribute) => {
                await DetailProduct.update({
                    value: req.body[attribute.name]
                },{
                    where:{
                        productId: idProduct,
                        attributeId: attribute.id
                    }
                })
            })
        );

        res.redirect(`/product/detail/${idProduct}`);

        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            return res.status(500).send('Error interno al actualizar el producto');
        }
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

        const attributesProduct = await DetailProduct.findAll({
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