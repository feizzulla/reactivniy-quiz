const router = require("express").Router();
const { Qa: Questions } = require("../../db/models");

router.route("/").get(async (req, res) => {
  try {
    const questions = await Questions.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(questions);
  } catch (error) {
    console.log(`${error}`);
    res.status(400).json(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Questions.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ result: false, error: error });
  }
});

module.exports = router;
