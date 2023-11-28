const Cart = require('../database/models/Cart');
const UserProduct = require('../database/models/UserProduct');
const ProductCart = require('../database/models/ProductCart');

const buysController = {
    add: async(req, res) => {

        const cart = await Cart.findByPk(req.params.idCart);

        const productsCart = await ProductCart.findAll({
            where: {
                idCart: req.params.idCart
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

        return res.redirect(`/user/profile/${cart.userId}`);
    }
}

module.exports = buysController;