const db = require('../database/models');

const Product = db.Product;
const CategoryProduct = db.CategoryProduct;
const DetailProduct = db.DetailProduct;
const Attribute = db.Attribute;

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
                    ]
                });

                const details = await DetailProduct.findAll({
                    where:{
                        productId : product.id
                    },
                    include: [{ model: Attribute }]
                })

                categoriesProducts.push({
                    id: category.id,
                    nameCategory : category.name,
                    product: product.dataValues,
                    details: details
                });

                console.log(categoriesProducts);
            })
        )

        res.render("home", { categoriesProducts });
    }
}

module.exports = controller;