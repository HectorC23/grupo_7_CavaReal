module.exports = (sequelize, DataTypes) => {
    const detailProduct = sequelize.define('detailProduct', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      productId: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
      },
      attributeId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
     },
     value: {
        type: DataTypes.STRING(120)
     },
    }, {
      tableName: 'detailproducts', 
      timestamps: false
   })

   detailProduct.associate = (models)=> { 

    detailProduct.hasMany(models.Product, {
     as: 'product',
     foreignKey: 'productId'
    }),
    
    detailProduct.hasMany(models.Attribute, {
        as: 'attribute',
        foreignKey: 'attributeId'
    })
    
  }
   return detailProduct;
}