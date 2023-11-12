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
                userId: cart.userId
            });
        }));
    },
    list: async(req, res) => {
        const products = await UserProduct.findAll({
            where: {
                userId: userLogged.id 
            }
        });

        return res.render('shopping', { products });
    }
}

module.exports = buysController;