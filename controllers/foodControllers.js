const Food = require("../models/Food");

module.exports.getFoods = async (req, res) => {
  const foods = await Food.findAll();

  if (!foods) {
    const error = new Error("Data not found");
    error.status = 400;
    throw error;
  }

  res.status(200).json(foods);
};
