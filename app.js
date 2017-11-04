const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.json({ message: "Welcome to Warbler" });
});

app.listen(3001, function() {
  console.log("Server is listening on port 3001");
});
