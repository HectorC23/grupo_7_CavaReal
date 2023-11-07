module.exports = (sequelize, DataTypes) => {
    const Category_User = sequelize.define('Category_User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      categoria: {
          type: DataTypes.STRING(100),
          allowNull: false
      }
    }, {
      tableName: 'categories_users', 
      timestamps: false
   })
  
   Category_User.associate = (models)=> {
    
    Category_User.belongsTo(models.User, {
       as : 'categories_users',
       foreignKey: 'category_id'
    })
   }

   return Category_User;
  }