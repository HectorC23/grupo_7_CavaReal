const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

const userPermissions = require('../middlewares/userPermissions');

router.get('/:idUser', userPermissions, cartController.create);
router.get('/', cartController.list);
router.get('/add/:idProduct', userPermissions, cartController.add);
router.post('/add/:idProduct', userPermissions, cartController.add);
router.delete('/delete/:idProduct', userPermissions, cartController.remove);


module.exports = router;
