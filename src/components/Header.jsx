import logo from './img/logo.png';
import React, { Component, useContext } from 'react';
import { Context } from '..';
import './style/header.scss';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, BASKET_ROUTE, CREATE_ROUTE } from '../untils/consts';
import { useNavigate } from 'react-router-dom';

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  user.setIsAuth(true);
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__main">
          <Link to={MAINPAGE_ROUTE}>
            <div className="header__logo">
              <div className="header__logoimage">
                <img src={logo} alt="logotipe" />
              </div>
              <span className="header__title">CHNU</span>
            </div>
          </Link>
          <div className="header__search">
            <div className="search-form">
              <form action="#" className="search-form__item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_107)">
                    <path
                      d="M19.7266 17.293L15.832 13.3984C15.6562 13.2227 15.418 13.125 15.168 13.125H14.5312C15.6094 11.7461 16.25 10.0117 16.25 8.125C16.25 3.63672 12.6133 0 8.125 0C3.63672 0 0 3.63672 0 8.125C0 12.6133 3.63672 16.25 8.125 16.25C10.0117 16.25 11.7461 15.6094 13.125 14.5312V15.168C13.125 15.418 13.2227 15.6562 13.3984 15.832L17.293 19.7266C17.6602 20.0938 18.2539 20.0938 18.6172 19.7266L19.7227 18.6211C20.0898 18.2539 20.0898 17.6602 19.7266 17.293ZM8.125 13.125C5.36328 13.125 3.125 10.8906 3.125 8.125C3.125 5.36328 5.35937 3.125 8.125 3.125C10.8867 3.125 13.125 5.35938 13.125 8.125C13.125 10.8867 10.8906 13.125 8.125 13.125Z"
                      fill="white"
                      fillOpacity="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_107">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  autoComplete="off"
                  name="form[]"
                  placeholder="Search to item here"
                  type="text"
                  className="search-form__imput"
                />
              </form>
            </div>
          </div>
          <ul className="header__navigation navigation">
            <li className="navigation__list">Explore</li>
            <li className="navigation__list">My items</li>
          </ul>
          {user.isAuth ? (
            <div>
              <button
                className="header__connect connect-button "
                onClick={() => navigate(ADMIN_ROUTE)}>
                Admin
              </button>
              <button
                className="header__connect connect-button "
                onClick={() => navigate(LOGIN_ROUTE)}>
                Exit
              </button>
              <button className="header__create create-button" onClick={() => navigate(CREATE_ROUTE)}>
                Create
              </button>
            </div>
          ) : (
            <button onClick={() => user.setIsAuth(true)} className="header__connect connect-button">
              Connect
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
