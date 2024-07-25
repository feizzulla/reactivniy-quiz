"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Qas",
      [
        {
          question: "Какого ты года?",
          answer: "Мне 15 лет",
          themeId: 1,
          imageurl: "/images/someimage.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Какое животное спит стоя?",
          answer: "Моя собака",
          themeId: 1,
          imageurl: "/images/someimage.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Космос это?",
          answer: "Космос",
          themeId: 1,
          imageurl: "/images/someimage.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Цвет льва?",
          answer: "Львиный",
          themeId: 3,
          imageurl: "/images/someimage.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Сколько кто?",
          answer: "Да",
          themeId: 2,
          imageurl: "/images/someimage.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Qas", null, {});
  },
};
