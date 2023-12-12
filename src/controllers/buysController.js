const db = require('../database/models');
const Cart = db.Cart;
const UserProduct = db.UserProduct;
const ProductCart = db.ProductCart;

const buysController = {
    add: async(req, res) => {

        const cart = await Cart.findByPk(req.params.idCart);

        const productsCart = await ProductCart.findAll({
            where: {
                cartId: req.params.idCart
            }
        });

        await Promise.all(
        productsCart.map( async(product) => {
             await UserProduct.create({
                productId: product.productId,
                userId: cart.userId,
                amount: product.amount,
                dateBuy: Date.now()
            });
        }));

        return res.redirect(`/cart/${cart.userId}`);
    }
}

module.exports = buysController;