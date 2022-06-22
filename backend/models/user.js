"use strict";
const { Model } = require("sequelize");
const { encrypt } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = encrypt(user.password);
        },
        beforeUpdate: function (user, option) {
          user.userPassword = encryptPassword(user.userPassword);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
