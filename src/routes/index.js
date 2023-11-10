const express = require("express");

const router = express.Router();

const indexController = require('../controllers/indexController')


router.get(['/', '/home'], indexController.home);
router.get('/carrito', indexController.carrito);

//BORRAR
router.get('/detail', indexController.detail);
router.get('/add', indexController.add);
router.get('/cart', indexController.cart);

module.exports = router;
