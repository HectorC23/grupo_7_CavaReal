module.exports = (sequelize, DataTypes) => {
    const Taster = sequelize.define('Taster', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      afrutado: {
          type: DataTypes.TINYINT(4),
          defaultValue: 1
      },
      nada: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1
      }, 
      seco: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1
      },
      amable: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1
      },
      entercipelado: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1 
      },
      liviano: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1 
      },
      delicado: {
         type: DataTypes.TINYINT(4),
         defaultValue: 1 
      }, 
      product_id: {
         type: DataTypes.INTEGER,
         allowNull: false
        },
    }, {
      tableName: 'tasters', 
      timestamps: false
   })

   Taster.associate = (models)=> {
      
      Taster.hasOne(models.Product, {
         as: 'product_taster',
         foreignKey: 'product_id'
      })

   }
   
   return Taster;
   
  }