const express = require("express");

const routes = express.Router();

const userController = require('../controllers/userController')
const productController = require('../controllers/productController')


routes.get(['/', '/home'], userController.home);
routes.get('/register', userController.register);
routes.get('/login', userController.login);
routes.get('/carrito', productController.carrito);
routes.get('/productDetail/:id', productController.productoDetalle);
routes.get('/productAdd', productController.productAddView);

routes.post('/productAdd',productController.productAdd);

module.exports = routes;
