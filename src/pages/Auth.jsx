import React, { Component, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTATION_ROUTE } from '../untils/consts';
import { useLocation } from 'react-router-dom'; // хук что бы знать где мы находимся
import { login, registration } from '../htpp/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log();
      }
      user.setIsUser(user);
      user.setIsAuth(true);
      navigate(MAINPAGE_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <section className="login">
      <div className="login__container _container">
        <div className="login__body">
          <div className="login__title">{isLogin ? 'Authorisation' : 'Registration'}</div>
          <div className="input-group">
            <div className="input-group__form">
              <label htmlFor="myInput" className="input-group__label">
                Login:
              </label>
              <input
                type="text"
                className="input-group__input login"
                placeholder="Введите ваш email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group__form">
              <label htmlFor="myInput" className="input-group__label">
                Password:
              </label>
              <input
                className="input-group__input password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="input-group__form">
              <label htmlFor="myInput" className="input-group__label">
                Purse:
              </label>
              <input type="text" id="myInput" className="input-group__input purse" />
            </div>
          </div>
          <div className="login__bottom">
            <div className="login__subtitle">
              {isLogin ? (
                <div>
                  Нет акаунта?
                  <Link to={REGISTATION_ROUTE} className="login__link">
                    Регистрация
                  </Link>
                </div>
              ) : (
                <div>
                  Есть акаунт
                  <Link to={LOGIN_ROUTE} className="login__link">
                    Войти
                  </Link>
                </div>
              )}
            </div>
            <button className="login__button" onClick={click}>
              {isLogin ? ' Войти' : ' Регистарция'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Auth;
