module.exports = (sequelize, DataTypes) => {
    const Category_Product = sequelize.define('Category_Product', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      category: {
          type: DataTypes.STRING(100),
          allowNull: false
      }
    }, {
      tableName: 'categories_products', 
      timestamps: false
   })
    
   Category_Product.associate = (models)=> { 

    Category_Product.belongsTo(models.Product, {
     as: 'categories',
     foreignKey: 'catproductId'
    })
  }

   return Category_Product;
   
  }