const userPermissions = (req, res, next) => {
    if(req.session.isUserLogger){
        next();
    }
    else{
        res.redirect('/');
    }
}

module.exports = userPermissions;