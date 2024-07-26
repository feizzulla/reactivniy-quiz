import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

export default function RegisterPage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}users`);
    return response.data;
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  // console.log(users);

  const initialState = { password: "", email: "" };
  const [inputs, setInputs] = useState(initialState);

  function changeHandler(event) {
    event.preventDefault()
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault()
console.log('=============');
  }
  // console.log(inputs);



  return <div>

    <form onSubmit={submitHandler}>
      Введи почту:
      <input name="email" autoComplete="off" value={inputs.email} onChange={changeHandler}/>
      Введи пароль:
      <input name="password" autoComplete="off" value={inputs.password} onChange={changeHandler}/>
      <Button type={"submit"}  text={"регистрация"}  />
    </form>
  </div>;
}
