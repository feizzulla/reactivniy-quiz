import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardQuiz from "../../components/CardQuiz/CardQuiz";
import tempFile from "../../../TEMP/quiz.json";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function QuizPage() {
  const params = useParams();
  // const quiz = tempFile;
  // console.log(params);

  const [index, setIndex] = useState(1);

  function newQuestionHandler() {
    setTimeout(() => {
      setIndex((n) => n + 1);
    }, 2000);
  }

  //!сделать запросы с сервера
  const [quests, setQuests] = useState([]);

  const getQuestion = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/questions/${params.id}`);
    console.log(response);
    return response;
  };

  useEffect(() => {
    getQuestion().then((data) => setQuests(data));
    // console.log(quests);
  }, []);

//!вот до сюда не рабочий код


  if (index <= quests.length) {
    return (
      <div className="quizPage">
        <div className="quiz">
          Выбери тему:
          <CardQuiz key={index} el={quests.filter((el) => el.id === `${index}`)[0]} newQuestion={() => newQuestionHandler()} />
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
