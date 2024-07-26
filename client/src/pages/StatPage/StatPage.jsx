import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CardQuiz from "../../components/CardQuiz/CardQuiz";
import tempFile from "../../../TEMP/quiz.json";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function StatPAge() {
  const userId = localStorage.id;
  const [stat, setStat] = useState([{ answers: 0, wronganswers: 0 }]);

  const getStatistic = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API}/statistic/${userId}`
    );
    return response.data;
  };

  useEffect(() => {
    getStatistic().then((data) => {
      setStat(data);
    });
  }, []);

  console.log(stat);
  console.log("localstorage:", userId);

  return (
    <div>
      <p>Правильные ответы: {stat[0].answers}</p>
      <p>Неправильные ответы: {stat[0].wronganswers}</p>
    </div>
  );
}
