const sequelize = require("../config/database");
const Food = require("../models/Food");

const foodData = [
  {
    title: "Rainbow Cake",
    image:
      "https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chocolate Cake",
    image:
      "https://images.unsplash.com/photo-1713274788200-3ebde5262387?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cupcake with sprinkles",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

async function seedFoods() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to DB.");

    await sequelize.sync({ force: true }); // Warning: this will drop all tables and re-create them!
    console.log("✅ DB synced.");

    await Food.bulkCreate(foodData);
    console.log("✅ Foods seeded successfully.");

    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to seed foods:", error);
    process.exit(1);
  }
}

seedFoods();
