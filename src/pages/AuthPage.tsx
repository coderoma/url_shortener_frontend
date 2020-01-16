import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { HttpMethods } from "../constants";

interface loginData {
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState<loginData>({
    email: "",
    password: ""
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", HttpMethods.POST, {
        ...form
      });
      console.log("data", data);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Сократитель Ссылок</h2>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div className="row">
              <div className="input-field">
                <input
                  id="email"
                  type="text"
                  className="yellow-input"
                  name="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="yellow-input"
                  name="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4 mr-10" disabled={loading}>
              Войти
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
