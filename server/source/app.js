const express = require("express");
const morgan = require("morgan");
const app = express();

const userAPIrouter = require("./routes/userAPI.router");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userAPIrouter);
module.exports = app;
