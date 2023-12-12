const bcrypt = require('bcryptjs');

const { validationResult, cookie } = require('express-validator');
const { error, log } = require("console");

const db = require('../database/models');
const User = db.User;
const CategoryUser = db.CategoryUser;
const Product = db.Product;
const UserProduct = db.UserProduct;

const userController = {
    register: (req,res)=> {
        res.render("users/register");
    },
    create: async (req,res) => {
        let errors = validationResult(req);

        console.log(errors);

        if(errors.isEmpty()){
        let medal = Math.random();

       await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password? bcrypt.hashSync(req.body.password, 10) : null,
            phone: req.body.phone,
            birthdate: req.body.birthdate,
            address: req.body.address,
            postalCode: req.body.postalCode,
            state: req.body.state,
            subscription: +req.body.subscription,
            membershipLevel: medal < 0.2 ? 'Bronze' : (medal < 0.4 ? 'Silver' : (medal < 0.6 ? 'Gold' : 'Platinum') ),
            image: req.file? req.file.filename : 'foto-perfil',
            categoryId: 1,
        });
        
        return res.redirect('/');

        } else {

           return res.render('users/register', {errors: errors.mapped(), old: req.body});
            
        }
        
    },
    login: (req,res)=> {
        res.render("users/login");
    },
    process: (req, res) => {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(userToLogin => {

                let passwordConfirm = bcrypt.compareSync(req.body.password,userToLogin.password);
                 if(passwordConfirm){
                    console.log("contraseña confirmada");
                    req.session.userLogged = userToLogin;
                    req.session.isUserLogger = true;    

                    if(req.body.keepUserLogger == "true"){
                        console.log('Coockie guardada');
                        res.cookie('userEmail',req.body.email, {maxAge: 90000000});
                     }

                    return res.redirect(`/cart/${userToLogin.id}`)
                 }
                 return res.render("users/login", {
                    errors: {
                        email: {
                            msg:'Credenciales invalidas'
                        }
                    }
                })
            }).catch(error => {
                return res.render("users/login", {
                    errors: {
                        email: {
                            msg:'Email no registrado'
                        }
                    }
                })
            })
    },
    edit: async (req,res)=> {

        const user = await User.findByPk(req.params.id);

        return res.render('users/edit', { user });
    },
    update: async (req,res) => {

        let errors = validationResult(req);
        const id = +req.params.id;

        const original = await User.findByPk(id);
        const imageUser = original.img;

        console.log(errors);

        console.log(req.body);

        if(errors.isEmpty()){

        await User.update({
            userName: req.body.userName,
            password: req.body.password? bcrypt.hashSync(req.body.password, 10) : null,
            phone: req.body.phone,
            address: req.body.address,
            postalCode: req.body.postalCode,
            state: req.body.state,
            image: req.file ? req.file.filename : imageUser ,
        },{
            where: {
                id: id
            }
        });

            res.redirect(`/user/profile/${id}`);

        } else {

            res.render('users/edit', {errors: errors.mapped(), old: req.body, user:{}});
            
        }
        
    },    
    profile: async (req, res) => {
        const id = +req.params.id;

       const user = await User.findByPk(id);

       const products = await UserProduct.findAll({
        where: {
            userId: id
        },
         include:[{ model: Product }]
        });

        console.log(products);

        return res.render('users/profile', { user, products });
    },
    
    logout: (req, res) => {
        
        req.session.destroy();
        res.cookie('userEmail',req.body.email, {maxAge: 0});
        delete res.locals;
        return res.redirect('/');
    }

}

module.exports = userController;