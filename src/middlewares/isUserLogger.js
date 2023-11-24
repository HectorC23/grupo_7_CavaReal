const db = require('../database/models');
const User = db.User;

const isUserLogger = (req, res, next) => {
    res.locals.isUserLogger = false;


    // let emailCookie = req.cookies.userEmail;
    // let userCookie = users.find(e => e.email == emailCookie)
    // console.log(userCookie);
    
    // console.log(req.session.userLogged);
    
    // if(userCookie) {
    //     req.session.userLogged = userCookie;
    //     res.locals.isUserLogger = true;
    // }

    // if(req.session.userLogged){
    //     res.locals.isUserLogger = true;
    //     res.locals.userLogged = req.session.userLogged;
    // }
    // console.log(res.locals.isUserLogger);       
    // next();

    if(req.cookies.userEmail){

        // let userCookie = users.find(e => e.email == emailCookie)
        req.session.userLogged = User.findOne({
            where:{
                email: req.cookies.userEmail
            }
        });
    }


    if(req.session.userLogged){

        res.locals.userLogged = req.session.userLogged;
        res.locals.isUserLogger = true;

        req.session.isUserLogger = true;
    }

    next();
}

module.exports = isUserLogger;