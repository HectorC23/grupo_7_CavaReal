module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nombre: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
      descripcion: {
          type: DataTypes.TEXT,
          allowNull: false
      }, 
      viñedo: {
          type: DataTypes.STRING(50),
          allowNull: false
      },
      edad: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      altitud: {
          type: DataTypes.STRING(100), 
          allowNull: false
      },
      variedad: {
        type: DataTypes.STRING(100), 
        allowNull: false
      },
      barriles: {
        type: DataTypes.TINYINT(4),
        allowNull: false
      },
      guardado: {
        type: DataTypes.TINYINT(4),
        allowNull: false
      },
      priceSix: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      priceUnity: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      img: {
          type: DataTypes.STRING(100),
          allowNull: false
      },
      catproduct_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
    }, {
      tableName: 'products', 
      timestamps: false
   })
  
   Product.associate = (models)=> {

    Product.belongsTo(models.product_cart, {
      as: 'products', //*
      foreignKey: 'product_id'
    }),

    Product.belongsToMany(models.User, {
      as: 'products_users',
      through: 'users_products', 
      foreignKey: 'product_id', 
      otherKey: 'user_id',
      timestamps: false
    }), 

    Product.hasMany(models.Category_Product, {
      as: 'category_product',
      foreignKey: 'catproduct_id'
    }), 

    Product.belongsTo(models.Taster, {
      as: 'product_taster',
      foreignKey: 'product_id'
    })
  }

   return Product;
   
  }