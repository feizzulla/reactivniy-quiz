"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Pasha",
          email: "pavel24@gmail.com",
          password: "f&sf3#54d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Misha",
          email: "mikhail76@gmail.com",
          password: "fS33#54d",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Larisa",
          email: "ivangool@yandex.ru",
          password: "f41S$fdds",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
