module.exports = (sequelize, DataTypes) => {
    const productCart = sequelize.define('product_cart', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
     cartId: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
     productId: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
    }, {
      tableName: 'products_cart', 
      timestamps: true
   })
  
   productCart.associate = (models)=> {

    productCart.hasMany(models.Product, {
      as: 'products', //*
      foreignKey: 'productId'
    })

    productCart.hasMany(models.Cart, {
     as: 'cart_products',   
     foreignKey: 'cartId'
    })
  }
   return productCart;
}