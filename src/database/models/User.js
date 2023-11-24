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
        type: DataTypes.TINYINT(2),//
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
        references: {
            model: 'CategoryUser', // Nombre de la tabla a la que hace referencia
            key: 'id' // Nombre de la columna a la que hace referencia
          }
    }
  }, {
    tableName: 'users', 
    timestamps: false
 })

 User.associate = (models)=> {

   User.belongsTo(models.CategoryUser, {
     as: 'category',
     foreignKey: 'categoryId'
   }), 
   
   User.belongsTo(models.Cart, {
    as: 'cart',
    foreignKey: 'userId'
  })

   User.belongsToMany(models.Product, {
     as: 'usersProducts',
     through: 'UserProduct', 
     foreignKey: 'userId', 
     otherKey: 'productId',
     timestamps: true
   })
 }

 return User;
 
}