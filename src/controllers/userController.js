const userJson = require("../data/user.json");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const { validationResult, cookie } = require('express-validator');
const { error } = require("console");

const controllerUser = {
    register: (req,res)=> {
        res.render("users/register");
    },
    login: (req,res)=> {
        res.render("users/login")
    },
    loginProcess: (req, res) => {
        console.log(req.body);
        const userToLogin = userJson.find(user => user.email === req.body.email);
            if (userToLogin) {
                let passwordConfirm = bcrypt.compareSync(req.body.password,userToLogin.password);
                 if(passwordConfirm){
                    console.log("contraseña confirmada");
                    // delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    req.session.isUserLogger = true;                    
                    if(req.body.keepUserLogger == "true"){
                        console.log('Coockie guardada');
                        res.cookie('userEmail',req.body.email, {maxAge: 90000000});
                     }
                    return res.redirect('/user/profile')
                 }
                 return res.render("users/login", {
                    errors: {
                        email: {
                            msg:'Credenciales invalidas'
                        }
                    }
                })
            }

            return res.render("users/login", {
                errors: {
                    email: {
                        msg:'Email no registrado'
                    }
                }
            })

    },    
    profile: (req, res) => {
        
        const userLogger = req.session.userLogged;

        return res.render('users/profile', { user: userLogger });
    },
    registerAdd: (req,res) => {
        // "id": 1,
        // "firstName": "Juan",
        // "lastName": "Pérez",
        // "email": "juan.perez@example.com",
        // "password": "contraseña123",
        // "category": "Cliente",
        // "image": "juan_perez.jpg",
        // "address": "Calle Principal 123",
        // "state": "Argentina",
        // "postalCode": "12345",
        // "phone": "+1234567890",
        // "edad": "1990-05-15",
        // "subscripcion": "Activa",
        // "membershipLevel": "Platinum"

        let errors = validationResult(req);

        if(errors.isEmpty()){
            const user = req.body;
            user.id = Date.now();
            user.category = "Cliente"
            user.image = req.file ? req.file.filename : 'foto-perfil' ;
            user.password = user.password ? bcrypt.hashSync(user.password, 10) : null;
            delete user.passwordConfirmation;
            user.birthdate;
            let medal = Math.random()
            user.membershipLevel = medal < 0.2 ? 'Bronze' : (medal < 0.4 ? 'Silver' : (medal < 0.6 ? 'Gold' : 'Platinum') )
    
            userJson.push(user);
    
            fs.writeFileSync(path.join(__dirname, '../data/user.json'),JSON.stringify(userJson, null, 4),{encoding: 'utf-8'});
            res.redirect('/user/profile')
        } else {

            res.render('users/register', {errors: errors.mapped(), old: req.body});
            
        }
        
    },
    logout: (req, res) => {
        
        req.session.destroy();
        // res.clearCookie('userEmail');
        res.cookie('userEmail',req.body.email, {maxAge: 0});
        delete res.locals;
        return res.redirect('/');
    }

}

module.exports = controllerUser;