const users = require('../data/user.json');

const isUserLogger = (req, res, next) => {
<<<<<<< HEAD
    next();
        if(req.session.isUserLogger){
         res.locals.isUserLogger = true;

            const id = +req.session.idUser;
            const user = users.find((u) => u.id === id);
         res.locals.userProfile = user;
         }
        else{
        res.locals.isUserLogger = false;
         }
      
    
=======
    if(req.session.isUserLogger){
        res.locals.isUserLogger = true;
        res.locals.userLogged = req.session.userLogged;
    }
    else{
        res.locals.isUserLogger = false;
    }

    next();
>>>>>>> main
}

module.exports = isUserLogger;