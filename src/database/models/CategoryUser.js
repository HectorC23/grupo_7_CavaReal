module.exports = (sequelize, DataTypes) => {
    const Category_User = sequelize.define('Category_User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      category: {
          type: DataTypes.STRING(100),
          allowNull: false
      }
    }, {
      tableName: 'categories_users', 
      timestamps: false
   })
  
   Category_User.associate = (models)=> {
    
    Category_User.belongsTo(models.User, {
       foreignKey: 'categoryId'
    })
   }

   return Category_User;
  }