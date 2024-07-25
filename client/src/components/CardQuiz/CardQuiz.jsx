import Button from "../Button/Button";
import { useState } from "react";

export default function CardTheme({ el, newQuestion }) {
  let answer = el.answer;

  const [response, setResponse] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.childNodes[1].value === answer) {
      setResponse("green");
    } else setResponse("red");
  };

  return (
    <div>
      <div>
        <img style={{ weidth: "60px", height: "60px" }} src={el.imageURL} alt={el.theme} />
      </div>
      <form onSubmit={submitHandler}>
        <div>{el.question}</div>
        <input name="newAnswer" autoComplete="off"></input>
        <Button type={"submit"} color={response} text={"ответить"} onClick={newQuestion} />
      </form>
    </div>
  );
}
