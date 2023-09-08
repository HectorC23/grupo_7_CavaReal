const express = require("express");

const router = express.Router();


const productController = require('../controllers/productController')


router.get('/detail/:id', productController.detalle);
router.get('/add', productController.add);

//update
router.put("/edit/:id", productController.process);

router.post("/:id", productController.deleteProduct);

module.exports = router;