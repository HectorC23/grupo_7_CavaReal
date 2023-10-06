const users = require('../data/user.json');

const isUserLogger = (req, res, next) => {
    if(req.session.isUserLogger){
        res.locals.isUserLogger = true;
    }
    else{
        res.locals.isUserLogger = false;
    }

    next();
}

module.exports = isUserLogger;