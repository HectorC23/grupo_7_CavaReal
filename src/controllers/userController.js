const bcrypt = require('bcryptjs');

const { validationResult, cookie } = require('express-validator');

const db = require('../database/models');
const User = db.User;
const CategoryUser = db.CategoryUser;
const Product = db.Product;
const UserProduct = db.UserProduct;

function getMaxBirthdate() {
    const now = new Date(Date.now());
    const year = now.getFullYear() - 18;
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const date = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    return date
}

const userController = {
    register: (req,res)=> {
        
        const date = getMaxBirthdate();

        res.render("users/register", {imagePath: null, date});
    },
    create: async (req,res) => {
        let errors = validationResult(req);

        console.log(errors);

        let imagePath;

        if(req.session.imagePath){
        imagePath = req.session.imagePath;
        }

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
            image: imagePath? imagePath : 'foto-perfil.jpg',
            categoryId: 1,
        });
        
        delete req.session.imagePath;
        return res.redirect('/');

        } else {
            const date = getMaxBirthdate();

           return res.render('users/register', {errors: errors.mapped(), old: req.body, imagePath: req.session.imagePath? '/images/users/' + imagePath : null, date});

           console.log(imagePath);
            
        }
    },
    login: (req,res)=> {
        res.render("users/login");
    },
    process: (req, res) => {

        let errors = validationResult(req);

        console.log(errors);

        if(errors.isEmpty()){
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
        } else {

           return res.render('users/login', {errors: errors.mapped(), old: req.body});
            
        }
    },
    edit: async (req,res)=> {

        const user = await User.findByPk(req.params.id);

        return res.render('users/edit', { user, imagePath: null});
    },
    update: async (req,res) => {

        let errors = validationResult(req);
        const id = +req.params.id;

        let imagePath;

        if(req.session.imagePath){
        imagePath = req.session.imagePath;
        }

        const original = await User.findByPk(id);

        const imageUser = original.dataValues.image;

        console.log(errors);

        if(errors.isEmpty()){

        await User.update({
            userName: req.body.userName,
            password: req.body.password? bcrypt.hashSync(req.body.password, 10) : null,
            phone: req.body.phone,
            address: req.body.address,
            postalCode: req.body.postalCode,
            state: req.body.state,
            image: imagePath? imagePath : imageUser ,
        },{
            where: {
                id: id
            }
        });
            delete req.session.imagePath;
            res.redirect(`/user/profile/${id}`);

        } else {

            res.render('users/edit', {errors: errors.mapped(), old: req.body, user:{id: id}, imagePath: imagePath? '/images/users/' + imagePath : '/images/users/' + imageUser});
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