module.exports = (sequelize, DataTypes) => {
  
    const userProduct = sequelize.define('user_product', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      productId: {
          type: DataTypes.INTEGER(11),
          allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    }, {
      tableName: 'users_products', 
      timestamps: true,
   })
  
   return userProduct;
}