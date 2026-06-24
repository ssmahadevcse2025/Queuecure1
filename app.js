const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/queue", require("./routes/queueRoutes"));

app.get("/", (req, res) => {
  res.send("Queue Cure API Running");
});

module.exports = app;