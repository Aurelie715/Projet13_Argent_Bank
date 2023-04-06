import React, { useState } from "react";
import "./SignIn.css";
import {signIn} from "../../services/authentification.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modifyName } from "../../store";

export default function SignIn() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);

  const navigate = useNavigate();

  const onRemembermeChange = (event) => {
    setRememberme(event.currentTarget.value)
  };

  const onUsernameChange = (event) => {
    setUsername(event.currentTarget.value)
  };

  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value)
  };

  const onLoginBtnClick = () => {
    signIn(username, password, rememberme).then((user) => {
      dispatch(modifyName(`${user.firstName} ${user.lastName}`)); 
      navigate("/profile");
    });
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={onUsernameChange}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={onRemembermeChange}/>
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="button" onClick={onLoginBtnClick}>Sign In</button>
        </form>
      </section>
    </main>
  );
}
