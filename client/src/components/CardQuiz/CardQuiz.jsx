import Button from "../Button/Button";

export default function CardTheme({ el, newQuestion }) {
  // console.log(el);
  let choice = (el) => {
    // console.log("выбрана", el);
  };
  let answer = el.answer


  return (
    <div>
      <div>
        <img style={{ weidth: "60px", height: "60px" }} src={el.imageURL} alt={el.theme} />
      </div>
      <form>
        <div>{el.question}</div>

        <Button text={"ответить"} onClick={newQuestion}/>
      </form>
    </div>
  );
}
