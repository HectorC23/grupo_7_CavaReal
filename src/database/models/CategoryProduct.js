module.exports = (sequelize, DataTypes) => {
    const Category_Product = sequelize.define('categoryProduct', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING(50),
          allowNull: false
      }
    }, {
      tableName: 'categories_products', 
      timestamps: false
   })
    
   Category_Product.associate = (models)=> { 

    Category_Product.belongsTo(models.Product, {
     as: 'category',
     foreignKey: 'categoryId'
    }),
    
    Category_Product.belongsTo(models.Attribute, {
      as: 'category_attributes',
      foreignKey: 'categoryId'
     })
  }

  return Category_Product;
}