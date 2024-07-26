import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardQuiz from "../../components/CardQuiz/CardQuiz";
import tempFile from "../../../TEMP/quiz.json";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function QuizPage() {
  const params = useParams();
  const quiz = tempFile;

  const [index, setIndex] = useState(1);

  function newQuestionHandler() {
    setTimeout(() => {
      setIndex((n) => n + 1);
    }, 2000);
  }

  if (index <= quiz.length) {
    return (
      <div className="quizPage">
        <div className="quiz">
          Выбери тему:
          <CardQuiz key={index} el={quiz.filter((el) => el.id === `${index}`)[0]} newQuestion={() => newQuestionHandler()} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Квиз окончен!
        <Link to={`/`}>
          <Button text={"Вернуться"} />
        </Link>
      </div>
    );
  }
}
