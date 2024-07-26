require("dotenv").config();

const axios = require("axios");
const openaiApiKey = process.env.OPENAI_API_KEY;

async function checkAnswer(req, res, next) {
  const { question, userAnswer, correctAnswer } = req.body;

  if (!question || !userAnswer || !correctAnswer) {
    return res.status(400).send("Неправильный запрос");
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
              "Вы полезный помощник, который проверяет ответы на викторины.",
          },
          {
            role: "user",
            content: `Вопрос: ${question}\nОтвет пользователя: ${userAnswer}\nПравильный ответ: ${correctAnswer}\nЭто правильный ответ? Ответь "true" или "false".`,
          },
        ],
        max_tokens: 5,
        n: 1,
        stop: null,
        temperature: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    const gptResponse = response.data.choices[0].message.content
      .trim()
      .toLowerCase();
    req.isCorrect = gptResponse === "true";
    next();
  } catch (error) {
    console.error("Ошибка выполнения:", error);
    res.status(500).send("Сервер OpenAI не отвечает или недоступен");
  }
}

module.exports = { checkAnswer };
