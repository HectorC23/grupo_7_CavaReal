const express = require("express");

const router= express.Router();

const controller = require("./main");

router.get("/home", controller.index);
router.get("/login", controller.login);
router.get("/detalle", controller.detalle);
router.get("/registro", controller.registro);
router.get("/carrito", controller.carrito);

module.exports= router;