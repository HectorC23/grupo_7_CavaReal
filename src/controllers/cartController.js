const sequelize = require('sequelize');
const db = require('../database/models');
const User = db.User
const Cart = db.Cart
const Product = db.Product
const ProductCart = db.ProductCart

const cartController = {
    list : async(req, res) => {
       
    if(res.locals.isUserLogger){

        const cart = await Cart.findOne({
            where: {
                idUser: userLogged.id
           },
           include: [{association: 'user'}]
       });

       const products = await ProductCart.findAll({
        where:{
            cartId: cart.id
        },
        include:[{model: Product}]
       })

       return res.render('shoppingCart', { cart, products });
       
    } else{
        return res.render('shoppingCart');
    }
    },
    create : (req, res) => {
        const idUser = req.params.id;

       Cart.create({
                userId: idUser,
                amount: 0,
                totalPrice: 0,
                creationDate: Date.now()
            });

        return res.redirect(`/user/profile/${idUser}`)
    },
    add: async(req, res) => {
        const cart = await Cart.findOne({
            where: {
                idUser: userLogged.id
            }
        });

        const productCart = await ProductCart.create({
            cartId: cart.id,
            productId: req.params.idProduct,
            amount: req.body.amount
        });

        const product= await Product.findByPk(product.productId);

        await Cart.update({
            amount: sequelize.literal(`amount + ${productCart.amount}`),
            totalPrice: sequelize.literal(`totalPrice + ${product.price * productCart.amount}`)
        }, {
            where: {
                id: cart.id
            }
        })
            
            return res.redirect('/cart');
    },
    remove : async(req, res) => {
        const cart = await Cart.findOne({
            where: {
                idUser: userLogged.id
            }
        });

        const product = await ProductCart.destroy({
            where: {
                cartId: cart.id,
                productId: req.params.idProduct,
            }
        })

        return res.redirect('/cart');
    }
}

module.exports = cartController;