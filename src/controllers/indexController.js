const db = require('../database/models');

const Product = db.Product;
const CategoryProduct = db.CategoryProduct;

const controller = {
    home: async(req,res)=> {
        const categories = await CategoryProduct.findAll();
        const categoriesProducts = [];

        await Promise.all(
            categories.map(async (category) => {
                let product = await Product.findOne({
                    where:{
                        categoryId : category.id
                    },
                    order: [
                        ['price', 'DESC']
                    ],
                });
                categoriesProducts.push({
                    nameCategory : category.name,
                    product: product.dataValues
                });

                console.log(categoriesProducts);
            })
        )

        res.render("home", { categoriesProducts });
    }
}

module.exports = controller;