const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');
const guestPermissions = require("../middlewares/guestPermissions");
const userPermissions = require("../middlewares/userPermissions");

router.get('/register', userController.register);
router.get('/login', guestPermissions ,userController.login);
router.get('/profile', userController.profile);

module.exports = router;