import CardTheme from "../../components/CardTheme/CardTheme";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [themes, setThemes] = useState([]);

  const getTheme = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/theme`);
    return response.data;
  };

  useEffect(() => {
    getTheme().then((data) => setThemes(data));
  }, []);

  return (
    <div className="mainPage">
        <h2>Выбери тему:</h2>
      <div className="theme">
        {themes?.map((el, index) => (
          <CardTheme key={index} el={el} />
        ))}
      </div>
    </div>
  );
}

// return (
//   <div className="mainPage">
//     <div className="theme">
//       Выбери тему:
//       {theme.map((el, index) => (
//         <CardTheme key={index} el={el} />
//       ))}
//     </div>
//   </div>
// );
