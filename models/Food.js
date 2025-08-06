const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Food = sequelize.define("Food", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Food;
