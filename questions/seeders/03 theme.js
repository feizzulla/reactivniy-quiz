"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          theme: "Животные",
          imageurl: "../../../public/theme/th1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Программирование (JS)",
          imageurl: "../../../public/theme/th2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Шлакоблокунь",
          imageurl: "/images/math.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme: "Герои фильмов и мультфильмов",
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
