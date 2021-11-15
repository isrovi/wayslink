"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Link.belongsTo(models.Brand, {
        as: "brand",
        foreignKey: "brandId",
      });
    }
  }
  Link.init(
    {
      titleLink: DataTypes.STRING,
      urlLink: DataTypes.STRING,
      imageLink: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Link",
    }
  );
  return Link;
};
