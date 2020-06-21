const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to CLAK's Ordering System");
});

const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
