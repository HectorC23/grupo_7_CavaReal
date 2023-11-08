const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.post('/:idUser', cartController.create);
router.get('/', cartController.list);
router.post('/add/:idProduct', cartController.add);
router.delete('/delete/:idProduct', cartController.remove);


module.exports = router;
