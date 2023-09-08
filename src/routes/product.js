const express = require("express");

const router = express.Router();


const productController = require('../controllers/productController')


router.get('/detail/:id', productController.detalle);

router.get('/add', productController.add);

router.put("/edit/:id?", productController.process);

router.get('/edita/:id', productController.edit);

module.exports = router;