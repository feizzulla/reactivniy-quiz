"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Statistics",
      [
        {
          answers: 6,
          wronganswers: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 5,
          wronganswers: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 8,
          wronganswers: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 2,
          wronganswers: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 10,
          wronganswers: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 8,
          wronganswers: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          answers: 3,
          wronganswers: 5,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Statistics", null, {});
  },
};
