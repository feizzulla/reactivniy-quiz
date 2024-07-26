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

router.route("/:id").get(async (req, res) => {
  const { id: userId } = req.params;
  try {
    const userStatistic = await Statistic.findAll({
      where: { userId },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json(userStatistic);
  } catch (error) {
    console.log(`${error}`);
    res.status(400).json(error);
  }
});

// router.route("/:id").patch(async (req, res) => {
//   const { id: userId } = req.params;
//   const { answer, wronganswer } = req.body;
//   try {
//     const result = await User.findOne({
//       where: {
//         userId,
//       },
//     });
//     console.log(result);
//     // if (!userId) {
//     //   await result.userStat.patch({ answer, wronganswer });
//     //   res.sendStatus(201);
//     // } else res.sendStatus(400);
//   } catch (error) {
//     res.status(400).json({ result: false, error: error });
//   }
// });

module.exports = router;
