module.exports = (sequelize, Datatypes) => {
    const productCart = sequelize.define('product_cart', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
     cart_id: {
         foreignKey: true,
         type: Datatypes.INTEGER,
         allowNull: false
      },
     product_id: {
         foreignKey: true,
         type: Datatypes.INTEGER,
         allowNull: false
      }
    }, {
      tableName: 'carts', 
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