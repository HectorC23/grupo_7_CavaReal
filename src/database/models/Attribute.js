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
     },
     
    }, {
      tableName: 'attributes', 
      timestamps: false
   })

    Attribute.associate = (models)=> { 

    Attribute.hasMany(models.categoryProduct, {
     as: 'attributeCategory',
     foreignKey: 'categoryId'
    })

    Attribute.belongsTo(models.detailProduct, {
      as: 'productAttributes',
      foreignKey: 'attributeId'
    })

  }
  return Attribute;
}