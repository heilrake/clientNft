import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { SHOPPAGE_ROUTE } from '../untils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCategory, fetchItems, fetchDevices, fetchCollection } from '../htpp/itemAPI';

const SelectCategory = observer(() => {
  const { cartItem } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => cartItem.setCategories(data));
    fetchCollection().then((data) => cartItem.setCollections(data));
    fetchDevices().then((data) => cartItem.setCartItem(data));
    // fetchItems().then((data) => cartItem.setCartItem(data));
    //fetchItems().then((data) => cartItem.setCartItem(data));
  }, []);
  console.log(cartItem);

  return (
    <div className="selectcategories">
      <div className="selectcategories__container _container">
        <div className="selectcategories__info">
          <div className="aboutit__title">Browse by category</div>
          <div className="aboutit__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="selectcategories__collection">
          <ul className="selectcategories__menu menu-selectcategories">
            {cartItem.categories.map((type, index) => (
              <Link
                key={`${type}_${index}`}
                category={type.name}
                to={SHOPPAGE_ROUTE}
                onClick={() => cartItem.setSelectCategory(type)}
                className="menu-selectcategories__body">
                <img
                  src={type.image}
                  className="menu-selectcategories__image"
                  alt="image category"
                />
                <li className="menu-selectcategories__item">{type.name}</li>
              </Link>
            ))}
            {/*<Link to={SHOPPAGE_ROUTE} className="menu-selectcategories__body">
              <img src={top} className="menu-selectcategories__image" alt="" />
              <li className="menu-selectcategories__item">Top</li>
            </Link>
            <Link to={SHOPPAGE_ROUTE} class="menu-selectcategories__body">
              <img src={art} className="menu-selectcategories__image" alt="" />
              <li className="menu-selectcategories__item">Art</li>
            </Link>
            <Link to={SHOPPAGE_ROUTE} className="menu-selectcategories__body">
              <img src={untility} className="menu-selectcategories__image" alt="" />
              <li className="menu-selectcategories__item">Utility</li>
            </Link>
            <Link to={SHOPPAGE_ROUTE} className="menu-selectcategories__body">
              <img src={music} className="menu-selectcategories__image" alt="" />
              <li className="menu-selectcategories__item">Music</li>
            </Link>
            <Link to={SHOPPAGE_ROUTE} className="menu-selectcategories__body">
              <img src={sport} className="menu-selectcategories__image" alt="" />
              <li className="menu-selectcategories__item">Sports</li>
            </Link>
            <Link to={SHOPPAGE_ROUTE} className="menu-selectcategories__body">
              <img src={virtualworld} className="menu-selectcategories__image" alt="" />
              <li claclassNamess="menu-selectcategories__item">Virtual Worlds</li>
            </Link>*/}{' '}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SelectCategory;
