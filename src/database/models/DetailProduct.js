module.exports = (sequelize, DataTypes) => {
    const DetailProduct = sequelize.define('DetailProduct', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      productId: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: 'Product', // Nombre de la tabla a la que hace referencia
            key: 'id' // Nombre de la columna a la que hace referencia
          }
      },
      attributeId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'Attribute', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna a la que hace referencia
        }
     },
     value: {
        type: DataTypes.STRING(120)
     },
    }, {
      tableName: 'detail_products', 
      timestamps: true
   })

   return DetailProduct;
}