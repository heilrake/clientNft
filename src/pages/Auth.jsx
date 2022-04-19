import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTATION_ROUTE } from '../untils/consts';
import { useLocation } from 'react-router-dom'; // хук что бы знать где мы находимся

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <section class="login">
      <div className="login__container _container">
        <div className="login__body">
          <div className="login__title">{isLogin ? 'Authorisation' : 'Registration'}</div>
          <div className="input-group">
            <div className="input-group__form">
              <label for="myInput" class="input-group__label">
                Login:
              </label>
              <input type="text" id="myInput" className="input-group__input login" />
            </div>
            <div className="input-group__form">
              <label for="myInput" className="input-group__label">
                Password:
              </label>
              <input type="text" id="myInput" className="input-group__input password" />
            </div>
            <div className="input-group__form">
              <label for="myInput" className="input-group__label">
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
            <a href="#" className="login__button">
              {isLogin ? ' Войти' : ' Регистарция'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
