module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define(
      "product",
      {
        ID_Product: {
          type: Datatypes.STRING(100),
          allowNull: false,
        },
        Name_Product: {
          type: Datatypes.STRING(255),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return Product;
  };
  