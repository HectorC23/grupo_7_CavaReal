const express = require("express");
const productsController = require("../../controllers/api/productsController");
const router = express.Router();

router.get('/', productsController.all);
router.get('/most-sold', productsController.mostSold);
router.get('/last-sold', productsController.lastSold);
router.get('/sales', productsController.sales);
router.get('/:id', productsController.detail);

router.get('/:imageName', productsController.img);

module.exports = router