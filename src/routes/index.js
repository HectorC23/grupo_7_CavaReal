const express = require("express");

const router = express.Router();

const indexController = require('../controllers/indexController')


router.get(['/', '/home'], indexController.home);
router.get('/carrito', indexController.carrito);

module.exports = router;
