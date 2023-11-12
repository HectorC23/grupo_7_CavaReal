module.exports = (sequelize, DataTypes) => {
    const Category_User = sequelize.define('categoryUser', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      category: {
          type: DataTypes.STRING(20),
          allowNull: false
      }
    }, {
      tableName: 'categories_users', 
      timestamps: false
   })
  
   Category_User.associate = (models)=> {
    
    Category_User.belongsTo(models.User, {
       as: 'categories',
       foreignKey: 'categoryId'
    })
   }

  return Category_User;
}