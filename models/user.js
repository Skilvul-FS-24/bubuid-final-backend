"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Konseling, {
        foreignKey: "id_user",
        as: "konselings",
      });
    }
  }
  User.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      umur: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenis_kelamin: {
        type: DataTypes.ENUM("pria", "wanita"),
        allowNull: false,
      },
      sekolah: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
