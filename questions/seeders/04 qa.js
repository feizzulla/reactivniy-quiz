"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Qas",
      [
        {
          question: "Какое самое крупное наземное животное на планете?",
          answer: "Слон",
          themeId: 1,
          imageurl: "../../../public/questions/qa11.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какой морской беспозвоночный организм способен регенерировать потерянные части тела, включая сердце и мозг?",
          answer: "Гидра",
          themeId: 1,
          imageurl: "../../../public/questions/qa12.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какое животное является единственным существующим видом рода Ailuropoda?",
          answer: "Панда",
          themeId: 1,
          imageurl: "../../../public/questions/qa13.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какая птица известна своей способностью имитировать звуки человеческой речи?",
          answer: "Попугай",
          themeId: 1,
          imageurl: "../../../public/questions/qa14.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какое млекопитающее обитает только в Австралии и известное своими сумчатыми детенышами?",
          answer: "Кенгуру",
          themeId: 1,
          imageurl: "../../../public/questions/qa15.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Один из основных хуков в библиотеке React, предназначенный для управления побочными эффектами в функциональных компонентах. Он позволяет вам выполнять действия, такие как запросы к API, подписки на события или манипуляции с документом, после того, как компонент отрендерится?",
          answer: "useEffect",
          themeId: 2,
          imageurl: "../../../public/questions/qa21.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какой метод используется для добавления элементов в конец массива?",
          answer: "Push",
          themeId: 2,
          imageurl: "../../../public/questions/qa22.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какой оператор используется для строгого равенства с типом?",
          answer: "===",
          themeId: 2,
          imageurl: "../../../public/questions/qa23.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Какое ключевое слово используется для объявления переменной, доступной только в пределах блока?",
          answer: "Let",
          themeId: 2,
          imageurl: "../../../public/questions/qa24.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "Как называется механизм, позволяющий избежать CallbackHella при работе с асинхронным кодом?",
          answer: "Promise",
          themeId: 2,
          imageurl: "../../../public/questions/qa15.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что на картинке?",
          answer: "Шлемур",
          themeId: 3,
          imageurl: "../../../public/questions/qa31.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что на картинке?",
          answer: "Кенгуруль",
          themeId: 3,
          imageurl: "../../../public/questions/qa32.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что на картинке?",
          answer: "Форельса",
          themeId: 3,
          imageurl: "../../../public/questions/qa33.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что на картинке?",
          answer: "Тирамисуслик",
          themeId: 3,
          imageurl: "../../../public/questions/qa34.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Что на картинке?",
          answer: "Кирпичуга",
          themeId: 3,
          imageurl: "../../../public/questions/qa35.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как зовут персонажа с картинки?",
          answer: "Морфиус",
          themeId: 4,
          imageurl: "../../../public/questions/qa41.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как зовут персонажа с картинки?",
          answer: "Симба",
          themeId: 4,
          imageurl: "../../../public/questions/qa42.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как зовут персонажа с картинки?",
          answer: "Максимус",
          themeId: 4,
          imageurl: "../../../public/questions/qa43.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как зовут персонажа с картинки?",
          answer: "Гектор",
          themeId: 4,
          imageurl: "../../../public/questions/qa44.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Как зовут персонажа с картинки?",
          answer: "Вито",
          themeId: 4,
          imageurl: "../../../public/questions/qa45.jpg",
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
