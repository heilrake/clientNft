import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import CartItemStore from './store/CartItemStore';
import Header from './components/Header';
import './components/style/null.scss';
import './components/style/style.scss';
import './components/style/category.scss';

export const Context = createContext(null);
//Контекст позволяет передавать данные через дерево компонентов без
//необходимости передавать пропсы на промежуточных уровнях.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        user: new UserStore(),
        cartItem: new CartItemStore(),
      }}>
      <Header />
      <AppRouter />
    </Context.Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
