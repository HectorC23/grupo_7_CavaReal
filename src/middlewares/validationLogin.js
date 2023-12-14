const { body } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../database/models');
const User = db.User;

const validationLogin = [ 
    body('email').trim().notEmpty().withMessage('El campo está vacio').isEmail().withMessage('Tienes que escribir un email valido').bail()
    .custom(async (value) => {

      const existeEmail = await User.findOne({
        where: {
          email: value.trim()
        }
      });

      if (!existeEmail) {
      throw new Error('No existe cuenta con ese email');
      }
      return true;
  }),
    body('password').trim().notEmpty().withMessage('El campo está vacio')
    .custom(async (value, {req}) => {

      const existeEmail = await User.findOne({
        where: {
          email: req.body.email
        }
      });

      const passwordValid = bcrypt.compareSync(value,existeEmail.dataValues.password);
      console.log(passwordValid);

      if (existeEmail &&  !bcrypt.compareSync(value,existeEmail.dataValues.password)) {
      throw new Error('Contraseña incorrecta. Intente de nuevo');
      }
      return true;
  }),
]

module.exports = validationLogin;