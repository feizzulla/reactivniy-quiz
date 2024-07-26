const router = require("express").Router();
const {
  generateQuestions,
} = require("../middlewares/openAIquestionsGeneration");

router.post("/", generateQuestions, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
