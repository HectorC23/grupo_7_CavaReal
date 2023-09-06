const express = require("express");

const routes = express.Router();


const productController = require('../controllers/productController')


routes.get('/detail/:id', productController.productoDetalle);
routes.get('/add', productController.productAdd);
routes.get('/add/:id', productController.edit);

module.exports = routes;