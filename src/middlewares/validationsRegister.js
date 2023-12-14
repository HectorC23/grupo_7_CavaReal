const db = require('../database/models');
const User = db.User;

const path = require('path');

const { body } = require('express-validator');

const validaciones = [
    body('firstName').trim().notEmpty().withMessage('Tienes que escribir tu nombre').isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    body('lastName').trim().notEmpty().withMessage('Tienes que escribir tu apellido').isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    body('userName').trim().notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail()
    .custom(async (value) => {

        const existeUsuario = await User.findOne({
          where: {
            userName: value.trim()
          }
        });

        if (existeUsuario) {
        throw new Error('El nombre de usuario ya está en uso.');
        }
        return true;
    }),
    body('phone').trim().notEmpty().withMessage('El campo está vacio'),
    body('birthdate').trim().notEmpty().withMessage('El campo está vacio').bail().isBefore(new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toString()).withMessage('Debes ser mayor de edad para crear una cuenta'),
    body('email').trim().notEmpty().withMessage('El campo está vacio').isEmail().withMessage('Tienes que escribir un email valido').bail()
    .custom(async (value) => {

      const existeEmail = await User.findOne({
        where: {
          email: value
        }
      });

      if (existeEmail) {
      throw new Error('El email ya está en uso.');
      }
      return true;
  }),
    body('password').trim().notEmpty().withMessage('El campo está vacio').bail().isLength({ min: 8 }).withMessage('Debe tener minimo 8 caracteres').bail().matches(/[A-Z]/).withMessage('Debe contener al menos una MAYUSCULA').bail().matches(/[a-z]/).withMessage('Debe contener al menos una minuscula').bail().matches(/[0-9]/).withMessage('Debe contener al menos un número'),
    body('passwordConfirmation').trim().notEmpty().withMessage('El campo está vacio').bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
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