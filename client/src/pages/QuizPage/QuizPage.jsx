import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import CardQuiz from "../../components/CardQuiz/CardQuiz";
import tempFile from "../../../TEMP/quiz.json";

export default function QuizPage() {
  const params = useParams();
  const quiz = tempFile;


  let index = 0;
  const newQuestionHandler = () => {
    console.log('===================');
    index ++
  }
  
  let el = quiz[index];
  useEffect(() => {
    el = quiz[index]
  }, [index]);
  
  console.log(index);

  console.log(params);
  return (
    <div className="quizPage">
      <div className="quiz">
        Выбери тему:
        <CardQuiz key={index} el={el} newQuestion={() => newQuestionHandler()}/>
      </div>
    </div>
  );
}

// return (
//   <div className="quizPage">
//     <div className="quiz">
//       Выбери тему:
//       {quiz.map((el, index) => (
//         <CardQuiz key = {index} el={el}/>
//       ))}
//     </div>
//   </div>
// )
