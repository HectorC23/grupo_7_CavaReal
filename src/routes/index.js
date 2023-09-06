const express = require("express");

const routes = express.Router();

const indexController = require('../controllers/indexController')


routes.get(['/', '/home'], indexController.home);
routes.get('/carrito', indexController.carrito);

module.exports = routes;
