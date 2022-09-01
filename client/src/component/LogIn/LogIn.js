import "./logIn.css";
import React, { useState } from "react";
import Axios from "axios";

const LogIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");


  const loginToUser = () => {
    Axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.massage) {
        setLoginStatus(response.data.massage)
      }
      else {
        console.log("what i dont know: ", response.data[0].username)
        setLoginStatus(response.data[0].username)
      }
    });
  };


  return (
    <div className="login">
      <div className="information">
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />


        <button onClick={loginToUser}>Log In </button>
      </div>
      <div className="employees">

      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default LogIn;