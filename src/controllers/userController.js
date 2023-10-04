const userJson = require("../data/user.json");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');
const { error } = require("console");

const controllerUser = {
    register: (req,res)=> {
        res.render("users/register");
    },
    login: (req,res)=> {
        res.render("users/login")
    },
    profile: (req, res) => {
        //const user = req.locals.userProfile;
        const discountUser = 20;
        // switch (req.body.membershipLevel) {
        //     case 'Platinum': discountUser = 25;
        //         break;
        //     case 'Gold': discountUser = 15;
        //     break;
        //     case 'Silver': discountUser = 10;
        //     break;
        //     case 'Bronze': discountUser = 5;
        //     break;
        //     default: discountUser=0;
        // }

        res.locals.discount=discountUser;

        const user = {
                id: 1,
                firstName: "Juan",
                lastName: "Pérez",
                userName: "Juan_P",
                email: "juan.perez@example.com",
                password: "contraseña123",
                category: "Cliente",
                image: "/users/foto-perfil.jpg",
                address: "Calle Principal 123",
                state: "Argentina",
                postalCode: "12345",
                phone: "+1234567890",
                birthday: "1990-05-15",
                subscripcion: "Activa",
                membershipLevel: "Platinum"
        }
        res.render('users/profile', { user });
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
            user.image = req.file ? req.file.filename : 'foto-perfil.jpg' ;
            user.password = user.password ? bcrypt.hashSync(user.password, 10) : null;
            delete user.passwordConfirmation;
    
            userJson.push(user);
    
            fs.writeFileSync(path.join(__dirname, '../data/user.json'),JSON.stringify(userJson),{encoding: 'utf-8'});
            res.redirect('/user/profile')
        } else {

            res.render('users/register', {errors: errors.mapped(), old: req.body});
            
        }
        
    }

}

module.exports = controllerUser;