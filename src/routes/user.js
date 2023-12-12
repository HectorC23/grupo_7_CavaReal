const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const guestPermissions = require("../middlewares/guestPermissions");
const userPermissions = require("../middlewares/userPermissions");
const multer = require("../middlewares/multer");

const validationsRegister= require('../middlewares/validationsRegister');
const validationLogin= require('../middlewares/validationLogin');
const validationEditUser= require('../middlewares/validationEditUser');

router.get('/register', guestPermissions, userController.register);
router.post('/register', guestPermissions, multer.single('image'), validationsRegister, userController.create)

router.get('/edit/:id', userPermissions, userController.edit);
router.put('/edit/:id', userPermissions, multer.single('image'), validationEditUser, userController.update);

router.get('/login',guestPermissions, userController.login); 
router.post('/login', guestPermissions, validationLogin, userController.process);

router.get('/profile/:id',userPermissions, userController.profile);

router.get('/logout', userPermissions, userController.logout)


module.exports = router;