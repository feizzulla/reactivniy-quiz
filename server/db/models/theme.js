"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Qa }) {
      this.hasMany(Qa, { foreignKey: "themeId" });
    }
  }
  Theme.init(
    {
      theme: DataTypes.STRING,
      imageurl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
