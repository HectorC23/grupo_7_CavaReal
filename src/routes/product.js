const express = require("express");

const router = express.Router();


const productController = require('../controllers/productController')


routes.get('/detail/:id', productController.productoDetalle);
routes.get('/add', productController.productAdd);

router.put("/edit/:id", productController.process);

routes.get('/add/:id', productController.edit);

module.exports = router;