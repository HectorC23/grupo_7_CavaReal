const { body } = require('express-validator');
const validaciones = [
    body('firstName').trim().notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('lastName').trim().notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('userName').trim().notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail()
    .custom((value) => {
        const userJSON = require('../data/user.json')
        const existeUsuario = userJSON.find((usuario) => usuario.userName === value);
    
        if (existeUsuario) {
        throw new Error('El nombre de usuario ya está en uso.');
        }
        return true;
    }),
    body('edad').trim().notEmpty().withMessage('El campo está vacio').bail().isBefore(new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toString()).withMessage('Fecha no valida'),
    body('email').trim().isEmail().withMessage('El campo está vacio'),
    body('password').trim().notEmpty().withMessage('El campo está vacio').bail().isLength({ min: 8 }).withMessage('Debe tener minimo 8 caracteres').bail().matches(/[A-Z]/).withMessage('Debe contener al menos una MAYUSCULA').bail().matches(/[a-z]/).withMessage('Debe contener al menos una minuscula').bail().matches(/[0-9]/).withMessage('Debe contener al menos un número'),
    body('passwordConfirmation').trim().notEmpty().withMessage('El campo está vacio').bail().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden.');
        }
        return true;
      })
]

module.exports = validaciones;