const router = require("express").Router();
const { checkAnswer } = require("../middlewares/openAichecker");

router.post("/", checkAnswer, (req, res) => {
  res.json({ correct: req.isCorrect });
});

module.exports = router;
