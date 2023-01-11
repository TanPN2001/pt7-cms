module.exports = (sequelize, Datatypes) => {
  const Category = sequelize.define(
    "category",
    {
      id_category: {
        type: Datatypes.INTERGER,
        allowNull: false,
      },
      name_category: {
        type: Datatypes.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Category;
};
