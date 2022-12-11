import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Ligin = () => {
  return (
    <div className="login">
      <div className="loginContainer container">
        <h1>Добро пожаловать</h1>
        <input
          className="authInput"
          autoFocus
          placeholder="Email"
          type="text"
          required
          onChange={(e) => {}}
        />
        <input
          className="authInput"
          autoFocus
          type="password"
          placeholder="Пароль"
          required
          onChange={(e) => {}}
        />
        <input
          className="authInput"
          autoFocus
          type="password"
          placeholder="Повторите пароль"
          required
          onChange={(e) => {}}
        />

        <div className="btnContainer">
          <button className="authButton" disabled>
            Войти
          </button>
          <button className="authButton" disabled>
            <Link to="/">Войти</Link>
          </button>
          <p className="authP">
            <span>У вас нет аккаунта?</span>
            <span className="authSpan">Регистарция</span>
          </p>
          <button className="authButton">Зарегистрироваться</button>
          <button className="authButton">
            <Link to="/">Зарегистрироваться</Link>
          </button>
          <p className="authP">
            <span>У вас уже есть аккаунт?</span>
            <span className="authSpan">Войти</span>
          </p>
          <p className="authP">Пароль не совпадает!</p>={" "}
        </div>
      </div>
    </div>
  );
};

export default Ligin;
