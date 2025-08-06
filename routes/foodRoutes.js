const express = require("express");
const router = express.Router();
const { getFoods } = require("../controllers/foodControllers");
const catchAsync = require("../utils/catchAsync");

router.get("/", catchAsync(getFoods));

module.exports = router;
