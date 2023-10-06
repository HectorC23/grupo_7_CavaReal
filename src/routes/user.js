const express = require("express");
const { body } = require('express-validator');
const router = express.Router();
const validationlogin = [ body('email').trim().isEmail().withMessage('El campo está vacio'),
body('password').trim().notEmpty().withMessage('El campo está vacio').bail().isLength({ min: 8 }).withMessage('Debe tener minimo 8 caracteres')]

const userController = require('../controllers/userController');
const guestPermissions = require("../middlewares/guestPermissions");
const userPermissions = require("../middlewares/userPermissions");
const multer = require("../middlewares/multer");
const validaciones = require('../middlewares/validationsRegister');

router.get('/register', guestPermissions,userController.register);
router.post('/register',multer.single('img'), validaciones, userController.registerAdd)

router.get('/login',guestPermissions ,userController.login); 
router.post('/login',userController.loginProcess);
router.get('/logout', userPermissions, userController.logout)
router.get('/profile',userPermissions,userController.profile);

module.exports = router;