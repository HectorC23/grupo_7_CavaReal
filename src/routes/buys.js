const express = require("express");
const buysController = require("../controllers/buysController");
const router = express.Router();

router.post('/:idCart', buysController.add);

module.exports = router;