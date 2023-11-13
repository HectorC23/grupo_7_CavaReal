module.exports = (sequelize, DataTypes) => {
    const CategoryUser = sequelize.define('CategoryUser', {
      id: {
          type: DataTypes.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
          type: DataTypes.STRING(20),
          allowNull: false
      }
    }, {
      tableName: 'categories_users', 
      timestamps: false
   })
  
   CategoryUser.associate = (models)=> {
    
    CategoryUser.hasMany(models.User, {
       as: 'users',
       foreignKey: 'categoryId'
    })
   }

  return CategoryUser;
}