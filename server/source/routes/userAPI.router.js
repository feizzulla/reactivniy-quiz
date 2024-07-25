const router = require("express").Router();
const { user } = require("../../db/models");

router.route("/user").get(async (req, res) => {
  try {
  } catch (error) {
    console.log(`${error}`);
    res.status(200).json(error);
  }
});

module.exports = router;
