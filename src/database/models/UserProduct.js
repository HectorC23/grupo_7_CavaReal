module.exports = (sequelize, Datatypes) => {
  
    const userProduct = sequelize.define('user_product', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      product_id: {
          foreignKey: true,
          type: Datatypes.INTEGER,
          allowNull: false
      },
      user_id: {
        foreignKey: true,
        type: Datatypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'users_products', 
      timestamps: false
   })
  
   return userProduct;
}