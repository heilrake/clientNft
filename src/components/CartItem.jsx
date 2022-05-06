// наши карточки на shopPage

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { fetchDevices, fetchOneDevice, fetchItems } from '../htpp/itemAPI';
import { CARTITEM_ROUTE } from '../untils/consts';

const CartItem = ({ cartItem }) => {
  const navigate = useNavigate();

  return (
    <ul
      className="carts__menu menu"
      onClick={(() => navigate(CARTITEM_ROUTE + '/' + cartItem.id) )}>
      <li className="menu__item">
        <img src={cartItem.img} alt="cart" />
        <div className="menu__information">
          {/*<div className="menu__autor">{cartItem.nameAuthor}</div>*/}
          <div className="menu__name">{cartItem.name}</div>
          <div className="menu__price">{cartItem.price} ETH</div>
        </div>
      </li>
    </ul>
  );
};

export default CartItem;
