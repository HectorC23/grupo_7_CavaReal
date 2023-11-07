module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define('Product', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nombre: {
          type: Datatypes.STRING(100),
          allowNull: false
      },
      descripcion: {
          type: Datatypes.STRING(100),
          allowNull: false
      }, 
      viñedo: {
          type: Datatypes.STRING(50),
          allowNull: false
      },
      edad: {
         type: Datatypes.INTEGER
      },
      altitud: {
          type: Datatypes.STRING(100), 
      },
      variedad: {
        type: Datatypes.STRING(100), 
      },
      barriles: {
        type: Datatypes.INTEGER
      },
      guardado: {
        type: Datatypes.INTEGER
      },
      precio_six: {
        type: Datatypes.INTEGER
      },
      precio_unidad: {
        type: Datatypes.INTEGER
      },
      imagen: {
          type: Datatypes.STRING(100),
          allowNull: false
      },
      catproduct_id: {
          type: Datatypes.INTEGER,
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