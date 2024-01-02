const db = require('../../database/models');
const User = db.User;

const usersController = {
    list: async(req, res) => {
        let page = req.query.page? +req.query.page : 0
        const countUsers = await User.count();
        const pages = Math.ceil(countUsers / 10);

        if (page < 0 || page >= pages) {
            return res.status(400).json({
              meta: {
                status: 400,
              },
              error: 'Página inválida',
            });
        }

        let offset = page * 10;

        let users = await User.findAll({
            limit: 10,
            offset: offset
        });

        users = users.map((user) => {
            return {
                id: user.id,
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                detail: req.protocol + '://' + req.get('host') + `/api/users/${user.id}`
            }
        })

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            count: countUsers,
            data: users,
            next: page + 1 >= pages ? '' : req.protocol + '://' + req.get('host') + '/api/users/?page=' + (page + 1),
            previous: page - 1 < 0 ? '' : req.protocol + '://' + req.get('host') + '/api/users/?page=' + (page - 1),
        })
    },
    detail: async(req,res) => {
        const id = req.params.id;
        let user = await User.findByPk(id);

        user = {
            id: user.id,
            name: user.firstName + ' ' + user.lastName,
            userName: user.userName,
            email: user.email,
            phone: user.phone,
            birthdate: user.birthdate,
            address: user.address,
            postalCode: user.postalCode,
            state: user.state,
            img: req.protocol + '://' + req.get('host') + '/api/images/users/' + user.image 
        }

        return res.status(200).json({
            meta:{
                status:res.statusCode,
                all: req.protocol + '://' + req.get('host') + '/api/users'            
            },
            data: user
        })
    },
    img: (req, res) => {
        const imageName = req.params.imageName;
        const imageLink = req.protocol + '://' + req.get('host') + '/images/' + imageName;
        res.json({ link: imageLink });
    }
}

module.exports = usersController