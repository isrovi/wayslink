"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brand.hasMany(models.Link, {
        as: "links",
        foreignKey: "brandId",
      });
      Brand.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
      });
    }
  }
  Brand.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      uniqueLink: DataTypes.STRING,
      image: DataTypes.STRING,
      viewCount: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
