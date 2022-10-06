"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Nave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nave.init(
    {
      id: DataTypes.UUID,
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      type: DataTypes.STRING,
      beam: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Nave",
    }
  );
  return Nave;
};
