import CardTheme from "../../components/CardTheme/CardTheme";
import tempFile from "../../../TEMP/theme.json";

export default function MainPage() {
  const theme = tempFile;

  return (
    <div className="mainPage">
      <div className="theme">
        Выбери тему:
        {theme.map((el, index) => (
          <CardTheme key = {index} el={el}/>
        ))}
      </div>
    </div>
  );
}
