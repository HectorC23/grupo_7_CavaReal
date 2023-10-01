const users = require('../data/user.json');

const isUserLogger = (req, res, next) => {
    if(req.session.isUserLogger){
        res.locals.isUserLogger = true;

        const id = +req.session.idUser;
        const user = users.find((u) => u.id === id);
        res.locals.userProfile = user;
    }
    else{
        res.locals.isUserLogger = false;
    }
}

module.exports = isUserLogger;