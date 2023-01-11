module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define(
      "user",
      {
        id_user: {
          type: Datatypes.INTERGER,
          allowNull: false,
        },
        username: {
          type: Datatypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: Datatypes.STRING(100),
          allowNull: true
        },
        password: {
          type: Datatypes.STRING(100),
          allowNull: false,
        },
        address: {
          type: Datatypes.STRING(255),
          allowNull: true,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
  
    return User
  };
  