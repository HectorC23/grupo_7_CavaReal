const { body } = require('express-validator');
const validationLogin = [ 
    body('email').trim().isEmail().withMessage('El campo está vacio'),
    body('password').trim().notEmpty().withMessage('El campo está vacio').bail().isLength({ min: 8 }).withMessage('Debe tener minimo 8 caracteres')
]

module.exports = validationLogin;