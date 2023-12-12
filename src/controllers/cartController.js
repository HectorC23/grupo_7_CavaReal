const sequelize = require('sequelize');
const { Op } = require('sequelize');
const db = require('../database/models');
const User = db.User
const Cart = db.Cart
const Product = db.Product
const ProductCart = db.ProductCart

const cartController = {
    list : async(req, res) => {
       
    if(res.locals.isUserLogger){

        const now = new Date(Date.now());
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1.
        const day = now.getDate();

        const date = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        console.log(date);

        const cart = await Cart.findOne({
            where: {
                id: {
                    [Op.eq]: sequelize.literal(`(SELECT MAX(id) FROM carts WHERE userId = ${res.locals.userLogged.id} AND creationDate = "${date}")`),
                },
           },
           include: [{association: 'user'}]
       });

       const products = await ProductCart.findAll({
        where:{
            cartId: cart.id
        },
        include:[{ model: Product }]
       })

       return res.render('shoppingCart', { cart, products });
       
    } else{
        return res.render('shoppingCart', { cart: {totalPrice: -5000},products : []});
    }
    },
    create : (req, res) => {
        const idUser = req.params.idUser;

       Cart.create({
                userId: idUser,
                amount: 0,
                totalPrice: 0,
                creationDate: Date.now()
        });

        return res.redirect(`/user/profile/${idUser}`)
    },
    add: async(req, res) => {
        const now = new Date(Date.now());
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Los meses comienzan desde 0, por lo que sumamos 1.
        const day = now.getDate();

        const date = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        const cart = await Cart.findOne({
            where: {
                id: {
                    [Op.eq]: sequelize.literal(`(SELECT MAX(id) FROM carts WHERE userId = ${res.locals.userLogged.id} AND creationDate = "${date}")`),
                }
            }
        });

        const productCartExist = await ProductCart.findOne({
            where:{
                cartId: cart.id,
                productId: req.params.idProduct,
            }
        })

        let productCart;

        if(productCartExist){
            await ProductCart.update({
                amount: sequelize.literal(`amount + ${req.body.amount? req.body.amount : 1}`),
            },
            {
                where:{
                    cartId: cart.id,
                    productId: req.params.idProduct,
                }
            });

            productCart = await ProductCart.findOne({
                where:{
                    cartId: cart.id,
                    productId: req.params.idProduct,
                }
            });

            const product= await Product.findByPk(req.params.idProduct);

            await Cart.update({
                amount: sequelize.literal(`amount + ${req.body.amount? req.body.amount : 1}`),
                totalPrice: sequelize.literal(`totalPrice + ${product.price * (req.body.amount? req.body.amount : 1)}`)
            }, {
                where: {
                    id: cart.id
                }
            })

        }else{
            productCart = await ProductCart.create({
                cartId: cart.id,
                productId: req.params.idProduct,
                amount: req.body.amount? req.body.amount : 1
            });

            const product= await Product.findByPk(req.params.idProduct);

            await Cart.update({
                amount: sequelize.literal(`amount + ${productCart.amount}`),
                totalPrice: sequelize.literal(`totalPrice + ${product.price * productCart.amount}`)
            }, {
                where: {
                    id: cart.id
                }
            })
        }
            
            return res.redirect('/cart');
    },
    remove : async(req, res) => {
        const now = new Date(Date.now());
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();

        const date = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;


        console.log('User ID:', res.locals.userLogged.id);

        const cart = await Cart.findOne({
            where: {
                id: {
                    [Op.eq]: sequelize.literal(`(SELECT MAX(id) FROM carts WHERE userId = ${res.locals.userLogged.id} AND creationDate = "${date}")`),
                }
            }
        });

        await ProductCart.destroy({
            where: {
                cartId: cart.id,
                productId: req.params.idProduct,
            }
        })

        return res.redirect('/cart');
    }
}

module.exports = cartController;