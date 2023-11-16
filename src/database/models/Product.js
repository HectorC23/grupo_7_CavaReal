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
      as: 'productsUsers',
      through: 'UserProduct', 
      foreignKey: 'productId', 
      otherKey: 'userId',
      timestamps: true
    }), 

    Product.belongsTo(models.CategoryProduct, {
      as: 'category',
      foreignKey: 'categoryId'
    }), 

    Product.belongsToMany(models.Attribute, {
      through: 'DetailProduct',
      as: 'productDetail',
      foreignKey: 'productId',
      otherKey: 'attributeId',
      timestamps: true
     }),

    Product.belongsToMany(models.ProductCart, {
      through: 'ProductCart',
      as: 'productCarts',
      foreignKey: 'productId',
      otherKey: 'cartId',
      timestamps: false
    })
  }
   return Product;
}