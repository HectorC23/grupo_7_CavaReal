const discountUser = (req, res, next) => {
    if(req.session.isUserLogger){
        const userLogger = req.session.userLogged;
        let discountUser;

        switch (userLogger.membershipLevel) {
            case 'Platinum': discountUser = 25;
                break;
            case 'Gold': discountUser = 15;
            break;
            case 'Silver': discountUser = 10;
            break;
            case 'Bronze': discountUser = 5;
            break;
            default: discountUser=0;
        }

        res.locals.discount = discountUser;
    }

    next();
}

module.exports= discountUser;