const router = require("express").Router();
const { Statistic, User } = require("../../db/models");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const statistic = await User.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        include: {
          model: Statistic,
          attributes: { exclude: ["createdAt", "updatedAt", "password"] },
        },
      });
      res.status(200).json(statistic);
    } catch (error) {
      console.log(`${error}`);
      res.status(400).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const newStatistic = req.body;
      const addStatistic = await Statistic.create(newStatistic);
      res.status(201).json(addStatistic);
    } catch (error) {
      console.log(`${error}`);
      res.status(400).json(error);
    }
  });

module.exports = router;
