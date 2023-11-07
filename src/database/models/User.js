module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: Datatypes.STRING(100),
        allowNull: false
    },
    lastName: {
        type: Datatypes.STRING(100),
        allowNull: false
    }, 
    email: {
        type: Datatypes.STRING(50),
        allowNull: false
    },
    contraseña: {
        type: Datatypes.STRING(50), 
        allowNull: false
    },
    phone: {
       type: Datatypes.BIGINT,
       allowNull: false
    },
    birthdate: {
        type: Datatypes.DATE,
        allowNull: false
    },
    address: {
        type: Datatypes.STRING(50),
        allowNull: false
    },
    postalCode: {
        type: Datatypes.CHAR(4),
        allowNull: false 
    },
    state: {
        type: Datatypes.STRING(20),
        allowNull: false
    },
    image: {
        type: Datatypes.STRING(100), 
    },
    subscripcion: {
        type: Datatypes.STRING(20),
        allowNull: false
    },
    membershipLevel: {
        type: Datatypes.STRING(20),
        allowNull: false 
    },
    category_id: {
        foreignKey: true,
        type: Datatypes.INTEGER,
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
     as: 'products_users',
     through: 'users_products', 
     foreignKey: 'user_id', 
     otherKey: 'product_id',
     timestamps: false
   })
 }

 return User;
 
}