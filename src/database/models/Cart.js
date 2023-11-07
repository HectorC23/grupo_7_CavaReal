module.exports = (sequelize, DataTypes) => {
    const Carts = sequelize.define('Cart', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio_total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
       type: DataTypes.INTEGER,
       allowNull: false
      },

    }, {
      tableName: 'carts', 
      timestamps: false
   })
  
   Carts.associate = (models)=> {
    
    Carts.hasOne(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    
    Carts.belongsTo(models.product_cart, {
        as: 'products',
        foreignKey: 'cart_id'
    })
  }

   return Carts;
}