const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const app = express();
require("./models/db");
app.use(express.json());
app.use(cors());

app.use("/api/tasks", router);

app.listen(8000, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
