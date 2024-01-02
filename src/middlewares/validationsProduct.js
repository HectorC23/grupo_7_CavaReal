const db = require('../database/models');
const User = db.User;

const path = require('path');

const { body } = require('express-validator');
const validationsProduct = [
    body('name').trim().notEmpty().withMessage('Tienes que escribir el nombre').isLength({ min: 5 , max: 100 }).withMessage('Debe tener minimo 5 caracteres'),
    body('description').trim().notEmpty().withMessage('El campo está vacio').isLength({ min: 20 }).withMessage('Debe tener minimo 20 caracteres'),
    body('categoryId').trim().notEmpty().withMessage('Debe seleccionar una categoria').isNumeric().isIn([1,2,3]).withMessage('Categoria Invalida'),
    body('price').trim().notEmpty().withMessage('El campo está vacio').bail().isInt({min: 0, max:100000}).withMessage('El precio debe estar entre 0 y 100000'),
    body('img').custom((value, { req }) => {

      if(!req.file){
        return true;
      }

      const allowedExtensions = ['.png'];
      const fileExtension = path.extname(req.file.originalname);

      if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
          throw new Error('Extensión no válida. Permitida: .png');
      }

        req.session.imagePath = req.file.filename;
        return true;
    }),
    //WINES
    body('vineyard')
    .if((value, { req }) => req.body.vineyard) 
    .custom((value, { req }) => {
        if (req.body.categoryId == 1) {
            return true;
        } else {
            throw new Error('Categoria invalida');
        }
    }).bail().isLength({ min: 3, max: 100 }).withMessage('Debe tener entre 3 y 100 caracteres'),
    body('age')
    .if((value, { req }) => req.body.age)
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('altitude')
    .if((value, { req }) => req.body.altitude)
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isLength({ min: 5 , max: 150 }).withMessage('Debe tener minimo 5 caracteres'),
    body('variety')
    .if((value, { req }) => req.body.variety)
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isLength({ min: 5 , max: 150 }).withMessage('Debe tener minimo 5 caracteres'),
    body('barrels')
    .if((value, { req }) => req.body.barrels)
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('saved')
    .if((value, { req }) => req.body.saved)
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    //catadores
    body('fruity')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('nothing')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('dry')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('king')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('velvety')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('light')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
    body('delicate')
    .custom((value, { req }) => {
      if(req.body.categoryId == 1){
        return true
      }else{
          throw new Error('Categoria invalida');
      }
    }).bail().isInt({ min: 0 , max: 100 }).withMessage('Valor minimo 0 maximo 100'),
]

module.exports = validationsProduct;