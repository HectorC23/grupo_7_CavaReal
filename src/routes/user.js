const express = require("express");
const { body } = require('express-validator');
const router = express.Router();

const userController = require('../controllers/userController');
const guestPermissions = require("../middlewares/guestPermissions");
const userPermissions = require("../middlewares/userPermissions");
const multer = require("../middlewares/multer");
const validaciones = require('../middlewares/validationsRegister');

router.get('/register', userController.register);
router.post('/register',multer.single('img'), validaciones, userController.registerAdd)

router.get('/login', guestPermissions ,userController.login);
router.get('/profile', userController.profile);

module.exports = router;