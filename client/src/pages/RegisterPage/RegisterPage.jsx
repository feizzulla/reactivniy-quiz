import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate, useNavigation } from "react-router-dom";

export default function RegisterPage() {
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

  console.log(users);

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
      user.push(el.name);
    });

    if (user.includes(inputs.email)) {
      setOkuser("none");
      pass = users.filter((el) => el.name === inputs.email);
      userID = users.filter((el) => el.name === inputs.email);
      // console.log(pass);
    } else {
      setOkuser("block");
    }

    if (pass[0].password === inputs.password) {
      setOkpass("none");
      navigate(`/${userID[0].id}`);
    } else {
      setOkpass("block");
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
      Введи имя:
        <input name="name" autoComplete="off" value={inputs.name} />
        Введи почту:
        <input name="email" autoComplete="off" value={inputs.email} onChange={changeHandler} />
        <p style={{ display: okuser }}>не правильное имя</p>
        Введи пароль:
        <input name="password" autoComplete="off" value={inputs.password} onChange={changeHandler} />
        <p style={{ display: okpass }}>плохой пароль</p>
        <Link to={`/register`}>
          <Button text={"регистрация"} />
        </Link>
      </form>
    </div>
  );
}
