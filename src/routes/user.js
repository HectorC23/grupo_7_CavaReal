const express = require("express");

const routes = express.Router();

const userController = require('../controllers/userController')

routes.get('/register', userController.register);
routes.get('/login', userController.login);

module.exports = routes;