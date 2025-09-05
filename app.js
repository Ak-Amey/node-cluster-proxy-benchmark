const express = require("express");
const morgan = require("morgan");

//Run express
const app = express();
//middleware to parse json
app.use(morgan("dev"));

//Route
app.get("/", (req, res) => {
  for (let i = 0; i < 10000000000; i++) {}
  res.send("Hello World");
});

//Listen on port 3000
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
