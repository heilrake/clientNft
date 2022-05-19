import React, { Component, useContext, useEffect, useState } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { Context } from '..';
import { MainPage } from '../pages';
import ShopPage from '../pages/ShopPage';
import { observer } from 'mobx-react-lite';

import { authRoutes, publicRoutes } from '../routes';
import { SHOPPAGE_ROUTE } from '../untils/consts';
import { check } from '../htpp/userAPI';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

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
});

export default AppRouter;
