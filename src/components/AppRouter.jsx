import React, { Component, useContext } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { Context } from '..';
import { MainPage } from '../pages';
import ShopPage from '../pages/ShopPage';

import { authRoutes, publicRoutes } from '../routes';
import { SHOPPAGE_ROUTE } from '../untils/consts';

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  console.log(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact /> // {<Component />} из масива routes.js
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path={SHOPPAGE_ROUTE} element={<ShopPage />} />
      <Route path="*" element={<MainPage />} /> {/* если вдруг ничего не отработало*/}
    </Routes>
  );
};

export default AppRouter;
