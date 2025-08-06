require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;

const testConnection = require("./config/testConnection");

testConnection();

app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`);
});
