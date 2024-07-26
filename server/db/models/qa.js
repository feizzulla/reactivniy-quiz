"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Qa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: "themeId" });
    }
  }
  Qa.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      themeId: DataTypes.INTEGER,
      imageurl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Qa",
    }
  );
  return Qa;
};
