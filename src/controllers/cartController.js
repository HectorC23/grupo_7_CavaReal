const User = require('../database/models/User');
const Cart = require('../database/models/Cart');
const Product = require('../database/models/Product');
const ProductCart = require('../database/models/ProductCart');
const sequelize = require('sequelize');


const cartController = {
    list : (req, res) => {
       
        if(res.locals.isUserLogger){
        Cart.findOne({
             where: {
                 idUser: userLogged.id
            },
            include: [{association: 'user'},{association: 'products'}]
        }).then(cart => {
            return res.render('shoppingCart', { cart, products: cart.getProducts()});
        })
    } else{
        return res.render('shoppingCart');
    }
    },
    create : (req, res) => {
        User.findByPk(req.params.id).then(user => {
            Cart.create({
                userId: user.id,
                amount: 0,
                totalPrice: 0,
                creationDate: Date.now()
            });

            return res.redirect(`/user/profile/${user.id}`)
        })
    },
    add: async(req, res) => {
        const cart = await Cart.findOne({
            where: {
                idUser: userLogged.id
            }
        });

        const product = await ProductCart.create({
            cartId: cart.id,
            productId: req.params.idProduct,
        });

        const productPrice = await Product.findByPk(product.productId);

        await Cart.update({
            amount: sequelize.literal('amount + 1'),
            totalPrice: sequelize.literal(`totalPrice + ${productPrice.price}`)
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