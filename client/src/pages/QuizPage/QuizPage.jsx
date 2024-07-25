import React from 'react'
import { useParams } from 'react-router-dom';

export default function QuizPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>QuizPage</div>
  )
}
