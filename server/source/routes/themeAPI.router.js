const router = require("express").Router();
const { User, Statistic, Theme } = require("../../db/models");

router.route("/").get(async (req, res) => {
  try {
    const themes = await Theme.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });
    res.status(200).json(themes);
  } catch (error) {
    console.log(`${error}`);
    res.status(400).json(error);
  }
});

module.exports = router;
