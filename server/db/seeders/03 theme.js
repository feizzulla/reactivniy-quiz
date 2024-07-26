"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          theme: "Животные",
          imageurl: "/images/animal.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Программирование",
          imageurl: "/images/code.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Математика",
          imageurl: "/images/math.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Фильмы",
          imageurl: "/images/movies.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Космос",
          imageurl: "/images/space.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
