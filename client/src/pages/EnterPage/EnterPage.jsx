import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import styles from "./EnterPage.module.css";

export default function EnterPage() {
  const [users, setUsers] = useState([]);
  const [okuser, setOkuser] = useState("none");
  const [okpass, setOkpass] = useState("none");
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/users`);
    return response.data;
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const initialState = { password: "", email: "" };
  const [inputs, setInputs] = useState(initialState);

  function changeHandler(event) {
    event.preventDefault();
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    let user = [];
    let pass = "";
    let userID = "";
    users.forEach((el) => {
      user.push(el.email);
    });

    if (user.includes(inputs.email)) {
      setOkuser("none");
      pass = users.filter((el) => el.email === inputs.email);
      userID = users.filter((el) => el.email === inputs.email);
    } else {
      setOkuser("block");
    }

    if (pass[0].password === inputs.password) {
      setOkpass("none");
      localStorage.id = userID[0].id;
      navigate(`/${userID[0].id}`);
    } else {
      setOkpass("block");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        Введи почту:
        <input
          name="email"
          autoComplete="off"
          value={inputs.email}
          onChange={changeHandler}
        />
        <p style={{ display: okuser }}>такого пользователя нет</p>
        Введи пароль:
        <input
          name="password"
          autoComplete="off"
          value={inputs.password}
          onChange={changeHandler}
        />
        <p style={{ display: okpass }}>неверный пароль</p>
        <Button type={"submit"} text={"войти"} />
        <Link to={`/register`}>
          <Button text={"регистрация"} />
        </Link>
      </form>
    </div>
  );
}

{
  /* <div>
<div>
  <img style={{ weidth: "60px", height: "60px" }} src={el.imageURL} alt={el.theme} />
</div>
<form onSubmit={submitHandler}>
  <div>{el.question}</div>
  <input name="newAnswer" autoComplete="off"></input>
  <Button type={"submit"} color={response} text={"ответить"} onClick={newQuestion} />
</form>
</div> */
}
