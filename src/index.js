import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import { BrowserRouter } from 'react-router-dom';
import CartItemStore from './store/CartItemStore';

import './components/style/null.scss';
import './components/style/style.scss';
import './components/style/category.scss';
import App from './App';

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);
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
      <App />
      {/*  <Header /><AppRouter />*/}
    </Context.Provider>
  </BrowserRouter>,
);
