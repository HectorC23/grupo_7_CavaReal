const express = require("express");
const buysController = require("../controllers/buysController");
const router = express.Router();

router.post('/add/:idCart', buysController.add);
router.get('/', buysController.list);

module.exports = router;