import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function EnterPage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/users`);
    return response.data;
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  console.log(users);


  return <div>
    <form>
      Введи почту:
      <input name="newAnswer" autoComplete="off" />
    </form>
  </div>;
}

{/* <div>
<div>
  <img style={{ weidth: "60px", height: "60px" }} src={el.imageURL} alt={el.theme} />
</div>
<form onSubmit={submitHandler}>
  <div>{el.question}</div>
  <input name="newAnswer" autoComplete="off"></input>
  <Button type={"submit"} color={response} text={"ответить"} onClick={newQuestion} />
</form>
</div> */}