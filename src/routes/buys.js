const express = require("express");
const buysController = require("../controllers/buysController");
const router = express.Router();

const userPermissions = require('../middlewares/userPermissions');

router.post('/:idCart', userPermissions ,buysController.add);

module.exports = router;