import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { SHOPPAGE_ROUTE } from '../untils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchCategory, fetchDevices, fetchCollection } from '../htpp/itemAPI';

const SelectCategory = observer(() => {
  const { cartItem } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => cartItem.setCategories(data));
    fetchCollection().then((data) => cartItem.setCollections(data));
    fetchDevices().then((data) => cartItem.setCartItem(data));
  }, []);

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
                onClick={() => cartItem.setSelectCategory(type.id)}
                className="menu-selectcategories__body">
                <img
                  src={type.image}
                  className="menu-selectcategories__image"
                  alt="image category"
                />
                <li className="menu-selectcategories__item">{type.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SelectCategory;
