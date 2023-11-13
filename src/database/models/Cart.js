module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
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
       allowNull: false,
       references: {
        model: 'User', // Nombre de la tabla a la que hace referencia
        key: 'id' // Nombre de la columna a la que hace referencia
      }
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false
      }

    }, {
      tableName: 'carts', 
      timestamps: false
   })
  
   Cart.associate = (models)=> {
    
    Cart.hasOne(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
    
    Cart.belongsToMany(models.ProductCart, {
        as: 'products',
        through: 'ProductCart',
        otherKey: 'productId',
        timestamps: false,
        foreignKey: 'cartId'
    })
  }

  return Cart;
}