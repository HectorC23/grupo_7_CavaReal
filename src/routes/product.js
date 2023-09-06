const express = require("express");

const routes = express.Router();


const productController = require('../controllers/productController')


routes.get('/detail/:id', productController.productoDetalle);
routes.get('/add', productController.productAdd);


module.exports = routes;