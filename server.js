const express = require("express");
require("dotenv").config();
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/addRestaurant", (req, res) => {
  res.json({ status: 200, message: "added" });
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
