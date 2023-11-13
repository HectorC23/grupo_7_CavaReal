module.exports = (sequelize, DataTypes) => {
    const CategoryProduct = sequelize.define('CategoryProduct', {
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
    
   CategoryProduct.associate = (models)=> { 

    CategoryProduct.hasMany(models.Product, {
     as: 'products',
     foreignKey: 'categoryId'
    }),
    
    CategoryProduct.hasMany(models.Attribute, {
      as: 'attributes',
      foreignKey: 'categoryId'
     })
  }

  return CategoryProduct;
}