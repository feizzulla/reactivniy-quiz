const router = require("express").Router();
const { Qa: Question, Theme } = require("../../db/models");

router.route("/").get(async (req, res) => {
  try {
    const questions = await Question.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(questions);
  } catch (error) {
    console.log(`${error}`);
    res.status(400).json(error);
  }
});

router.route("/:theme").get(async (req, res) => {
  const { id, theme: themeId } = req.params;
  try {
    const questions = await Question.findAll({
      where: { themeId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      limit: 5,
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ result: false, error: error });
  }
});

router.route("/:theme/:id").get(async (req, res) => {
  const { id, theme: themeId } = req.params;
  try {
    const question = await Question.findOne({
      where: { id, themeId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!question) {
      return res
        .status(404)
        .json({ result: false, message: "Вопрос не найден" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
