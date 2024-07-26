import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function CardTheme({ el }) {
  let choice = (el) => {
    console.log("выбрана", el);
  };

  return (
    <div className="cardTheme">
      <div>
        <img style={{ weidth: "180px", height: "180px" }} src={el.imageurl} alt={el.theme} />
      </div>
      <form>
        <div className="cardText">{el.theme}</div>
        <div className="cardButton">
        <Link to={`/quiz/${el.id}`}>
          <Button text={"Выбрать"} onClick={() => choice(el.theme)} />
        </Link>
        </div>
      </form>
    </div>
  );
}
