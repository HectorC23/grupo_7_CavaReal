module.exports = (sequelize, DataTypes) => {
    const productCart = sequelize.define('productCart', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
     cartId: {
         type: DataTypes.INTEGER(11),
         allowNull: false
      },
     productId: {
         type: DataTypes.INTEGER(11),
         allowNull: false
      }
    }, {
      tableName: 'products_cart', 
      timestamps: true
   })
  
   productCart.associate = (models)=> {

   productCart.hasMany(models.Product, {
      as: 'products', 
      foreignKey: 'productId'
    })

    productCart.hasMany(models.Cart, {
     as: 'productCart',   
     foreignKey: 'cartId'
    })
  }
   return productCart;
}