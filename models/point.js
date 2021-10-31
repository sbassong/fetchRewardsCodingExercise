'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Point.init({
    payer: DataTypes.STRING,
    points: DataTypes.INTEGER,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Point',
    tableName: 'points'
  });
  return Point;
};