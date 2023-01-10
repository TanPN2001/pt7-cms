module.exports = (sequelize, Datatypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      ID_Admin: {
        type: Datatypes.INT,
        allowNull: false,
      },
      username: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: Datatypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: Datatypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Admin
};
