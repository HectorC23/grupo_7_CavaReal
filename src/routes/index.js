const express = require("express");

const router = express.Router();

const indexController = require('../controllers/indexController')


router.get(['/', '/home'], indexController.home);
router.get('/carrito', indexController.carrito);

//BORRAR
/* router.get('/detail', indexController.detail);
router.get('/add', indexController.add);
router.get('/cart', indexController.cart);

router.get('/u/login', indexController.login);
router.get('/u/profile', indexController.profile);
router.get('/u/register', indexController.register);
router.get('/u/edit', indexController.edit); */

module.exports = router;
