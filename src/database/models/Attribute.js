module.exports = (sequelize, DataTypes) => {
    const Attribute = sequelize.define('Attribute', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
     },
      categoryId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'CategoryProduct', // Nombre de la tabla a la que hace referencia
          key: 'id' // Nombre de la columna a la que hace referencia
        }
     },
     
    }, {
      tableName: 'attributes', 
      timestamps: false
   })

    Attribute.associate = (models)=> { 

    Attribute.belongsTo(models.CategoryProduct, {
     as: 'category',
     foreignKey: 'categoryId'
    })

    Attribute.belongsToMany(models.Product, {
      through: 'DetailProduct',
      as: 'productAttributes',
      foreignKey: 'attributeId',
      otherKey: 'productId',
      timestamps: true
    })

  }
  return Attribute;
}