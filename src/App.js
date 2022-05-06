import React, { Component, useContext, useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { check } from './htpp/userAPI';
import LoaderSpinner from './components/LoaderSpinner';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import Header from './components/Header';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setIsUser(true); // значит польователь залогинился
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);
  if (loading) {
    return <LoaderSpinner />;
  }
  return (
    <div>
      <Header/>
      <AppRouter />
    </div>
  );
});

export default App;
