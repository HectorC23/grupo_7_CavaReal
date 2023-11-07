module.exports = (sequelize, DataTypes) => {
  
    const userProduct = sequelize.define('user_product', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      product_id: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'users_products', 
      timestamps: false
   })
  
   return userProduct;
}