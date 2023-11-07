module.exports = (sequelize, DataTypes) => {
    const productCart = sequelize.define('product_cart', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
     cart_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
     product_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
    }, {
      tableName: 'products_cart', 
      timestamps: false
   })
  
   productCart.associate = (models)=> {

    productCart.hasMany(models.Product, {
      as: 'products', //*
      foreignKey: 'product_id'
    })

    productCart.hasMany(models.Cart, {
     as: 'cart_products',   
     foreignKey: 'cart_id'
    })
  }
   return productCart;
}