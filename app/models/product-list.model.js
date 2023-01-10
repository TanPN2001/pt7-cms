module.exports = (sequelize, Datatypes) => {
  const ProductList = sequelize.define(
    "productlist",
    {
      ID_Product_List: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      ID_User: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      ID_Product: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return ProductList;
};
