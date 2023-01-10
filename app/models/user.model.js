module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define(
      "user",
      {
        ID_User: {
          type: Datatypes.STRING(100),
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
  
    return User
  };
  