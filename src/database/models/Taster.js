module.exports = (sequelize, Datatypes) => {
    const Taster = sequelize.define('Taster', {
      id: {
          type: Datatypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      afrutado: {
          type: Datatypes.INTEGER,
          defaultValue: 1
      },
      nada: {
         type: Datatypes.INTEGER,
         defaultValue: 1
      }, 
      seco: {
         type: Datatypes.INTEGER,
         defaultValue: 1
      },
      amable: {
         type: Datatypes.INTEGER,
         defaultValue: 1
      },
      entercipelado: {
         type: Datatypes.INTEGER,
         defaultValue: 1 
      },
      liviano: {
         type: Datatypes.INTEGER,
         defaultValue: 1 
      },
      delicado: {
         type: Datatypes.INTEGER,
         defaultValue: 1 
      }, 
      product_id: {
         foreignKey: true,
         type: Datatypes.INTEGER,
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