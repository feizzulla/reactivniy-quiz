const router = require("express").Router();
const { User } = require("../../db/models");

router
  .route("/users")
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
      const newUser = req.body;
      const addUser = await User.create(newUser);
      res.status(201).json(addUser);
    } catch (error) {
      res.status(400).json({ result: false, error: "Ошибка запроса." });
    }
  });

module.exports = router;
