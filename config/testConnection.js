const sequelize = require("./database"); // use raw sequelize
require("../models"); // this loads all models and sets associations

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection established.");

    await sequelize.sync(); // Now models are registered
    console.log("✅ Database synced.");
  } catch (err) {
    console.error("❌ Unable to connect:", err);
  }
}

module.exports = testConnection;
