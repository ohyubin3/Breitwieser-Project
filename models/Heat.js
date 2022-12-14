const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Heat extends Model {}

Heat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    heat_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'heat',
  }
);

module.exports = Heat;