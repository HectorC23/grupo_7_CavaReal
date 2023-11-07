module.exports = (sequelize, Datatypes) => {
    const Category_Product = sequelize.define('Category_Product', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      categoria: {
          type: Datatypes.STRING(100),
          allowNull: false
      }
    }, {
      tableName: 'categories_products', 
      timestamps: false
   })
    
   Category_Product.associate = (models)=> { 

    Category_Product.belongsTo(models.Product, {
     as: 'categories',
     foreignKey: 'catproduct_id'
    })
  }

   return Category_Product;
   
  }