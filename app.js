const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const foodRoutes = require("./routes/foodRoutes");
const cors = require("cors");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://merry-phoenix-d8e6b0.netlify.app",
    ], // or whatever your frontend URL is
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/foods", foodRoutes);

app.use(errorHandler);

module.exports = app;
