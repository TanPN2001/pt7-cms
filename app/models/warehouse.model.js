module.exports = (sequelize, Datatypes) => {
  const Warehouse = sequelize.define(
    "admin",
    {
      id_ware: {
        type: Datatypes.INTERGER,
        allowNull: false,
      },
      name_warehouse: {
        type: Datatypes.STRING(100),
        allowNull: true,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Warehouse
};
