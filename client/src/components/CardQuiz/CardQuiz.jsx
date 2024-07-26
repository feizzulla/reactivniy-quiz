import Button from "../Button/Button";
import { useState } from "react";
import styles from "./CardQuiz.module.css";
import axios from "axios";

// /api/checkanswer
// POST - возвращет json с "correct": true или false в зависимости от правильности ответа. Работает хорошо с русским языком. Для того, чтобы сформировать запрос нужно отправить телом запроса:
// {
// "question": "Любой вопрос",
// "userAnswer": "Любой ответ пользователя, в числах или строкой.",
// "correctAnswer": "Правильный ответ. Формировать ответ лучше текстом на русском языке."
// }

export default function CardTheme({ el, newQuestion }) {
  let answer = el.answer;

  const [response, setResponse] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (event.target.children[1].children.newAnswer.value === answer) {
      setResponse("green");
      localStorage.answer += 1;
    } else {
      setResponse("red");
      localStorage.wronganswer += 1;
    }
  };
  //   const submitHandler = async (event) => {
  //     event.preventDefault();
  //     const isCorrect = await axios.post(`${import.meta.env.VITE_API}/checkanswer`,
  // {
  // "question": "Любой вопрос",
  // "userAnswer": "Любой ответ пользователя, в числах или строкой.",
  // "correctAnswer": "Правильный ответ. Формировать ответ лучше текстом на русском языке."
  // }

  // {
  // "question": `${el.question}`,
  // "userAnswer": `${event.target.childNodes[1].value}`,
  // "correctAnswer": `${el.answer}`
  // }

  //   );
  //   console.log(isCorrect);
  //   if (event.target.childNodes[1].value === answer) {
  //     setResponse("green");
  //   } else setResponse("red");
  // };
  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   const isCorrect = await axios.post(
  //     `${import.meta.env.VITE_API}/checkanswer`,
  //     {
  //       question: `${el.question}`,
  //       userAnswer: `${event.target.childNodes[1].value}`,
  //       correctAnswer: `${el.answer}`,
  //     }
  //   );
  //   if (isCorrect.data.correct) {
  //     setResponse("green");
  //   } else setResponse("red");
  // };

  return (
    <div className={styles.container}>
      <div>
        <img
          style={{ weidth: "400px", height: "400px" }}
          src={el.imageurl}
          alt={el.theme}
        />
      </div>
      <form onSubmit={submitHandler}>
        <div>{el.question}</div>
        <div className={"answerto"}>
          <input name="newAnswer" autoComplete="off"></input>
          <Button
            type={"submit"}
            color={response}
            text={"ответить"}
            onClick={newQuestion}
          />
        </div>
      </form>
    </div>
  );
}
