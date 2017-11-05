const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const warbleRoutes = require("./routes/warbles");
const userRoutes = requier("./routes/users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", warbleRoutes);
app.use("/api/users", userRoutes);

app.get("/", function(req, res) {
  res.json({ message: "Welcome to Warbler" });
});

app.listen(3001, function() {
  console.log("Server is listening on port 3001");
});
