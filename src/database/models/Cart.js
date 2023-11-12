module.exports = (sequelize, DataTypes) => {
    const Carts = sequelize.define('Cart', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      amount: {
        type: DataTypes.TINYINT(4),
        allowNull: false
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      userId: {
       type: DataTypes.INTEGER(11),
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
    
    Carts.belongsTo(models.productCart, {
        as: 'products',
        foreignKey: 'cartId'
    })
  }

  return Carts;
}