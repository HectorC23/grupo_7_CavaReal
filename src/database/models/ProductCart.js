module.exports = (sequelize, DataTypes) => {
    const ProductCart = sequelize.define('ProductCart', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
     cartId: {
         type: DataTypes.INTEGER(11),
         allowNull: false,
         references: {
          model: 'Cart', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna a la que hace referencia
        }
      },
     productId: {
         type: DataTypes.INTEGER(11),
         allowNull: false,
         references: {
          model: 'Product', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna a la que hace referencia
        }
      }, 
      amount: {
        type: DataTypes.INTEGER(2),
        allowNull: false
      }
    }, {
      tableName: 'products_cart', 
      timestamps: false
   })
  
   return ProductCart;
}