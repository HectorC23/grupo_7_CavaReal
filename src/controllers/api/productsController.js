const sequelize = require('sequelize');
const db = require('../../database/models');
const Product = db.Product;
const CategoryProduct = db.CategoryProduct;
const Attribute = db.Attribute;
const DetailProduct = db.DetailProduct;

const UserProduct = db.UserProduct;

const productsController = {
    all: async(req, res) => {
        let page = req.query.page? +req.query.page: 0
        const countProducts = await Product.count();
        const pages = Math.ceil(countProducts / 10);

        if (page < 0 || page >= pages) {
            return res.status(400).json({
              meta: {
                status: 400,
              },
              error: 'Página inválida',
            });
        }


        let offset = page * 10;

        let products = await Product.findAll({
            include:[{association: 'category'}],
            limit: 10,
            offset: offset
        });
        
         //PRODUCTS
        products = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category.name,
                detail: req.protocol + '://' + req.get('host') + `/api/products/${product.id}`
            }
        })

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            count: countProducts,
            data: products,
            pages: pages,
            next: page + 1 >= pages ? '' : req.protocol + '://' + req.get('host') + '/api/products/?page=' + (page + 1),
            previous: page - 1 < 0 ? '' : req.protocol + '://' + req.get('host') + '/api/products/?page=' + (page - 1),
        })
    },
    sales: async(req, res) => {
        const sales = await UserProduct.findAll();

        const countSales = sales.reduce((total, sale) => total + sale.amount, 0);

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            data: countSales
        })
    },
    mostSold: async(req, res) => {
        const topProducts = await Product.findAll({
            attributes: [
              'id',
              'name',
              [
                sequelize.literal('(SELECT SUM(amount) FROM users_products WHERE users_products.productId = Product.id)'),
                'totalSales'
              ]
            ],
            order: [[sequelize.literal('totalSales'), 'DESC']], // Ordena por total de ventas descendente
            limit: 5 // Obtén solo los primeros 5 productos
          });

          return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            products: topProducts,
        })
    },
    lastSold: async(req, res) => {
        let lastestSales = await UserProduct.findAll({
            order: [
            ['dateBuy', 'DESC']
            ],
            limit: 5,
            include: [{model: Product}]
        });

        lastestSales = lastestSales.map((sale) => {
            return {
                id: sale.Product.id,
                name: sale.Product.name,
                description: sale.Product.description,
                price: sale.Product.price,
                img: req.protocol + '://' + req.get('host') + `/api/images/${sale.Product.img}`,
                detail: req.protocol + '://' + req.get('host') + `/api/products/${sale.Product.id}`,
            }
        })

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            products: lastestSales,
        })
    },
    detail: async(req,res) => {
        const id = req.params.id;
        let product = await Product.findByPk(id,{
            include:[{association: 'category'},{association: 'productDetail'}]
        });

        console.log(product);
        let attributes = [];

        product.productDetail.map((detail) => {
            attributes.push({
                name: detail.name,
                value: detail.DetailProduct.value
            });
        })

        product = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category.name,
            img: req.protocol + '://' + req.get('host') + '/api/images/' + product.img,   
            attributes: attributes
        }
        

        return res.status(200).json({
            meta:{
                status:res.statusCode,
                all: req.protocol + '://' + req.get('host') + '/api/products'            
            },
            data: product
        })
    },
    img: (req, res) => {
        const imageName = req.params.imageName;
        const imageLink = `${req.protocol}://${req.get('host')}/images/${imageName}`;
        res.json({ link: imageLink });
    }
}


module.exports = productsController