const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

const guestPermissions = require("../middlewares/guestPermissions");
const userPermissions = require("../middlewares/userPermissions");
const multer = require("../middlewares/multer");
const validationsRegister= require('../middlewares/validationsRegister');
const validationLogin= require('../middlewares/validationLogin');

router.get('/register', guestPermissions, userController.register);
router.post('/register',multer.single('image'), validationsRegister, userController.create)

router.get('/edit/:id', userPermissions, userController.edit);
router.put('/edit/:id', multer.single('image'), validationsRegister, userController.update);

router.get('/login',guestPermissions, userController.login); 
router.post('/login', validationLogin, userController.process);

router.get('/profile/:id',userPermissions, userController.profile);

router.get('/logout', userPermissions, userController.logout)


module.exports = router;