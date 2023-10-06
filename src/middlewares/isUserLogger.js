const users = require('../data/user.json');

const isUserLogger = (req, res, next) => {
    res.locals.isUserLogger = false;


    let emailCookie = req.cookies.userEmail;
    let userCookie = users.find(e => e.email == emailCookie)
    console.log(userCookie);
    
    console.log(req.session.userLogged);
    
    if(userCookie) {
        req.session.userLogged = userCookie;
        res.locals.isUserLogger = true;
    }

    if(req.session.userLogged){
        res.locals.isUserLogger = true;
        res.locals.userLogged = req.session.userLogged;
    }
    console.log(res.locals.isUserLogger);       
    next();
}

module.exports = isUserLogger;