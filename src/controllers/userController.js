const products = require("../data/products.json");

const controllerUser = {
    register: (req,res)=> {
        res.render("users/register");
    },
    login: (req,res)=> {
        res.render("users/login")
    },
    profile: (req, res) => {
        //const user = req.locals.userProfile;
        const user = {
                id: 1,
                firstName: "Juan",
                lastName: "Pérez",
                userName: "Juan_P",
                email: "juan.perez@example.com",
                password: "contraseña123",
                category: "Cliente",
                image: "juan_perez.jpg",
                address: "Calle Principal 123",
                state: "Argentina",
                postalCode: "12345",
                phone: "+1234567890",
                birthday: "1990-05-15",
                subscripcion: "Activa",
                membershipLevel: "Platinum"
        }
        res.render('users/profile', { user });
    }

}

module.exports = controllerUser;