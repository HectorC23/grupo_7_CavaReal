const { Op } = require('sequelize');
const db = require('../database/models');
const User = db.User;

const path = require('path');

const { body } = require('express-validator');
const validaciones = [
    body('userName').trim().notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail()
    .custom(async (value, {req}) => {

        const existeUsuario = await User.findOne({
          where: {
            id:{
              [Op.ne]: req.session.userLogged.id
            },
            userName: value.trim()
          }
        });

        if (existeUsuario) {
        throw new Error('El nombre de usuario ya está en uso.');
        }
        return true;
    }),
    body('phone').trim().notEmpty().withMessage('El campo está vacio'),
    body('password').trim().notEmpty().withMessage('El campo está vacio').bail().isLength({ min: 8 }).withMessage('Debe tener minimo 8 caracteres').bail().matches(/[A-Z]/).withMessage('Debe contener al menos una MAYUSCULA').bail().matches(/[a-z]/).withMessage('Debe contener al menos una minuscula').bail().matches(/[0-9]/).withMessage('Debe contener al menos un número'),
    body('passwordConfirmation').trim().notEmpty().withMessage('El campo está vacio').bail()
    .custom((value, { req }) => {

      console.log('HOLAAAAAAA');
        if (value !== req.body.password) {
          console.log('NO COINCIDEEEEN');
          throw new Error('Las contraseñas no coinciden.');
        }
        return true;
    }),
    body('image').custom((value, { req }) => {

        if(!req.file){
          return true;
        }
  
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        const fileExtension = path.extname(req.file.originalname);
  
        if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
          throw new Error('Extensión no válida.Permitidas: jpg, jpeg, png, gif.');
        }
  
          req.session.imagePath = req.file.filename;
          return true;
        }),   
]

module.exports = validaciones;