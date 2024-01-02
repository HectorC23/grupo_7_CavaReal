const express = require("express");
const productsController = require("../../controllers/api/categoriesController");
const router = express.Router();

router.get('/', productsController.categories);
router.get('/count', productsController.count);

module.exports = router