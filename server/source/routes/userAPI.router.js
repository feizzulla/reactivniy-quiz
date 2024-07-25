const router = require("express").Router();
const { User, Statistic } = require("../../db/models");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(users);
    } catch (error) {
      console.log(`${error}`);
      res.status(400).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const isExist = await User.findOne({
        where: { email },
      });
      if (!isExist) {
        const addUser = await User.create({ name, email, password });
        const userData = addUser.get({ plain: true });
        await Statistic.create({
          answers: 0,
          wronganswers: 0,
          userId: userData.id,
        });
        res.status(201).json(addUser);
      } else res.status(409).send("Почта занята");
    } catch (error) {
      res.status(400).json({ result: false, error: "Ошибка запроса." });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id, {
        attributes: { exclude: ["createdAt", "updatedAt", "password"] },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ result: false, error: error });
    }
  })
  .patch(async (req, res) => {
    const { id } = req.params;
    const { name, email, password, id: userId } = req.body;
    const result = await User.findByPk(id);

    if (!userId) {
      result.update({ name, email, password });
      res.sendStatus(201);
    } else res.sendStatus(400);

    try {
    } catch (error) {
      res.status(400).json({ result: false, error: error });
    }
  });

module.exports = router;
