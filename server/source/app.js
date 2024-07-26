const express = require("express");
const morgan = require("morgan");
const app = express();

const userAPIrouter = require("./routes/userAPI.router");
const statisticAPIrouter = require("./routes/statisticAPI.router");
const themeAPIrouter = require("./routes/themeAPI.router");
const questionsAPIrouter = require("./routes/questionsAPI.router");
const checkAnswer = require("./routes/checkAnswer.router");
const generateQuestions = require("./routes/generateQuestions.router");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userAPIrouter);
app.use("/api/statistic", statisticAPIrouter);
app.use("/api/theme", themeAPIrouter);
app.use("/api/questions", questionsAPIrouter);
app.use("/api/checkanswer", checkAnswer);
app.use("/api/generate", generateQuestions);

module.exports = app;
