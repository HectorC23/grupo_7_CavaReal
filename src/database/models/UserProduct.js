module.exports = (sequelize, DataTypes) => {
  
    const userProduct = sequelize.define('user_product', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      productId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'usersProducts', 
      timestamps: true,
   })
  
   return userProduct;
}