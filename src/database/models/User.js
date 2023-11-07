module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING(50), 
        allowNull: false
    },
    phone: {
       type: DataTypes.BIGINT(20),
       allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    postalCode: {
        type: DataTypes.CHAR(10),
        allowNull: false 
    },
    state: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(100), 
    },
    subscripcion: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    membershipLevel: {
        type: DataTypes.STRING(20),
        allowNull: false 
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    tableName: 'users', 
    timestamps: false
 })

 User.associate = (models)=> {

   User.hasMany(models.Category_User, {
     as: 'category_user',
     foreignKey: 'category_id'
   }), 
   
   User.belongsTo(models.Cart, {
    as: 'cart',
    foreignKey: 'user_id'
  })

   User.belongsToMany(models.Product, {
     as: 'users_products',
     through: 'users_products', 
     foreignKey: 'user_id', 
     otherKey: 'product_id',
     timestamps: false
   })
 }

 return User;
 
}