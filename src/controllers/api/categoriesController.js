const db = require('../../database/models');
const Product = db.Product;
const CategoryProduct = db.CategoryProduct;

const UserProduct = db.UserProduct;

const categoriesController = {
    categories: async(req, res) => {
        const categories = await CategoryProduct.findAll();

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            count: categories.length,
            data: categories
        })
    },
    count: async(req, res) => {
        const categories = await CategoryProduct.findAll();

        let countByCategory = {};

        await Promise.all(categories.map(async(category) => {
            const count = await Product.count({
                where:{
                    categoryId: category.dataValues.id
                }
            });
            countByCategory[category.name]= count;
        }))

        return res.status(200).json({
            meta:{
                status:res.statusCode,
            },
            data: countByCategory
        })
    },
}


module.exports = categoriesController