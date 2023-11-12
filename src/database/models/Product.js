module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING(50),
          allowNull: false
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false
      }, 
      price: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: false
      },
      img: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      categoryId: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
      }
    }, {
      tableName: 'products', 
      timestamps: false
   })
  
   Product.associate = (models)=> {

    Product.belongsToMany(models.User, {
      as: 'products_users',
      through: 'users_products', 
      foreignKey: 'productId', 
      otherKey: 'userId',
      timestamps: false
    }), 

    Product.hasMany(models.categoryProduct, {
      as: 'category',
      foreignKey: 'categoryId'
    }), 

    Product.belongsTo(models.detailProduct, {
      as: 'productDetail',
      foreignKey: 'productId'
     }),

    Product.belongsTo(models.productCart, {
      as: 'productCarts',
      foreignKey: 'cartId'
    })
  }
   return Product;
}