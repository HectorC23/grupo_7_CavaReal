const guestPermissions = (req, res, next) => {
    if(!req.session.isUserLogger){
       next();
    }
    else{
       res.redirect('/');
   }
}

module.exports = guestPermissions;