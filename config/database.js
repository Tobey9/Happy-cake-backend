const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../foods.db"), // use file for dev
  logging: false, // disable logging in both for cleaner output
});

module.exports = sequelize;
