import React, { Component, useContext, useEffect } from 'react';
import SelectCategory from '../components/SelectCategory';
import Image from '../components/img/main.png';
import CreateButton from '../components/button/CreateButton';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const MainPage = observer(() => {
  const cartItem = useContext(Context);


  return (
    <div className="wrapper">
      <main className="page">
        <section className="information">
          <div className="information__container _container">
            <div className="information__mainblock">
              <div className="information__aboutit aboutit">
                <div className="aboutit__title">Discover, collect, and sell extraordinary NFTs</div>
                <div className="aboutit__subtitle">
                  Explore the upcoming NFT projects, get all the info you need to help you decide if
                  that is the right project for you. Don’t forget to check the additional info in
                  the project page, including relevant tips per project.
                </div>
                <div className="aboutit__buttons">
                  <CreateButton />
                  <a href="#" className="connect-button">
                    Connect
                  </a>
                </div>
              </div>
              <div className="information__image">
                <img src={Image} alt="informationimage" />
              </div>
            </div>
          </div>
        </section>
        <SelectCategory />
      </main>
    </div>
  );
});

export default MainPage;
