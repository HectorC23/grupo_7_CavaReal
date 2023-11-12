module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER(11),
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
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50), 
        allowNull: false
    },
    phone: {
       type: DataTypes.BIGINT(20), //
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
        type: DataTypes.STRING(100),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(100), 
        default: 'foto-perfil'
    },
    subscription: {
        type: DataTypes.TINY(1),//
        allowNull: false
    },
    membershipLevel: {
        type: DataTypes.STRING(20),
        allowNull: false 
    },
    categoryId: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1,
        allowNull: false,
    }
  }, {
    tableName: 'users', 
    timestamps: true
 })

 User.associate = (models)=> {

   User.hasMany(models.categoryUser, {
     as: 'categoryUser',
     foreignKey: 'categoryId'
   }), 
   
   User.belongsTo(models.Cart, {
    as: 'cart',
    foreignKey: 'userId'
  })

   User.belongsToMany(models.Product, {
     as: 'usersProducts',
     through: 'users_products', 
     foreignKey: 'userId', 
     otherKey: 'productId',
     timestamps: false
   })
 }

 return User;
 
}