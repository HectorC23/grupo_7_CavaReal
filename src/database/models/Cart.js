module.exports = (sequelize, DataTypes) => {
    const Carts = sequelize.define('Cart', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      userId: {
       type: DataTypes.INTEGER,
       allowNull: false
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false
      }

    }, {
      tableName: 'carts', 
      timestamps: false
   })
  
   Carts.associate = (models)=> {
    
    Carts.hasOne(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
    
    Carts.belongsTo(models.product_cart, {
        as: 'products',
        foreignKey: 'cartId'
    })
  }

   return Carts;
}