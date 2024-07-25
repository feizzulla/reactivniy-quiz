require("dotenv").config();
const axios = require("axios");
const openaiApiKey = process.env.OPENAI_API_KEY;

async function generateQuestions(req, res, next) {
  const { theme } = req.body;

  if (!theme) {
    return res.status(400).send("Неправильная тема");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Вы полезный помощник, который создает вопросы для викторины.",
          },
          {
            role: "user",
            content: `Создайте 2 коротких и несложных вопросов викторины по теме: ${theme}`,
          },
        ],
        max_tokens: 1000,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        timeout: 10000,
      }
    );
    const questions = response.data.choices[0].text
      .trim()
      .split("\n")
      .map((q) => q.trim());
    req.questions = questions;
    next();
  } catch (error) {
    console.error("Ошибка выполнения:", error);
    res.status(500).send("Сервер OpenAI не отвечает или недоступен");
  }
}

module.exports = { generateQuestions };
