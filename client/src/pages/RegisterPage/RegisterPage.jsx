import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import {
  passwordValidation,
  emailValidation,
} from "../../utils/validation/user.validation";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [users, setUsers] = useState([]);
  const [checkMail, setcheckMail] = useState("none");
  const [checkPassword, setcheckPassword] = useState("none");
  const [hasEmail, sethasEmail] = useState("none");
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/users`);
    return response.data;
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const [inputs, setInputs] = useState({ name: "", password: "", email: "" });

  function changeHandler(event) {
    event.preventDefault();
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    sethasEmail("none");
    let isCorrectEmail = false;
    let isCorrectPassword = false;
    event.preventDefault();
    if (emailValidation(inputs.email)) {
      setcheckMail("none");
      isCorrectEmail = true;
    } else {
      setcheckMail("block");
    }

    if (passwordValidation(inputs.password)) {
      setcheckPassword("none");
      isCorrectPassword = true;
    } else {
      setcheckPassword("block");
    }

    if (isCorrectPassword && isCorrectEmail) {
      try {
        axios.post(`${import.meta.env.VITE_API}/users`, {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        });
        navigate(`/`);
      } catch (error) {
        console.error(error);
      }
    } else {
      sethasEmail("block");
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        Введи имя:
        <input
          name="name"
          autoComplete="off"
          value={inputs.name}
          onChange={changeHandler}
        />
        Введи почту:
        <input
          name="email"
          autoComplete="off"
          value={inputs.email}
          onChange={changeHandler}
        />
        <p style={{ display: checkMail, color: "red" }}>
          Неправильный формат почты
        </p>
        <p style={{ display: hasEmail, color: "red" }}>
          Почта уже зарегистрирована
        </p>
        Введи пароль:
        <input
          name="password"
          autoComplete="off"
          value={inputs.password}
          onChange={changeHandler}
        />
        <p style={{ display: checkPassword, color: "red" }}>
          Пароль должен содержать цифры, спец. символы, большую и маленьку букву
          и быть длинее 6 символов
        </p>
        <Button type={"submit"} text={"регистрация"} />
      </form>
    </div>
  );
}
