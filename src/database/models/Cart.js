module.exports = (sequelize, Datatypes) => {
    const Carts = sequelize.define('Cart', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      cantidad: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      precio_total: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      user_id: {
       foreignKey: true,
       type: Datatypes.INTEGER,
       allowNull: false
      },

    }, {
      tableName: 'products_cart', 
      timestamps: false
   })
  
   Carts.associate = (models)=> {
    
    Carts.hasOne(models.User, {
      as: 'cart',
      foreignKey: 'user_id'
    })
    
    Carts.belongsTo(models.product_cart, {
        as: 'products',
        foreignKey: 'cart_id'
    })
  }
   return Carts;
}